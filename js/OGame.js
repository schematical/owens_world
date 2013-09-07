var OGame = {

    Images:{},
    Tiles:{},
    Objects:{},
    CreateLevel:function(width, height, zHeight){
        for(var z = 1; z <= depth; z++){
            OGame.Objects[z] = {};
            for(var y = 1; y <= height; y++){
                OGame.Objects[z][y] = {};
                for(var x = 1; x <= width; x++){
                    OGame.Objects[z][y][x] = {};
                }
            }
        }
    },
    InitImage:function(strUrl){
        var imageObj = OGame.Images[strUrl];
        if(typeof(OGame.Images[strUrl]) == 'undefined'){
            imageObj = new Image();
            imageObj.src = strUrl;
        }
        return imageObj;
    },
    AddPlayer:function(strId, funPlayer){
        var objPlayer = new funPlayer();
        objPlayer.Id = strId;
        objPlayer.imageObj = OGame.InitImage(objPlayer.img);

        OGame.AddObject(strId, objPlayer);
        return objPlayer;
    },
    AddObject:function(strId, objObject){

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
        objTile.imageObj = OGame.InitImage(objTile.img);
        objTile.Id = 'tile_' + x + '_' + y + '_' + z;
        OGame.Tiles[z][y][x] = objTile;
        return objTile;
    },
    MoveObject:function(objObject, newX, newY, newZ){
        if(newX typeof 'TileBase'){
            var newX = newX.x;
            var newY = newX.y;
            var newZ = newX.z;
        }
        //Remove from old tile
        var objTitle = OGame.GetTile(
            oldX,
            oldY,
            oldZ
        );
        objTile = 
        objObject.x = newX;
        objObject.y = newY;
        objObject.z = newZ;

    },
    InitMap:function(){
        //Todo: Move this in to level folder or make random
        var width = 10;
        var height = 10;
        var depth = 10;
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
                OGame.Players['owen'].key = objEvent.keyCode;

                objEvent.preventDefault()

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
        setInterval(
            OGame.Cycle,
            '100'
        );
    },
    Cycle:function(){
        c = document.getElementById("myCanvas");
        var context = c.getContext('2d');
        context.clearRect(0, 0, c.width, c.height);
        //console.log(OGame.Players);
        for(strId in OGame.Players){
            OGame.Players[strId].Move();
            //Apply Physics
            OGame.Players[strId].y = OGame.Players[strId].y + OGame.Players[strId].vY;
            OGame.Players[strId].x = OGame.Players[strId].x + OGame.Players[strId].vX;


            //Render
            OGame.Players[strId].Draw(context);
        }

    }
};


/*var */
OGame.Chars = {};