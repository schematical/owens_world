OGame.Chars.Explosion = function () {
    var me = new OObject();
    me.speed = .25;
    me.ammo = 100;
    me.x = 100;
    me.y = 100;
    me.height = 250;
    me.width = 250;
    me.Cycle = function(){

    }

    me.Animations = {
        "explode":{"Frames":[{"name":"default","img":"/imgs/mgs.gif","width":"40","height":"40","x":"0","y":"390","offsetWidth":"40","offsetHeight":"40","offsetYSpace":"0"},{"name":"default","img":"/imgs/mgs.gif","width":"40","height":"40","x":"40","y":"390","offsetWidth":"40","offsetHeight":"40","offsetYSpace":"0"},{"name":"default","img":"/imgs/mgs.gif","width":"40","height":"40","x":"80","y":"390","offsetWidth":"1","offsetHeight":"40","offsetYSpace":"0"},{"name":"default","img":"/imgs/mgs.gif","width":"44","height":"40","x":"120","y":"390","offsetWidth":"1","offsetHeight":"40","offsetYSpace":"0"},{"name":"default","img":"/imgs/mgs.gif","width":"44","height":"40","x":"121","y":"390","offsetWidth":"1","offsetHeight":"40","offsetYSpace":"0"},{"name":"default","img":"/imgs/mgs.gif","width":"44","height":"40","x":"164","y":"390","offsetWidth":"1","offsetHeight":"40","offsetYSpace":"0"},{"name":"default","img":"/imgs/mgs.gif","width":"44","height":"40","x":"206","y":"390","offsetWidth":"1","offsetHeight":"40","offsetYSpace":"0"},{"name":"default","img":"/imgs/mgs.gif","width":"44","height":"40","x":"249","y":"390","offsetWidth":"1","offsetHeight":"40","offsetYSpace":"0"},{"name":"default","img":"/imgs/mgs.gif","width":"44","height":"40","x":"293","y":"390","offsetWidth":"1","offsetHeight":"40","offsetYSpace":"0"},{"name":"default","img":"/imgs/mgs.gif","width":"44","height":"40","x":"293","y":"390","offsetWidth":"1","offsetHeight":"40","offsetYSpace":"0"},{"name":"default","img":"/imgs/mgs.gif","width":"44","height":"40","x":"339","y":"390","offsetWidth":"1","offsetHeight":"40","offsetYSpace":"0"},{"name":"default","img":"/imgs/mgs.gif","width":"44","height":"40","x":"0","y":"433","offsetWidth":"1","offsetHeight":"1","offsetYSpace":"0"},{"name":"default","img":"/imgs/mgs.gif","width":"44","height":"40","x":"39","y":"433","offsetWidth":"1","offsetHeight":"1","offsetYSpace":"0"},{"name":"default","img":"/imgs/mgs.gif","width":"44","height":"40","x":"83","y":"433","offsetWidth":"1","offsetHeight":"1","offsetYSpace":"0"},{"name":"default","img":"/imgs/mgs.gif","width":"44","height":"40","x":"130","y":"433","offsetWidth":"1","offsetHeight":"1","offsetYSpace":"0"}]}
    };
    me.AnimateEnd = function(strState, strNextState){
        this.visible = false;
    };
    me.ChangeState('explode');


    return me;
}
