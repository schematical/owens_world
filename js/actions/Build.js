OGame.Actions.Build = function(objBuilding, funSuccess, funError){
    var me =  new OAction();
    me.Building = objBuilding;
    me.Success = funSuccess;
    me.Error = funError;
    me.objNextTile = null;

    //this.Object.visible = false;
    me.Exicute = function(){
        if(this.objNextTile == null){
            this.objNextTile = this.Building.NextTile()
            if(this.objNextTile == null){
                this.Object.SetAction(this.Success);
                return;
            }
            var objTile = OGame.GetTile(
                this.objNextTile.x + 2,
                this.objNextTile.y + 1,
                this.objNextTile.z
            );
            if(objTile.solid){
                objTile = objTile.Above();
            }
            if(objTile.solid){
                objTile = objTile.Below().Behind();
            }
            if(objTile.solid){
                objTile = objTile.Front().Front();
            }
            this.objFollowAction = new OGame.Actions.Follow(
                objTile,
                this
            );

            this.Object.SetAction(this.objFollowAction);
            return;
        }

        var objPut = this.Object.PutTile(this.objNextTile.tile);
        objPut.objSpecificTile = OGame.GetTile(
            this.objNextTile.x,
            this.objNextTile.y,
            this.objNextTile.z
        );
        objPut.Success = this;
        this.objNextTile = null;


    }


    return me;
}