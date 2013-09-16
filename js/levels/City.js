OGame.Levels.City = function(){
    var me = new OLevelBase();
    me.width = 50;
    me.height = 50;
    me.Init = function(){

        var Blocks = {
            //'1':OGame.Tiles.Sparkle,

            '1':OGame.Tiles.Cheese,
            '2':OGame.Tiles.Dirt,
            '3':OGame.Tiles.Dirt,
            '4':OGame.Tiles.Grass,
            '5':OGame.Tiles.Grass,
            '6':OGame.Tiles.Ice,
            '7':OGame.Tiles.Grass,
            '8':OGame.Tiles.Air,
            '9':OGame.Tiles.Air,
            '10':OGame.Tiles.Air,
            '11':OGame.Tiles.Air,
            '12':OGame.Tiles.Dirt,
            '13':OGame.Tiles.Dirt,
            '14':OGame.Tiles.Air,
            '15':OGame.Tiles.Air,
            '16':OGame.Tiles.Air,
            '17':OGame.Tiles.Air,
            '18':OGame.Tiles.Air,
            '19':OGame.Tiles.Air,
            '20':OGame.Tiles.Air,
            '21':OGame.Tiles.Air,
            '22':OGame.Tiles.Air,
            '23':OGame.Tiles.Air
            //'24':OGame.Tiles.Clouds

        };
        //Todo: Move this in to level folder or make random
        var intCanyonStartX = 48;
        var intCanyonEndX = 52;
        //OGame.CreateLevel(this.width,this.height,this.depth);
        var intSwitchCt = Math.round(Math.random() * 10 );
        for(var z = 0; z < this.depth; z++){

            for(var y = 0; y < this.height; y++){

                for(var x = 0; x < this.width; x++){
                    if(z == 0){
                        if(y == 0){
                            var intOffset = 0;

                            if(x == 0){
                                var rZ = Math.round(Math.random() * 8) + intOffset;
                            }else{
                               var rZ = OGame.Map.Tiles[z][y][x-1]._rZ;
                            }
                        }else{
                            if(Math.round(y/intSwitchCt) == (y/intSwitchCt)){
                                var rZ = Math.round(Math.random() * 6) -3 + OGame.Map.Tiles[z][y-1][x]._rZ;
                                intSwitchCt = Math.floor(Math.random() * 10);
                            }else{
                                var rZ = OGame.Map.Tiles[z][y-1][x]._rZ;
                            }
                        }

                    }else{
                        if(Math.round(y/intSwitchCt) == (y/intSwitchCt)){
                            var rZ = Math.round(Math.random() * 6) -3 + OGame.Map.Tiles[
                                z - 1
                                ][
                                y
                                ][
                                x
                                ]._rZ;
                            intSwitchCt = Math.floor(Math.random() * 10);
                        }else{
                            var rZ = OGame.Map.Tiles[
                                z - 1
                                ][
                                y
                                ][
                                x
                                ]._rZ;
                        }
                    }
                    if(rZ < z - 7){
                        rZ = z - 5;
                    }
                    if(rZ > z + 7){
                        rZ = z + 5;
                    }

                    var objBlock = Blocks[rZ];
                    //console.log(x + ',' + y + ',' + z + ' = ' + rZ + ':' + typeof(objBlock ) + '  -  ' + intSwitchCt);
                    if(typeof(objBlock ) == 'undefined'){
                        objBlock = OGame.Tiles.Air;
                    }

                    if((y == 0) || (y == this.height -1)){
                        objBlock = OGame.Tiles.Cheese;
                    }
                    if((x == 0) || (x == this.width - 1)){
                        objBlock = OGame.Tiles.Cheese;
                    }
                    if((z == 0) || (z >= this.depth - 3)){
                        objBlock = OGame.Tiles.Air;
                    }
                    objTile = OGame.AddTile(
                        x,
                        y,
                        z,
                        objBlock
                    );
                    objTile._rZ = rZ;
                }
            }
        }


        /* ----- ADD Player -----------------*/

        /*    var objPlayer = OGame.AddPlayer(
         'owen',
         OGame.Chars.Heli
         );

         OGame.Focus.objObject = objPlayer;
         objPlayer.x = 50;
         objPlayer.y = 50;
         objPlayer.z = 6;
         OGame.MoveObject(
         objPlayer,
         objPlayer.x,
         objPlayer.y,
         objPlayer.z
         );*/

        var objPlayer = OGame.AddPlayer(
            'owen',
            OGame.Chars.Cow
        );

        OGame.Focus.objObject = objPlayer;
        this.AddObject(objPlayer,
            Math.floor(this.width/2),
            Math.floor(this.height/2),
            this.depth
        );
        objPlayer.Survive();
        objPlayer.Menu = function(){

            var objBuild = new OGame.Actions.Build(
                new OBuilding(this.Tile)
            );
            this.SetAction(
                objBuild
            );
        }
        //var objBall = objPlayer;
        var objBall = OGame.AddPlayer(
         'ball',
            OGame.Chars.Ball
         );
         this.AddObject(objBall, this.width/2,this.height/2, this.depth);
        //objPlayer.Follow(objBall);
        for(var i = 0; i < 1; i ++){
            var objCow = OGame.AddPlayer(
                'cow_' + i,
                OGame.Chars.Cow
            );
            this.AddObject(
                objCow,
                Math.floor(Math.random() * this.width),
                Math.floor(Math.random() * this.height),
                this.depth
            );






            objCow.Survive();

            //OGame.Focus.objObject = objCow;
        }



        //Add Random Treasure
        for(var i = 0; i < 3; i ++){
            var objRaptor = OGame.AddPlayer(
                'raptor_' + i,
                OGame.Chars.Raptor
            );


            this.AddObject(
                objRaptor,
                Math.floor(Math.random() * this.width),
                Math.floor(Math.random() * this.height),
                this.depth
            );
            objRaptor.Survive();
        }

        /*//Add Random Treasure
        for(var i = 0; i < 10; i ++){
            var objLoot = OGame.AddPlayer(
                'axe_' + i,
                OGame.Chars.Axe
            );

            this.AddObject(
                objLoot,
                Math.floor(Math.random() * this.width),
                Math.floor(Math.random() * this.height),
                this.depth
            );
        }*/

    }
    return  me;
};