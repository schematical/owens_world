
OGame.Chars.Ned = function(){
    var me = new OObject();
    me.ammo = 100;
    me.y = 500;
    me.x = 200;
    var size = Math.random() * 10;
    me.height = size * 25
    me.width = size * 25;
    me.speed = size * 4;
    me.img = 'http://art.ngfiles.com/images/173/lazers_stupid-pixel-flanders.png';
    me.Move = function(){
        this.vX += (Math.random() * this.speed)  - this.speed/2;
        if((this.x < -100) || (this.x > 1000)){
            this.vX = 0;
        }
        if(this.y < 500){
            this.vY += 10;
        }else{
            this.y = 500;
        }

    }
    return me;
}