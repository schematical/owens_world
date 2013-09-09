OGame.Actions.Throw = function(funThrowObject){
    var me =  new OAction();
    me.friction = .1;

    //this.Object.visible = false;
    me.Exicute = function(){
        //console.log(typeof(funThrowObject));
        if(typeof(funThrowObject) != 'object'){
            this.objThrowObject = OGame.AddPlayer(
                this.Object + '_throw_'+ Math.random() * 999,
                funThrowObject

            );
            OGame.Map.AddObject(
                this.objThrowObject,
                this.Object.x,
                this.Object.y,
                this.Object.z
            );
        }else{
            this.objThrowObject = funThrowObject;
        }
        this.objThrowObject.objThrower = this.Object;

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