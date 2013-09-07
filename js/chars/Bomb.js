
OGame.Chars.Bomb = function(){
    var me = new OObject();

    me.y = OGame.Players['owen'].y;
    me.x = OGame.Players['owen'].x + (OGame.Players['owen'].width/2);

    me.height = 100;
    me.width = 100;
    me.speed =  4;
    me.img = 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTNp3paa0DL5sZU5w8cC3GtkunMfJTPhePUbAwNa7bv3rpOt0QDmg';
    me.Move = function(){

        if(this.y < 500){
            this.vY += this.speed;
        }else{
            this.BlowUp();
        }
    }
    return me;
}