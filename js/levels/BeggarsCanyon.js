OGame.Levels.BeggarsCanyon = function(){
    var me = new OLevelBase();

    me.Init = function(){

        var Blocks = {
            '1':OGame.Tiles.Sparkle,
            '2':OGame.Tiles.Dirt,
            '3':OGame.Tiles.Dirt,
            '4':OGame.Tiles.Grass,
            '5':OGame.Tiles.Air,
            '6':OGame.Tiles.Air,
            '7':OGame.Tiles.Air,
            '8':OGame.Tiles.Air,
            '9':OGame.Tiles.Air,
            '10':OGame.Tiles.Air

        };
        //Todo: Move this in to level folder or make random
        var intCanyonStartX = 48;
        var intCanyonEndX = 52;
        //OGame.CreateLevel(this.width,this.height,this.depth);
        for(var z = 0; z <= this.depth; z++){

            for(var y = 0; y <= this.height; y++){
                //if(z == 0){
                    intCanyonStartX = intCanyonStartX + Math.floor(Math.random() * 4) -2;
                    intCanyonEndX = intCanyonEndX + Math.floor(Math.random() * 4) -2;
                //}
                for(var x = 0; x <= this.width; x++){
                    if(z == 0){
                        if(y == 0){
                            var intOffset = 0;
                            if(x > intCanyonStartX && x < intCanyonEndX){
                                var intOffset = 3;
                            }

                            var rZ = Math.floor(Math.random() * 1) + intOffset;
                        }else{
                            var rZ = Math.floor(Math.random() * 1) + OGame.Map.Tiles[z][y-1][x]._rZ;
                        }

                    }else{
                        var rZ = Math.floor(Math.random() * 2) + 1 + OGame.Map.Tiles[
                            z - 1
                        ][
                            y
                        ][
                            x
                        ]._rZ;
                    }
                    var objBlock = Blocks[rZ];
                    if(typeof(objBlock ) == 'undefined'){
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
            OGame.Chars.Ball
        );

        OGame.Focus.objObject = objPlayer;
        this.AddObject(objPlayer, 50,50, 10);
        var objBall = objPlayer;
        /*var objBall = OGame.AddPlayer(
         'ball',
         OGame.Chars.Ball
         );
         this.AddObject(objBall, 50,50, 10);*/
        objPlayer.Follow(objBall);
        for(var i = 0; i < 10; i ++){
            var objCow = OGame.AddPlayer(
                'cow_' + i,
                OGame.Chars.Cow
            );
            var objThrow = new OGame.Actions.Throw(
                objBall
            );
            var objHold = new OGame.Actions.Hold(
                objBall,
                objThrow
            );
            var objFollow = new OGame.Actions.Follow(
                objBall,
                objHold
            );
            objThrow.Success = objFollow;
            objCow.SetAction(
                objFollow
            );







            this.AddObject(
                objCow,
                Math.floor(Math.random() * this.width),
                Math.floor(Math.random() * this.height),
                10
            );
        }



        //Add Random Treasure
        for(var i = 0; i < 10; i ++){
            var objRaptor = OGame.AddPlayer(
                'raptor_' + i,
                OGame.Chars.Raptor
            );
            var objThrow = new OGame.Actions.Throw(
                objBall
            );
            var objHold = new OGame.Actions.Hold(
                objBall,
                objThrow
            );
            var objFollow = new OGame.Actions.Follow(
                objBall,
                objHold
            );
            objThrow.Success = objFollow;
            objRaptor.SetAction(
                objFollow
            );

            this.AddObject(
                objRaptor,
                Math.floor(Math.random() * this.width),
                Math.floor(Math.random() * this.height),
                10
            );
        }

        //Add Random Treasure
        for(var i = 0; i < 10; i ++){
            var objLoot = OGame.AddPlayer(
                'axe_' + i,
                OGame.Chars.Axe
            );

            this.AddObject(
                objLoot,
                Math.floor(Math.random() * this.width),
                Math.floor(Math.random() * this.height),
                10
            );
        }

    }
    return  me;
};