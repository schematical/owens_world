OGame.Actions.Throw = function(funThrowObject){
    var me =  new OAction();


    //this.Object.visible = false;
    me.Exicute = function(){
        this.objThrowObject = OGame.AddPlayer(
            this.Object + '_throw',
            funThrowObject

        );
        this.objThrowObject.objThrower = this.Object;
        OGame.Map.AddObject(
            this.objThrowObject,
            this.Object.x,
            this.Object.y,
            this.Object.z
        );
        if(this.Object.facing == 'd'){
            this.objThrowObject.vY = this.objThrowObject.speed;
        }
        if(this.Object.facing == 'u'){
            this.objThrowObject.vY = -1 *this.objThrowObject.speed;
        }
        if(this.Object.facing == 'r'){
            this.objThrowObject.vX = this.objThrowObject.speed;
        }
        if(this.Object.facing == 'l'){
            this.objThrowObject.vX = -1 * this.objThrowObject.speed;
        }

        this.Object.Action = {
            Exicute:function(){}
        }
    }


    return me;
}