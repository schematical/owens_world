OGame.Actions.Follow = function(objFollowObject, funSuccess){
    var me =  new OAction();
    me.Success = funSuccess;
    me.objFollowObject = objFollowObject;
    me.distance = 0;
    me.stuck = -1;
    me.objLastTile = null;
    me.type = 'follow';
    me.Exicute = function(){
        if(
            (this.objLastTile != null) &&
            (this.objLastTile.x == this.Object.x) &&
            (this.objLastTile.y == this.Object.y) &&
            (this.objLastTile.z == this.Object.z)
        ){
            this.stuck += 1;
        }
        this.objLastTile = this.Tile;
        if(this.stuck > 10){
            var objTile = OGame.GetTile(
                this.Object.x + Math.round(Math.random() * 2) -1 * this.Object.visibility_range,
                this.Object.y + Math.round(Math.random() * 2) -1 * this.Object.visibility_range,
                this.Object.z
            );
            this.stuck = -1;
            this.Object.SetAction(
                new OGame.Actions.Follow(objTile),
                this
            );
        }
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
                if(Math.floor(this.Object.z) < Math.floor(this.objFollowObject.z) - me.distance){
                    //this.Object.Crouch();
                    this.Object.Space();
                }else if(Math.floor(this.Object.z) > Math.floor(this.objFollowObject.z) + me.distance){
                    //this.Object.Space();
                }else{

                    this.Object.SetAction(this.Success);
                }

            }
        }
        //console.log("FOllowing:"+ this.Object.x + "_" + this.Object.y);
    }


    return me;
}