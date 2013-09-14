
OGame.Tiles.Cheese = function(){
    var me = new OGame.Tiles.TileBase();
    me.solid = true;
    me.friction = 1;

    me.Animations['default'] = {"Frames":[{"name":"b_walk","img":"/imgs/minecraft1.png","width":"32","height":"32","x":"0","y":"96","offsetWidth":"1","offsetHeight":"32","offsetYSpace":"0"}]};


    return me;
}