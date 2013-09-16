OGame.Actions.Explore = function(){
    var me =  new OAction();
    //me.Success = funSuccess;
    me.distance = 0;
    me.type = 'explore';
    me.Exicute = function(){
        var objTile = OGame.GetTile(
            this.Object.x + Math.round(Math.random() * 2) -1 * this.Object.visibility_range,
            this.Object.y + Math.round(Math.random() * 2) -1 * this.Object.visibility_range,
            this.Object.z
        );
        var objFollowAction = OGame.Actions.Follow(
            objTile,
            this
        );
        this.Object.SetAction(
            objFollowAction
        );


    }


    return me;
}