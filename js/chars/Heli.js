OGame.Chars.Heli = function (){
    var me = new OObject();
    me.ammo = 100;
    me.speed = .25;
    me.Animations = {};
    me.Animations['default'] = {"Frames":[{"name":"","img":"/imgs/heli2.gif","height":"42","width":"32","x":"0","y":"0","offsetWidth":"32","offsetHeight":"42"},{"name":"","img":"/imgs/heli2.gif","height":"42","width":"32","x":"0","y":"42","offsetWidth":"32","offsetHeight":"42"},{"name":"","img":"/imgs/heli2.gif","height":"42","width":"32","x":"0","y":"84","offsetWidth":"32","offsetHeight":"42"},{"name":"","img":"/imgs/heli2.gif","height":"42","width":"32","x":"0","y":"126","offsetWidth":"32","offsetHeight":"42"}]};
    me.Animations['left'] = {"Frames":[{"name":"","img":"/imgs/heli2.gif","width":"32","height":"42","x":"0","y":"168","offsetWidth":"32","offsetHeight":"42"},{"name":"","img":"/imgs/heli2.gif","width":"32","height":"42","x":"0","y":"210","offsetWidth":"32","offsetHeight":"42"},{"name":"","img":"/imgs/heli2.gif","width":"32","height":"42","x":"0","y":"252","offsetWidth":"32","offsetHeight":"42"},{"name":"","img":"/imgs/heli2.gif","width":"32","height":"42","x":"0","y":"294","offsetWidth":"32","offsetHeight":"42"}]};
    me.Animations['right'] = {"Frames":[{"name":"","img":"/imgs/heli2.gif","width":"32","height":"42","x":"0","y":"336","offsetWidth":"32","offsetHeight":"42"},{"name":"","img":"/imgs/heli2.gif","width":"32","height":"42","x":"0","y":"378","offsetWidth":"32","offsetHeight":"42"},{"name":"","img":"/imgs/heli2.gif","width":"32","height":"42","x":"0","y":"420","offsetWidth":"32","offsetHeight":"42"},{"name":"","img":"/imgs/heli2.gif","width":"32","height":"42","x":"0","y":"462","offsetWidth":"32","offsetHeight":"42"}]};


    return me;
}
