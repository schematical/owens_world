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
        this.AddObject(objPlayer, 50,50, 5);

        for(var i = 0; i < 20; i ++){
            var objCow = OGame.AddPlayer(
                'cow_' + i,
                OGame.Chars.Cow
            );
            objCow.SetAction(
                new OGame.Actions.Follow(objPlayer)
            );
            this.AddObject(
                objCow,
                Math.floor(Math.random() * this.width),
                Math.floor(Math.random() * this.height),
                10
            );
        }



    }
    return  me;
};