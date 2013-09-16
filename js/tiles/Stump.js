
OGame.Tiles.Stump = function(){
    var me = new OGame.Tiles.TileBase();

    me.friction = 1;

    me.Animations['default'] = {"Frames":[{"name":"default","img":"/imgs/minecraft1.png","width":"32","height":"32","x":"160","y":"32","offsetWidth":"32","offsetHeight":"32","offsetYSpace":"0"}]};
    me.Animations['side'] = {"Frames":[{"name":"default","img":"/imgs/minecraft1.png","width":"32","height":"32","x":"128","y":"32","offsetWidth":"32","offsetHeight":"32","offsetYSpace":"0"}]};


    return me;
}