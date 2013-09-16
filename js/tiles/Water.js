OGame.Tiles.Water = function(){
    var me = new OGame.Tiles.TileBase();
    me.solid = 0;
    me.friction = 2;
    //this.prototype.tile_type = 'water';
    me.tile_type = 'water';

    me.Animations['default'] = {"Frames":[{"name":"default","img":"/imgs/minecraft1.png","width":"32","height":"32","x":"480","y":"384","offsetWidth":"32","offsetHeight":"32","offsetYSpace":"0"}]};


    return me;
}