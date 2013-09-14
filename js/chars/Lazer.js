OGame.Chars.Lazer = function () {
    var me = new OObject();
    me.speed = .1;
    me.friction = 0;

    me.Cycle = function(){

    }

    me.Animations ={"default":{"Frames":[{"name":"default","img":"/imgs/mgs.gif","width":"35","height":"40","x":"166","y":"433","offsetWidth":"1","offsetHeight":"1","offsetYSpace":"0"},{"name":"default","img":"/imgs/mgs.gif","width":"35","height":"40","x":"204","y":"433","offsetWidth":"1","offsetHeight":"1","offsetYSpace":"0"},{"name":"default","img":"/imgs/mgs.gif","width":"35","height":"40","x":"247","y":"433","offsetWidth":"1","offsetHeight":"1","offsetYSpace":"0"}]}};
    me.AnimateEnd = function(strState, strNextState){
        //this.visible = false;
        //this.ChangeState('zap');
    };
    me.ContactObject = function(objContact){
        if(objContact.Id != this.objThrower.Id){
            objContact.BlowUp();
        }
    }
    //me.ChangeState('zap');


    return me;
}
