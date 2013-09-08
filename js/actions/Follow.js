OGame.Actions.Follow = function(objFollowObject){
    var me =  new OAction();
    me.objFollowObject = objFollowObject;
    me.Exicute = function(){
        if(Math.floor(this.Object.x) < Math.floor(this.objFollowObject.x)){
            this.Object.Right();
        }else if(Math.floor(this.Object.x) > Math.floor(this.objFollowObject.x)){
            this.Object.Left();
        }else{
            if(Math.floor(this.Object.y) < Math.floor(this.objFollowObject.y)){
                this.Object.Down();
            }else if(Math.floor(this.Object.y) > Math.floor(this.objFollowObject.y)){
                this.Object.Up();
            }else{
                //Chill
                this.Object.Space();
                console.log("Chilling")
            }
        }
        console.log("FOllowing:"+ this.Object.x + "_" + this.Object.y);
    }

    return me;
}