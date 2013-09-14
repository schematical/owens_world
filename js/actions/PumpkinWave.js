OGame.Actions.PumpkinWave = function(){
    var me =  new OAction();
    me.width = 1;
    me.max_width = 2;
    me.distance = 10;
    me.direction = 'f';
    me.Tile = {};

    me.Exicute = function(){

        if(this.distance == 0){
            delete(OGame.SpecialActions['pumpkin_wave'])
            this.Exicute = this.Success;
        }

        var arrTiles = this.Tile.NextTo();
        this.Tile = arrTiles[this.direction];
        //this.Tile.Replace(OGame.Tiles.Cheese);
        var objATile = this.Tile;
        for(i = 0; i < this.width; i++){
            objATile.Replace(OGame.Tiles.Pumpkin);
            objATile.Above().gZ = .5;
            if(this.direction == 'u' || this.direction == 'd'){
                objATile = objATile.Left();
            }else{
                objATile = objATile.Front();
            }

        }
        var objATile = this.Tile;
        for(i = 0; i < this.width; i++){
            objATile.Replace(OGame.Tiles.Pumpkin);
            objATile.Above().gZ = .5;
            if(this.direction == 'u' || this.direction == 'd'){
                objATile = objATile.Right();
            }else{
                objATile = objATile.Behind();
            }

        }
        if(this.width < this.max_width){
            this.width += 1;
        }
            //delete(this.Tiles[i]);

        this.distance -= 1;

    }


    return me;
}