OGame.Levels.IceLand = function(){
    var me = new OLevelBase();

    me.Init = function(){

        var Blocks = {
            '1':OGame.Tiles.Dirt,
            '2':OGame.Tiles.Dirt,
            '3':OGame.Tiles.Dirt,
            '4':OGame.Tiles.Grass,
            '5':OGame.Tiles.Ice,
            '6':OGame.Tiles.Grass,
            '7':OGame.Tiles.Grass,
            '8':OGame.Tiles.Grass,
            '9':OGame.Tiles.Grass,
            '10':OGame.Tiles.Grass,
            '11':OGame.Tiles.Ice,
            '12':OGame.Tiles.Air,
            '13':OGame.Tiles.Air,
            '14':OGame.Tiles.Clouds

        };
        //Todo: Move this in to level folder or make random
        var intCanyonStartX = 48;
        var intCanyonEndX = 52;
        //OGame.CreateLevel(this.width,this.height,this.depth);
        for(var z = 0; z <= this.depth; z++){

            for(var y = 0; y <= this.height; y++){

                for(var x = 0; x <= this.width; x++){
                    if(z == 0){
                        if(y == 0){
                            if(x == 0){
                                var lastRZ = 0;
                            }else{
                                var lastRZ = OGame.Map.Tiles[z][y][x - 1]._rZ;
                            }
                            var rZ = Math.round((Math.random()+lastRZ)/2);
                        }else{
                            var rZ = OGame.Map.Tiles[z][y-1][x]._rZ + 0;//Math.floor((Math.random() * 3)-1);
                        }
                    }else if(z > 2){
                        var intChance = Math.random() * 20;
                        rZ = 13;
                        if(z > 7 && intChance > 10){
                            rZ = 14;
                        }

                    }else{
                        var rZ = (OGame.Map.Tiles[z-1][y][x]._rZ + Math.round(Math.random() * OGame.Map.Tiles[z-1][y][x]._rZ)/2);
                    }
                    //console.log(z + ',' + y +',' + x +' = ' + rZ);
                    if(rZ < 1){
                        rZ = 1;
                    }

                    var objBlock = Blocks[rZ];
                    if(typeof(objBlock ) == 'undefined'){
                        objBlock = OGame.Tiles.Grass;
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

        var objPlayer = OGame.AddPlayer(
            'owen',
            OGame.Chars.Cow
        );

        OGame.Focus.objObject = objPlayer;
        this.AddObject(objPlayer, 50,50, 10);

        var objBall = OGame.AddPlayer(
            'ball',
            OGame.Chars.Ball
        );
        this.AddObject(objBall, 50,50, 10);

        for(var i = 0; i < 20; i ++){
            var objCow = OGame.AddPlayer(
                'cow_' + i,
                OGame.Chars.Cow
            );
            objCow.Follow(objBall, OGame.Actions.BlowUp);
            this.AddObject(
                objCow,
                Math.floor(Math.random() * this.width),
                Math.floor(Math.random() * this.height),
                10
            );
        }

        //Add Random Treasure
        for(var i = 0; i < 20; i ++){
            var objLoot = OGame.AddPlayer(
                'axe_' + i,
                OGame.Chars.Axe
            );

            this.AddObject(
                objLoot,
                Math.floor(Math.random() * 10) + objPlayer.x,
                Math.floor(Math.random() * 10) + objPlayer.y,
                10
            );
        }



    }
    return  me;
};