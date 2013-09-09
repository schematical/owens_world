
OGame.Chars.Axe = function(){
    var me = new OObject();
    me.loot = true;
    me.speed = 1;
    me.friction = .2;
    me.Animations = {
        "default":{"Frames":[{"name":"default","img":"/imgs/minecraft2.png","width":"15","height":"15","x":"37","y":"408","offsetWidth":"15","offsetHeight":"15","offsetYSpace":"0"}]}
    };
    me.Cycle = function(){}
    return me;
}