OGame.Chars.Heli = function (){
    var me = new OObject();
    me.ammo = 100;
    me.speed = .25;
    me.Animations = {};
    me.Animations['default'] = {"Frames":[{"name":"","img":"/imgs/heli2.gif","height":"42","width":"32","x":"0","y":"0","offsetWidth":"32","offsetHeight":"42"},{"name":"","img":"/imgs/heli2.gif","height":"42","width":"32","x":"0","y":"42","offsetWidth":"32","offsetHeight":"42"},{"name":"","img":"/imgs/heli2.gif","height":"42","width":"32","x":"0","y":"84","offsetWidth":"32","offsetHeight":"42"},{"name":"","img":"/imgs/heli2.gif","height":"42","width":"32","x":"0","y":"126","offsetWidth":"32","offsetHeight":"42"}]};
    me.Animations['left'] = {"Frames":[{"name":"","img":"/imgs/heli2.gif","width":"32","height":"42","x":"0","y":"168","offsetWidth":"32","offsetHeight":"42"},{"name":"","img":"/imgs/heli2.gif","width":"32","height":"42","x":"0","y":"210","offsetWidth":"32","offsetHeight":"42"},{"name":"","img":"/imgs/heli2.gif","width":"32","height":"42","x":"0","y":"252","offsetWidth":"32","offsetHeight":"42"},{"name":"","img":"/imgs/heli2.gif","width":"32","height":"42","x":"0","y":"294","offsetWidth":"32","offsetHeight":"42"}]};
    me.Animations['right'] = {"Frames":[{"name":"","img":"/imgs/heli2.gif","width":"32","height":"42","x":"0","y":"336","offsetWidth":"32","offsetHeight":"42"},{"name":"","img":"/imgs/heli2.gif","width":"32","height":"42","x":"0","y":"378","offsetWidth":"32","offsetHeight":"42"},{"name":"","img":"/imgs/heli2.gif","width":"32","height":"42","x":"0","y":"420","offsetWidth":"32","offsetHeight":"42"},{"name":"","img":"/imgs/heli2.gif","width":"32","height":"42","x":"0","y":"462","offsetWidth":"32","offsetHeight":"42"}]};

    me.Move = function(){
        if(this.key == -1){
            this.ChangeState('default');
            this.vX = 0;
            this.vY = 0;
            this.vZ = 0;
        }
        if(this.key == 79){
            //for(var i = 0; i < 20; i++){
            this.key = 0;
            var objNed = OGame.AddPlayer(
                'ned_' + Math.random(),
                OGame.Chars.Ned
            );
            objNed.x = this.x;
            objNed.y = this.y;

            //}
        }
        if(this.key == 40){

            this.vY = this.speed;
        }
        if(this.key == 38){
            this.vY = -1 * this.speed;
        }
        if(this.key == 37){
            this.ChangeState('left');
            this.vX = -1 * this.speed;
        }
        if(this.key == 39){
            this.ChangeState('right');
            this.vX = -1 * this.speed;
        }
        if(this.key == 32){
            this.vZ =  this.speed/2;
           /* OGame.AddPlayer(
                'bomb' + (Math.random() * 1000),
                OGame.Chars.Bomb
            );*/

        }else{
            this.vZ -= this.speed/10;
        }

        this.key = -1;

    }
    return me;
}
