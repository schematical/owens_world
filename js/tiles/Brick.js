
OGame.Tiles.Wood = function(){
    var me = new OGame.Tiles.TileBase();

    me.friction = 1;

    me.Animations['default'] = {"Frames":[{"name":"default","img":"/imgs/minecraft1.png","width":"32","height":"32","x":"128","y":"0","offsetWidth":"32","offsetHeight":"32","offsetYSpace":"0"}]};


    return me;
}