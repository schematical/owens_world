OGame.Levels.IceLand = function(){
    var me = new OLevelBase();

    me.Init = function(){

        var Blocks = {
            '1':OGame.Tiles.Sparkle,
            '2':OGame.Tiles.Dirt,
            '3':OGame.Tiles.Dirt,
            '4':OGame.Tiles.Ice,
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

                for(var x = 0; x <= this.width; x++){

                    var objBlock = Blocks[z];
                    if(typeof(objBlock ) == 'undefined'){
                        objBlock = OGame.Tiles.Air;
                    }

                    objTile = OGame.AddTile(
                        x,
                        y,
                        z,
                        objBlock
                    );
                    //objTile._rZ = rZ;
                }
            }
        }


        /* ----- ADD Player -----------------*/

        var objPlayer = OGame.AddPlayer(
            'owen',
            OGame.Chars.Cow
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
        );

    }
    return  me;
};