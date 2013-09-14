OGame.Actions.CheeseRay = function(){
    var me =  new OAction();
    me.width = 1;
    me.max_width = 5;
    me.distance = 15;
    me.direction = 'f';
    me.Tile = {};

    me.Exicute = function(){

        if(this.distance == 0){
            delete(OGame.SpecialActions['cheese_ray'])
            this.Exicute = this.Success;
        }

        var arrTiles = this.Tile.NextTo();
        this.Tile = arrTiles[this.direction];
        //this.Tile.Replace(OGame.Tiles.Cheese);
        var objATile = this.Tile;
        for(i = 0; i < this.width; i++){
            objATile.Replace(OGame.Tiles.Cheese);
            objATile = objATile.Above()
        }
        if(this.width < this.max_width){
            this.width += 1;
        }
            //delete(this.Tiles[i]);

        this.distance -= 1;

    }


    return me;
}