OGame.Chars.Owen = function (){
    var me = new OObject();
    me.ammo = 100;
    me.x = 100;
    me.y = 100;
    me.img = '/imgs/heli.jpg';
    me.Move = function(){
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
            this.vY = 10;
        }
        if(this.key == 38){
            this.vY = -10;
        }
        if(this.key == 37){
            this.vX = -10;
        }
        if(this.key == 39){
            this.vX = 10;
        }
        if(this.key == 32){
            this.vX = 0;
            this.vY = 0;
            OGame.AddPlayer(
                'bomb' + (Math.random() * 1000),
                OGame.Chars.Bomb
            );
            this.key = -1;
        }

    }
    return me;
}
