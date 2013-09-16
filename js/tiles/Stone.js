
OGame.Tiles.Stone = function(){

    var me = new OGame.Tiles.TileBase();
    OGame.Tiles.Stone.tile_type = 'stone';
    me.tile_type = OGame.Tiles.Stone.tile_type;
    me.solid = true;
    me.friction = 1;

    me.Animations['default'] = {"Frames":[{"name":"b_walk","img":"/imgs/minecraft1.png","width":"32","height":"32","x":"32","y":"0","offsetWidth":"32","offsetHeight":"32","offsetYSpace":"0"}]};


    return me;
}