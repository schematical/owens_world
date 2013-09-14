OGame.Actions.IceBomb = function(){
    var me =  new OAction();
    me.distance = 5;
    me.Tiles = [];

    me.Exicute = function(){

        if(this.distance == 0){
            delete(OGame.SpecialActions['ice_bomb'])
            this.Exicute = this.Success;
        }
        for(var i in this.Tiles){
            var arrTiles = this.Tiles[i].Around();
            for(var ii in arrTiles){
                this.Tiles[this.Tiles.length] = arrTiles[ii];
                arrTiles[ii].Replace(OGame.Tiles.Ice)
            }
            //delete(this.Tiles[i]);
        }
        this.distance -= 1;

    }


    return me;
}