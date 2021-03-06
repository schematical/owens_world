var OGame = {
    Needs:{},
    Actions:{},
    Map:{},
    Settings:{
        tile_width:64,
        viewport_width:14,
        viewport_height:10,
        viewport_depth:100
    },
    Focus:{
        x:0,
        y:0,
        z:0
    },
    SpecialActions:{},
    Images:{},
    Tiles:{},
    Objects:{},
    Levels:{},
    CreateLevel:function(width, height, depth){
        for(var z = 1; z <= depth; z++){
            OGame.Map.Tiles[z] = [];
            for(var y = 1; y <= height; y++){
                OGame.Map.Tiles[z][y] = [];
                /*for(var x = 1; x <= width; x++){
                    OGame.Map.Tiles[z][y][x] = {};
                }*/
            }
        }
    },
    InitMap:function(funMap){
        OGame.Map = new funMap();
        OGame.Map.Init();
    },
    InitImage:function(strUrl){
        var imageObj = OGame.Images[strUrl];

        if(typeof(OGame.Images[strUrl]) == 'undefined'){

            imageObj = new Image();
            imageObj.src = strUrl;
            imageObj.oLoaded = false;

            imageObj.onload = function(){
                this.oLoaded = true;

                var transparentColor = {
                    r:156,
                    g:156,
                    b:156
                };

                var img = this;
                // create a source canvas. This is our pixel source
                var srcCanvas = OGame.eleCanvas;
                srcCanvas.width = img.width;
                srcCanvas.height = img.height;

                // create a destination canvas. Here the altered image will be placed
                var dstCanvas = document.createElement("canvas");
                dstCanvas.width = img.width;
                dstCanvas.height = img.height;

                // append the canvas elements to the container
                //document.getElementById('container').appendChild(srcCanvas);
                //document.getElementById('container').appendChild(dstCanvas);

                // get context to work with
                var srcContext = OGame.eleCanvas;//.getContext("2d");
                //var dstContext = dstCanvas.getContext("2d");

                // draw the loaded image on the source canvas
                //srcContext.drawImage(img, 0, 0);

                // read pixels from source
                var pixels = srcContext.getImageData(0, 0, img.width, img.height);

                // iterate through pixel data (1 pixels consists of 4 ints in the array)
                for(var i = 0, len = pixels.data.length; i < len; i += 4){
                    var r = pixels.data[i];
                    var g = pixels.data[i+1];
                    var b = pixels.data[i+2];

                    // if the pixel matches our transparent color, set alpha to 0
                    if(r == transparentColor.r && g == transparentColor.g && b == transparentColor.b){
                        pixels.data[i+3] = 0;
                    }
                }

                // write pixel data to destination context
                this._pixels = pixels;
                srcContext.putImageData(pixels,0,0);
                //this.url = 'data:image/gif;base64:'+ pixels;
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
    AddSpecialAction:function(strKey, objAction, intCycles){
        OGame.SpecialActions[strKey] = {
            cycle_time:intCycles,
            action:objAction,
            count_down:intCycles
        };
    },
    DeleteObject:function(objObject){
        if(typeof(objObject) == 'string'){
            var objObject = OGame.Objects[objObject];
        }
        objObject.Tile.RemoveObject(objObject);
        //Get its Id and remove it
        delete OGame.Objects[objObject.Id];
    },
    GetTile:function(x,y,z){
        z = Math.floor(z);
        y = Math.floor(y);
        x = Math.floor(x);
        if(typeof OGame.Map.Tiles[z] == 'undefined'){
            OGame.Map.Tiles[z] = [];
        }
        if(typeof OGame.Map.Tiles[z][y] == 'undefined'){
            OGame.Map.Tiles[z][y] = [];
        }
        if(typeof OGame.Map.Tiles[z][y][x] == 'undefined'){
            return OGame.AddTile(x,y,z, OGame.Tiles.Air);
        }
        return OGame.Map.Tiles[
                z
            ][
                y
            ][
                x
            ];
    },
    AddTile:function(x,y,z, funTile){
        if(typeof OGame.Map.Tiles[z] == 'undefined'){
            OGame.Map.Tiles[z] = [];
        }
        if(typeof OGame.Map.Tiles[z][y] == 'undefined'){
            OGame.Map.Tiles[z][y] = [];
        }

        var objTile = new funTile();
        //objTile.imageObj = OGame.InitImage(objTile.img);
        objTile.Id = 'tile_' + x + '_' + y + '_' + z;
        objTile.x = x;
        objTile.y = y;
        objTile.z = z;
        OGame.Map.Tiles[z][y][x] = objTile;
        for(var i in objTile.Animations){
            for(var ii in objTile.Animations[i].Frames){
                var objFrame = objTile.Animations[i].Frames[ii];
                objTile.Animations[i].Frames[ii].imageObj = OGame.InitImage(objFrame.img);
            }
        }
        return objTile;
    },
    RemoveTile:function(objTile){
        delete OGame.Map.Tiles[objTile.z][objTile.y][objTile.x];
    },
    MoveObject:function(objObject, newX, newY, newZ){

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
        objObject.Tile.Objects[objObject.Id] = objObject;

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


        OGame.InitMap(OGame.Levels.City);


        setInterval(
            OGame.Cycle,
            '100'
        );;
        //OGame.Cycle();
    },
    DrawShade:function(x,y,width,height, alpha){
        OGame.eleCanvas.beginPath();
        var intOrigAlpha = OGame.eleCanvas.globalAlpha;
        OGame.eleCanvas.globalAlpha   = alpha;

        OGame.eleCanvas.rect(
            x,
            y,
            width,
            height,
            alpha
        );

        OGame.eleCanvas.fillStyle = 'black';
        OGame.eleCanvas.fill();
        OGame.eleCanvas.globalAlpha   = intOrigAlpha;
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
        for(var i in OGame.SpecialActions){
            OGame.SpecialActions[i].count_down -= 1;
            if(OGame.SpecialActions[i].count_down == 0){

                OGame.SpecialActions[i].count_down = OGame.SpecialActions[i].cycle_time;
                OGame.SpecialActions[i].action.Exicute();
            }
        }

        OGame.eleCanvas.clearRect(0, 0, c.width, c.height);
        //console.log(OGame.Players);
        for(strId in OGame.Objects){
            var objObject = OGame.Objects[strId];
            objObject.Move();
            if(typeof(objObject.Action) != 'undefined'){
                if(typeof(objObject.Action) == 'object'){
                    objObject.Action.Exicute();
                }else{
                    objObject.Action();
                }
            }
            //Apply Physics
            var origY = objObject.y;
            var origX = objObject.x;
            var origZ = objObject.z;
            var newY = objObject.y + objObject.vY;
            var newX = objObject.x + objObject.vX;
            var newZ = objObject.z + objObject.vZ;

            objObject.vX = objObject.vX - (objObject.vX * objObject.Tile.Below().friction * objObject.friction);

            objObject.vY = objObject.vY - (objObject.vY*objObject.Tile.Below().friction * objObject.friction);
            //objObject.vZ = objObject.vZ - (objObject.vZ*objObject.Tile.friction); //No friction for z
            objObject.vX = objObject.vX + objObject.Tile.gX;
            objObject.vY = objObject.vY + objObject.Tile.gY;
            objObject.vZ = objObject.vZ + objObject.Tile.gZ;
            //console.log(objObject.Id + ': ' + objObject.vY + '_' + objObject.y + '/' + newY);

            var blnMoveX = (Math.floor(origX) != Math.floor(newX));
            var blnMoveY = (Math.floor(origY) != Math.floor(newY));
            var blnMoveZ = (Math.floor(origZ) != Math.floor(newZ));


                if(
                    (blnMoveZ)
                ){

                    if(
                        (Math.floor(newZ) < 0) ||
                        (Math.floor(newZ) >= OGame.Map.depth)
                    ){

                        blnMoveZ = false;
                    }else{
                        var objTile = OGame.GetTile(
                            newX,
                            newY,
                            newZ
                        );
                        if(objTile.solid){

                            blnMoveZ = false;
                        }

                    }
                    if(!blnMoveZ){
                        objObject.vZ = 0;
                        newZ = origZ;
                    }
                }

                if(blnMoveY){
                    if(
                        (Math.floor(newY) < 0) ||
                        (Math.floor(newY) >= OGame.Map.height)
                    ){
                        blnMoveY = false;
                    }else{
                        var objTile = OGame.GetTile(
                            newX,
                            newY,
                            newZ
                        );
                        if(objTile.solid){
                            blnMoveY = false;
                        }
                    }
                    if(!blnMoveY){
                        objObject.ContactTile(objTile);
                        objObject.vY = 0;
                        newY = origY;
                    }
                }

                if(blnMoveX){
                    if(
                        (Math.floor(newX) < 0) ||
                        (Math.floor(newX) >= OGame.Map.width)
                    ){
                        blnMoveX = false
                    }else{
                        var objTile = OGame.GetTile(
                            newX,
                            newY,
                            newZ
                        );
                        if(objTile.solid){

                            blnMoveX = false;
                        }
                    }
                    if(!blnMoveX){
                        objObject.ContactTile(objTile);
                        newX = origX;
                        objObject.vX = 0;
                    }
                }

                objObject.x = newX;
                objObject.y = newY;
                objObject.z = newZ;
                if(blnMoveX || blnMoveY || blnMoveZ){
                    OGame.MoveObject(
                        objObject,
                        objObject.x,
                        objObject.y,
                        objObject.z
                    );
                }
                //Contact
                var arrObjects = objObject.TouchingObjects();
                for(var i =0; i < arrObjects.length; i++){

                    if(objObject.Id != arrObjects[i].Id){
                        //console.log('Touching: '+ objObject.Id + '!=' + arrObjects[i].Id);
                        objObject.ContactObject(arrObjects[i]);
                    }
                }



        }




        //-------------_RENDER_------------------------//

        //Update screens focus before draw
        if(typeof(OGame.Focus.objObject) != 'undefined'){
            OGame.Focus.x = OGame.Focus.objObject.x;
            OGame.Focus.y = OGame.Focus.objObject.y;
            OGame.Focus.z = OGame.Focus.objObject.z;
        }
        //console.log(OGame.Focus.z);


        //for(z in OGame.Map.Tiles){
        var zStart = Math.floor(OGame.Focus.z - OGame.Settings.viewport_depth);
        if(zStart < 0){
            zStart = 0;
        }
        var zEnd = Math.floor(OGame.Focus.z + OGame.Settings.viewport_depth);

        if(zEnd > OGame.Map.Tiles.length){
            //OGame.Map.Tiles[z] = [];
            zEnd = OGame.Map.Tiles.length;
        }
        for(var z = zStart; z < zEnd; z ++){
            var yStart = Math.floor(OGame.Focus.y - OGame.Settings.viewport_height);
            if(yStart < 0){
                yStart = 0;
            }
            var yEnd = Math.floor(OGame.Focus.y + OGame.Settings.viewport_height);
            if(typeof(OGame.Map.Tiles[z]) == 'undefined'){
                OGame.Map.Tiles[z] = [];
            }
            if(yEnd > OGame.Map.Tiles[z].length){
                yEnd = OGame.Map.Tiles[z].length;
            }
            for(var y = yStart; y < yEnd; y ++){
            //for(y in OGame.Map.Tiles[z]){
                var xStart = Math.floor(OGame.Focus.x - OGame.Settings.viewport_width);
                if(xStart < 0){
                    xStart = 0;
                }
                var xEnd = Math.floor(OGame.Focus.x + OGame.Settings.viewport_width);
                if(typeof(OGame.Map.Tiles[z][y]) == 'undefined'){
                    OGame.Map.Tiles[z][y] = [];
                }
                if(
                    (xEnd > OGame.Map.Tiles[z][y].length)
                ){
                    xEnd = OGame.Map.Tiles[z][y].length;
                }
                for(var x = xStart; x < xEnd; x ++){

                    //Render

                    //Only draw tiles that exists(performance)
                    if(
                        (typeof(OGame.Map.Tiles[z]) != 'undefined') &&
                        (typeof(OGame.Map.Tiles[z][y]) != 'undefined') &&
                        (typeof(OGame.Map.Tiles[z][y][x]) != 'undefined') &&
                        (typeof(OGame.Map.Tiles[z][y][x].Draw) != 'undefined')
                    ){
                        var objAbove = OGame.Map.Tiles[z][y][x].Above().Above();
                        if(
                            (!objAbove.visible) ||
                            (
                                (!OGame.Map.Tiles[z][y][x].Front().visible) ||
                                (!OGame.Map.Tiles[z][y][x].Above().Front().visible) ||
                                (!OGame.Map.Tiles[z][y][x].Right().visible)
                            )
                        ){
                            OGame.Map.Tiles[z][y][x].Draw(OGame.eleCanvas);
                            for(strId in OGame.Map.Tiles[z][y][x].Objects){
                                //console.log("Drawing: " + strId);
                                OGame.Map.Tiles[z][y][x].Objects[strId].Draw(OGame.eleCanvas);
                            }
                        }else{
                            objAbove.top = undefined;
                        }
                    }
                }
            }
        }



    }
};


/*var */
OGame.Chars = {};