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
        //console.log(typeof(OGame.Images[strUrl])  + ' - '+strUrl);
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
        return OGame.Objects[
                objObject.z
            ][
                objObject.y
            ][
                objObject.x
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
        if(typeof newX  == 'TileBase'){
            var newX = newX.x;
            var newY = newX.y;
            var newZ = newX.z;
        }
        //Remove from old tile
        var objTitle = OGame.GetTile(
            objObject.x,
            objObject.y,
            objObject.z
        );
        objTitle.RemoveObject(objObject);
        objObject.x = newX;
        objObject.y = newY;
        objObject.z = newZ;

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
                        OGame.Tiles.Sparkle
                    );
                }
            }
        }

    },
    Start:function(){
        $('body').on('keydown',
            function(objEvent){
                //OGame.Players['owen'].key = objEvent.keyCode;

                //objEvent.preventDefault()

            }
        );

        /*OGame.AddPlayer(
            'owen',
            OGame.Chars.Heli
        );
        OGame.AddPlayer(
            'dog',
            OGame.Chars.Dog
        );*/
        OGame.InitMap();
        /*for(var i = 0; i < 20; i++){
            OGame.AddPlayer(
                'ned_' + i,
                OGame.Chars.Ned
            );
        }*/
        /*setInterval(
            OGame.Cycle,
            '100'
        );*/;
        OGame.Cycle();
    },
    Cycle:function(){

        for(var i in OGame.Images){
            if(!OGame.Images[i].oLoaded){
                return;
            }
        }

        c = document.getElementById("myCanvas");
        var context = c.getContext('2d');
        context.clearRect(0, 0, c.width, c.height);
        //console.log(OGame.Players);
        for(strId in OGame.Objects){
            OGame.Objects[strId].Move();
            //Apply Physics
            OGame.Objects[strId].y = OGame.Objects[strId].y + OGame.Objects[strId].vY;
            OGame.Objects[strId].x = OGame.Objects[strId].x + OGame.Objects[strId].vX;


            //Render
            OGame.Objects[strId].Draw(context);
        }
        for(z in OGame.Tiles){
            for(y in OGame.Tiles[z]){
                for(x in OGame.Tiles[z][y]){

                    //Render
                   OGame.Tiles[z][y][x].Draw(context);
                }
            }
        }


    }
};


/*var */
OGame.Chars = {};