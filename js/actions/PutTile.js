OGame.Actions.PutTile = function(){
    var me =  new OAction();
    me.objSpecificTile = null;
    me.NewTile = null;
    me.distance = 1;
    me.direction = 'f';
    me.Tile = {};

    me.Exicute = function(){

        if(this.distance == 0){
            delete(OGame.SpecialActions['put'])
            this.Exicute = this.Success;
        }

        if(this.objSpecificTile == null){
             var arrTiles = this.Object.Tile.NextTo();
             this.objSpecificTile = arrTiles[this.Object.facing];
        }
        //this.Tile.Replace(OGame.Tiles.Cheese);
        //var objATile = this.Object.Tile;

        this.objSpecificTile.Replace(
            this.NewTile
        );

        this.distance -= 1;

        this.Object.SetAction(this.Success);
    }


    return me;
}