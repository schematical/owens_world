OGame.Chars.Lazer = function () {
    var me = new OObject();
    me.speed = .5;
    me.friction = 0;

    me.Cycle = function(){
        var arrObjects = this.TouchingObjects();
        for(var i =0; i < arrObjects.length; i++){
            console.log('Touching: '+  arrObjects[i].Id + '!= '+ this.objThrower.Id );
            if(this.objThrower.Id != arrObjects[i].Id){
                arrObjects[i].BlowUp();
            }
        }
    }

    me.Animations = {'default':{"Frames":[{"name":"default","img":"/imgs/mgs.gif","width":"35","height":"40","x":"166","y":"433","offsetWidth":"1","offsetHeight":"1","offsetYSpace":"0"}]}};
    me.AnimateEnd = function(strState, strNextState){
        //this.visible = false;
        //this.ChangeState('zap');
    };
    //me.ChangeState('zap');


    return me;
}
