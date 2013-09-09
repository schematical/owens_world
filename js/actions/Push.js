OGame.Actions.Push = function(objPushObject){
    var me =  new OAction();
    me.power = 1;
    me.objPushObject = objPushObject;

    me.objPushObject.objPusher = this.Object;
    //this.Object.visible = false;
    me.Exicute = function(){


        if(this.Object.facing == 'd'){
            this.objPushObject.vY = this.power;
        }
        if(this.Object.facing == 'u'){
            this.objPushObject.vY = -1 *this.power;
        }
        if(this.Object.facing == 'r'){
            this.objPushObject.vX = this.power;
        }
        if(this.Object.facing == 'l'){
            this.objPushObject.vX = -1 * this.power;
        }

        this.Object.Action = this.Success;
    }


    return me;
}