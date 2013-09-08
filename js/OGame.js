var OGame = {
    Settings:{
        tile_width:64
    },
    Focus:{
        x:0,
        y:0,
        z:0
    },
    Images:{},
    Tiles:{},
    Objects:{},
    CreateLevel:function(width, height, depth){
        for(var z = 1; z <= depth; z++){
            OGame.Tiles[z] = {};
            for(var y = 1; y <= height; y++){
                OGame.Tiles[z][y] = {};
                for(var x = 1; x <= width; x++){
                    OGame.Tiles[z][y][x] = {};
                }
            }
        }
    },
    InitImage:function(strUrl){
        var imageObj = OGame.Images[strUrl];

        if(typeof(OGame.Images[strUrl]) == 'undefined'){

            imageObj = new Image();
            imageObj.src = strUrl;
            imageObj.oLoaded = false;
            imageObj.onload = function(){
                console.log("Loaded: "+ this.src);
                imageObj.oLoaded = true;
            }
            OGame.Images[strUrl] = imageObj;
        }

        return imageObj;
    },
    AddPlayer:function(strId, funPlayer){
        var objPlayer = new funPlayer();
        objPlayer.Id = strId;

        //console.log(objPlayer.Animations['default']);
        OGame.AddObject(strId, objPlayer);
        return objPlayer;
    },
    AddObject:function(strId, objObject){
        //objObject.imageObj = OGame.InitImage(objObject.img);
        OGame.Objects[strId] = objObject;
        for(var i in objObject.Animations){
            for(var ii in objObject.Animations[i].Frames){
                var objFrame = objObject.Animations[i].Frames[ii];
                objObject.Animations[i].Frames[ii].imageObj = OGame.InitImage(objFrame.img);
            }
        }

    },
    GetTile:function(x,y,z){
        z = Math.floor(z);
        y = Math.floor(y);
        x = Math.floor(x);
        if(typeof OGame.Tiles[z] == 'undefined'){
            OGame.Tiles[z] = {};
        }
        if(typeof OGame.Tiles[z][y] == 'undefined'){
            OGame.Tiles[z][y] = {};
        }
        if(typeof OGame.Tiles[z][y][x] == 'undefined'){
            return OGame.AddTile(x,y,z, OGame.Tiles.Air);
        }
        return OGame.Tiles[
                z
            ][
                y
            ][
                x
            ];
    },
    AddTile:function(x,y,z, funTile){
        var objTile = new funTile();
        //objTile.imageObj = OGame.InitImage(objTile.img);
        objTile.Id = 'tile_' + x + '_' + y + '_' + z;
        objTile.x = x;
        objTile.y = y;
        objTile.z = z;
        OGame.Tiles[z][y][x] = objTile;
        for(var i in objTile.Animations){
            for(var ii in objTile.Animations[i].Frames){
                var objFrame = objTile.Animations[i].Frames[ii];
                objTile.Animations[i].Frames[ii].imageObj = OGame.InitImage(objFrame.img);
            }
        }
        return objTile;
    },
    MoveObject:function(objObject, newX, newY, newZ){
        console.log('MoveObject' + typeof newX);
        if(typeof newX  == 'TileBase'){
            var newX = newX.x;
            var newY = newX.y;
            var newZ = newX.z;
        }
        //Remove from old tile
        if(typeof(objObject.Tile) != 'undefined'){
            objObject.Tile.RemoveObject(objObject);
        }
        var objTitle = OGame.GetTile(
            objObject.x,
            objObject.y,
            objObject.z
        );
        ;
        /*objObject.x = newX;
        objObject.y = newY;
        objObject.z = newZ;*/
        objObject.Tile = objTitle;

    },
    InitMap:function(){
        //Todo: Move this in to level folder or make random
        var width = 10;
        var height = 10;
        var depth = 1;
        OGame.CreateLevel(width,height,depth);
        for(var z = 1; z <= depth; z++){

            for(var y = 1; y <= height; y++){
                for(var x = 1; x <= width; x++){

                    OGame.AddTile(
                        x,
                        y,
                        z,
                        OGame.Tiles.Grass
                    );
                }
            }
        }

    },
    Start:function(){
        OGame.ResizeScreen();
        $('body').on('keydown',
            function(objEvent){
                if(!objEvent.ctrlKey){
                    objEvent.preventDefault();
                }
                if(typeof(OGame.Focus.objObject) != 'undefined'){
                    OGame.Focus.objObject.key = objEvent.keyCode;
                }
                //objEvent.preventDefault()

            }
        );


        OGame.InitMap();
        var objPlayer = OGame.AddPlayer(
            'owen',
            OGame.Chars.Heli
        );

        OGame.Focus.objObject = objPlayer;
        objPlayer.x = 5;
        objPlayer.y = 5;
        objPlayer.z = 2;
        OGame.MoveObject(
            objPlayer,
            objPlayer.x,
            objPlayer.y,
            objPlayer.z
        );
        /*for(var i = 0; i < 20; i++){
            OGame.AddPlayer(
                'ned_' + i,
                OGame.Chars.Ned
            );
        }*/
        setInterval(
            OGame.Cycle,
            '100'
        );;
        //OGame.Cycle();
    },
    ResizeScreen:function(){
        c = document.getElementById("myCanvas");
        c.width = window.screen.width;
        c.height = window.screen.height;
        OGame.eleCanvas = c.getContext('2d');
        OGame.Focus.offsetX = c.width/2;
        OGame.Focus.offsetY = c.height/2;
    },
    Cycle:function(){

        for(var i in OGame.Images){
            if(!OGame.Images[i].oLoaded){
                return;
            }
        }


        OGame.eleCanvas.clearRect(0, 0, c.width, c.height);
        //console.log(OGame.Players);
        for(strId in OGame.Objects){
            var objObject = OGame.Objects[strId];
            objObject.Move();
            //Apply Physics
            var origY = objObject.y;
            var origX = objObject.x;
            var origZ = objObject.z;

            var newX = objObject.y + objObject.vY;
            var newY = objObject.x + objObject.vX;
            var newZ = objObject.z + objObject.vZ;

            var blnMoveY = (Math.floor(origY) != Math.floor(newX));
            var blnMoveX = (Math.floor(origX) != Math.floor(newY));
            var blnMoveZ = (Math.floor(origZ) != Math.floor(newZ));

            if(blnMoveY || blnMoveX || blnMoveZ){
                var objTile = OGame.GetTile(
                    newX,
                    newY,
                    newZ
                );
                if(!objTile.solid){
                    objObject.x = newX;
                    objObject.y = newY;
                    objObject.z = newZ;
                    OGame.MoveObject(
                        objObject,
                        objObject.x,
                        objObject.y,
                        objObject.z
                    );
                }
            }else{
                objObject.z = newX;
                objObject.y = newY;
                objObject.z = newZ;
            }



        }




        //-------------_RENDER_------------------------//

        //Update screens focus before draw
        if(typeof(OGame.Focus.objObject) != 'undefined'){
            OGame.Focus.x = OGame.Focus.objObject.x;
            OGame.Focus.y = OGame.Focus.objObject.y;
            OGame.Focus.z = OGame.Focus.objObject.z;
        }



        for(z in OGame.Tiles){
            for(y in OGame.Tiles[z]){
                for(x in OGame.Tiles[z][y]){

                    //Render
                   OGame.Tiles[z][y][x].Draw(OGame.eleCanvas);
                }
            }
        }
        for(strId in OGame.Objects){
            OGame.Objects[strId].Draw(OGame.eleCanvas);
        }


    }
};


/*var */
OGame.Chars = {};