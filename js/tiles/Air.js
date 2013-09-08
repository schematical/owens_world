
OGame.Tiles.Air = function(){
    var me = new OGame.Tiles.TileBase();
    me.visible = false;
    me.solid = false;
    me.friction = .1;

    //me.Animations['default'] = {"Frames":[{"name":"Grass","img":"/imgs/minecraft1.png","height":"32","width":"32","x":"0","y":"0","offsetWidth":"32","offsetHeight":"32"}]};


    return me;
}