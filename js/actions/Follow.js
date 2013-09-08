OGame.Actions.Follow = function(objFollowObject){
    var me =  new OAction();
    me.objFollowObject = objFollowObject;
    me.distance = 5;
    me.Exicute = function(){
        if(Math.floor(this.Object.x) < Math.floor(this.objFollowObject.x) - me.distance){
            this.Object.Right();
        }else if(Math.floor(this.Object.x) > Math.floor(this.objFollowObject.x) + me.distance){
            this.Object.Left();
        }else{
            if(Math.floor(this.Object.y) < Math.floor(this.objFollowObject.y) - me.distance){
                this.Object.Down();
            }else if(Math.floor(this.Object.y) > Math.floor(this.objFollowObject.y) + me.distance){
                this.Object.Up();
            }else{
                //Chill
                //this.Object.Space();
                //this.Object.SetAction(new this.Success());
            }
        }
        //console.log("FOllowing:"+ this.Object.x + "_" + this.Object.y);
    }


    return me;
}