OGame.Actions.Hold = function(objHoldObject){
    var me =  new OAction();
    if(typeof(objHoldObject.objHolder) != 'undefined'){
        me.Object.Action = me.Fail;
    }
    me.objHoldObject = objHoldObject;

    me.objHoldObject.objHolder = me.Object;
    //this.Object.visible = false;
    me.Exicute = function(){


       /* if(this.Object.facing == 'd'){

        }
        if(this.Object.facing == 'u'){
            this.objPushObject.vY = -1 *this.power;
        }
        if(this.Object.facing == 'r'){
            this.objPushObject.vX = this.power;
        }
        if(this.Object.facing == 'l'){
            this.objPushObject.vX = -1 * this.power;
        }*/
        this.objHoldObject.x = this.Object.x;// + OGame.Settings.tile_width;
        this.objHoldObject.y = this.Object.y + .5;

        //this.Object.Action = this.Success;
    }


    return me;
}