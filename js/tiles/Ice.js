
OGame.Tiles.Ice = function(){
    var me = new OGame.Tiles.TileBase();
    me.friction = 0;

    me.Animations['default'] = {"Frames":[{"name":"","img":"/imgs/minecraft1.png","width":"32","height":"32","x":"96","y":"128","offsetWidth":"32","offsetHeight":"32"}]};


    return me;
}