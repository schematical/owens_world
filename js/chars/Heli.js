OGame.Chars.Heli = function (){
    var me = new OObject();
    me.ammo = 100;
    me.speed = .25;
    me.Animations = {};
    me.Animations['default'] = {"Frames":[{"name":"","img":"/imgs/heli2.gif","height":"42","width":"32","x":"0","y":"0","offsetWidth":"32","offsetHeight":"42"},{"name":"","img":"/imgs/heli2.gif","height":"42","width":"32","x":"0","y":"42","offsetWidth":"32","offsetHeight":"42"},{"name":"","img":"/imgs/heli2.gif","height":"42","width":"32","x":"0","y":"84","offsetWidth":"32","offsetHeight":"42"},{"name":"","img":"/imgs/heli2.gif","height":"42","width":"32","x":"0","y":"126","offsetWidth":"32","offsetHeight":"42"}]};
    me.Animations['left'] = {"Frames":[{"name":"","img":"/imgs/heli2.gif","width":"32","height":"42","x":"0","y":"168","offsetWidth":"32","offsetHeight":"42"},{"name":"","img":"/imgs/heli2.gif","width":"32","height":"42","x":"0","y":"210","offsetWidth":"32","offsetHeight":"42"},{"name":"","img":"/imgs/heli2.gif","width":"32","height":"42","x":"0","y":"252","offsetWidth":"32","offsetHeight":"42"},{"name":"","img":"/imgs/heli2.gif","width":"32","height":"42","x":"0","y":"294","offsetWidth":"32","offsetHeight":"42"}]};
    me.Animations['right'] = {"Frames":[{"name":"","img":"/imgs/heli2.gif","width":"32","height":"42","x":"0","y":"336","offsetWidth":"32","offsetHeight":"42"},{"name":"","img":"/imgs/heli2.gif","width":"32","height":"42","x":"0","y":"378","offsetWidth":"32","offsetHeight":"42"},{"name":"","img":"/imgs/heli2.gif","width":"32","height":"42","x":"0","y":"420","offsetWidth":"32","offsetHeight":"42"},{"name":"","img":"/imgs/heli2.gif","width":"32","height":"42","x":"0","y":"462","offsetWidth":"32","offsetHeight":"42"}]};
    me.Cycle = function(){
        this.vZ = this.vZ - this.Tile.gZ*.9 ;
    }
    me.Fire = function(){
        this.ChangeState('f_attack');
        this.Throw(
            OGame.Chars.Lazer
        );
    }
    me.Down = function(){
        //this.ChangeState('f_walk');
        this.vY = this.speed;
    }
    me.Up = function(){
        //this.ChangeState('b_walk');
        this.vY = -1 * this.speed;
    }
    me.Right = function(){
        this.ChangeState('right');
        this.vX = 1 * this.speed;
    };
    me.Left = function(){
        this.ChangeState('left');
        this.vX = -1 * this.speed;
    }
    me.Space = function(){

        this.vZ =  this.speed/2;

    }

    return me;
}
