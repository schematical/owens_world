
OGame.Chars.Ball = function(){
    var me = new OObject();
    me.loot = true;
    me.speed = .25;
    me.friction = .1;
    me.Animations = {"default":{"Frames":[{"name":"default","img":"/imgs/minecraft2.png","width":"13","height":"15","x":"245","y":"314","offsetWidth":"32","offsetHeight":"32","offsetYSpace":"0"}]}};
    me.Cycle = function(){}
    return me;
}