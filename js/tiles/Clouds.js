
OGame.Tiles.Clouds = function(){
    var me = new OGame.Tiles.TileBase();
    me.visible = false;
    me.solid = false;
    me.friction = .1;

    me.Animations = {"default":{"Frames":[{"name":"default","img":"/imgs/clouds.png","width":"32","height":"32","x":"0","y":"0","offsetWidth":"32","offsetHeight":"32","offsetYSpace":"0"}]}}


    return me;
}