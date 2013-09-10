
OGame.Chars.Harnes = function(){
    var me = new OObject();
    me.loot = true;
    me.speed = 1.5;
    me.friction = 0;
    me.Animations = {
        "default":{"Frames":[{"name":"default","img":"/imgs/minecraft2.png","width":"14","height":"17","x":"151","y":"394","offsetWidth":"1","offsetHeight":"1","offsetYSpace":"0"}]}
    };
    me.Cycle = function(){}
    return me;
}