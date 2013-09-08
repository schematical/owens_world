OGame.Chars.Owen = function (){
    var me = new OObject();
    me.speed = .25;
    me.ammo = 100;
    me.x = 100;
    me.y = 100;
    me.Animations = {
        'default':{"Frames":[{"name":"","img":"/imgs/thief.png","width":"37","height":"50","x":"20","y":"100","offsetWidth":"64","offsetHeight":"64"}]}
    };

    return me;
}
