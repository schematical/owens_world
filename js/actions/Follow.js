OGame.Actions.Follow = function(objObject, objFollowObject){
    var me =  new OAction(objObject);
    me.objFollowObject = objFollowObject;
    me.Exicute = function(){
        if(Math.floor(this.Object).x < Math.floor(this.objFollowObject.x)){
            this.Right();
        }else if(Math.floor(this.Object).x > Math.floor(this.objFollowObject.x)){
            this.Left();
        }else{
            if(Math.floor(this.Object).y < Math.floor(this.objFollowObject.y)){
                this.Up();
            }else if(Math.floor(this.Object).y > Math.floor(this.objFollowObject.y)){
                this.Down;
            }else{
                //Chill
            }
        }
    }
}