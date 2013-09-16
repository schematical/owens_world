
OGame.Tiles.Grass = function(){

    var me = new OGame.Tiles.TileBase();
    me.friction = .75;

    me.Animations['default'] = {"Frames":[{"name":"Grass","img":"/imgs/minecraft1.png","height":"32","width":"32","x":"0","y":"0","offsetWidth":"32","offsetHeight":"32"}]};
    me.Animations['side'] = {"Frames":[{"name":"default","img":"/imgs/minecraft1.png","width":"32","height":"32","x":"96","y":"0","offsetWidth":"32","offsetHeight":"32","offsetYSpace":"0"}]};

    return me;
}