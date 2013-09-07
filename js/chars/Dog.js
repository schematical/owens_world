OGame.Chars.Dog = function(){
    var me = new OObject();
    me.ammo = 100;
    me.y = 500;
    me.width = 100;
    me.height = 67.5;
    me.img = 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTdUEKUDI3KrqKC9u7hEMG73yKNpNbbrP00Y3Eb2-_aor4la28qkg';
    me.Move = function(){
        if(this.x < OGame.Players['owen'].x){
            this.vX = 3;
        }else{
            this.vX -= 3;
        }
    }
    return me;
}