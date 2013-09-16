function OObject(){ this.Animations = {};
    return this;
}
OObject.Action = {
    Exicute:function(){}
};
OObject.prototype.facing = 'u';
OObject.prototype.state = 'default';
OObject.prototype.next_state = 'default';
OObject.prototype.force_animation = false;
OObject.prototype.frame = 0;
OObject.prototype.friction = 1;
OObject.prototype.solid = false;

OObject.prototype.rot =0;
OObject.prototype.x =0;
OObject.prototype.y =0;
OObject.prototype.z =0;

OObject.prototype.speed = 10;
OObject.prototype.health = 100;

OObject.prototype.vX = 0;
OObject.prototype.vY = 0;
OObject.prototype.vZ = 0;
OObject.prototype.width = 200;
OObject.prototype.height = 137;
OObject.prototype.visible = true;
OObject.prototype.Inv = {};
OObject.prototype.inv_cap = 10;
OObject.prototype.age = 0;
OObject.prototype.AnimateEnd = function(strState, strNextState){

}
OObject.prototype.ChangeTransparent = function(){

};
OObject.prototype.Age = function(){

}
OObject.prototype.SetAction = function(objAction){

    this.Action = objAction;

    if(typeof(this.Action) != 'undefined'){
        this.Action.Object = this;
    }
    return this.Action;
}

OObject.prototype.Draw = function(c){
    if(!this.visible){
        return;
    }
    var intOrigAlpha = OGame.eleCanvas.globalAlpha;
    var objFrame = this.Animations[this.state].Frames[this.frame];

    if(!objFrame.imageObj.oLoaded){
        console.log("Not Loaded yet :(");
    }
    /*console.log('Drawing Start');
    console.log(this.x + '_' + this.y);
    console.log(objFrame.width + '_' + objFrame.height);
     */
    if(this.Id == 'owen'){
        //console.log('Drawing: '+ this.Id + '_' + objFrame.imageObj.src);
    }

    //console.log('Drawing: '+this.x + '_' + this.y + '_' + this.z);

    var intSpecialOffset = 5;
    var drawX = this.x - OGame.Focus.x;
    var drawY = this.y -OGame.Focus.y - intSpecialOffset;
    var intZDiff = this.z - OGame.Focus.z;

    var drawWidth_affectZ = ((.05 *( this.z+ intZDiff)/2) + 1)  * OGame.Settings.tile_width;//((.1 * OGame.Focus.z) + 1)  * OGame.Settings.tile_width;
    var drawWidth = drawWidth_affectZ;//OGame.Settings.tile_width;
    if(this.Id == 'owen'){
        //console.log(this.Id + '_' + drawY);
    }

   /* if(typeof(objFrame.imageObj._pixels) != 'undefined'){
        c.putImageData(
            objFrame.imageObj._pixels,
            (drawX  * drawWidth) + OGame.Focus.offsetX,
            (drawY  * drawWidth) + OGame.Focus.offsetY
        );
    }else{*/

        this.top = ((drawY  * drawWidth_affectZ) + OGame.Focus.offsetY + (intSpecialOffset * OGame.Settings.tile_width));
        this.left = (drawX  * drawWidth) + OGame.Focus.offsetX;
        this.right = this.left + drawWidth;
        this.bottom = this.top + drawWidth


        if(typeof(this.Animations[this.state].flip) != 'undefined'){
            c.scale(-1, 1);
            this.left = (-1 * this.left) - drawWidth;
        }
        var intZDif = this.z - OGame.Focus.z;
        if(
            (this.Id != OGame.Focus.objObject.Id) &&
            (Math.abs(this.x - OGame.Focus.x) < (intZDif/4 + 1)) &&
            ((this.y - OGame.Focus.y) > (intZDif/-4 + 1)) &&
            (intZDif >= 0)
        ){
            OGame.eleCanvas.globalAlpha = .3;
        }
            c.drawImage(
                objFrame.imageObj,
                objFrame.x,//this.x,
                objFrame.y,

                objFrame.width,
                objFrame.height,
                this.left,//(drawX  * drawWidth) + OGame.Focus.offsetX,
                this.top,//(drawY  * drawWidth) + OGame.Focus.offsetY,
                drawWidth,
                drawWidth
            );
        if(typeof(this.Animations[this.state].flip) != 'undefined'){
            c.scale(-1, 1);
        }
    if
        (
        (this.type =='OTile') &&
        (true)
    ){
        if(this.z > 0){
            var objBelow = this.Below();
            if(typeof(objBelow.top) != 'undefined'){
                //console.log("New Height: " +objBelow.Id + ':'+ (objBelow.top - this.bottom));
                var intNewHeight =  objBelow.bottom - this.bottom;
                if(intNewHeight > 0){
                    if(typeof(this.Animations['side']) != 'undefined'){
                        objFrame = this.Animations['side'].Frames[this.frame];
                    }
                    c.drawImage(
                        objFrame.imageObj,
                        objFrame.x,//193,
                        objFrame.y,//223,

                        objFrame.width,
                        objFrame.height,
                        this.left,
                        this.bottom,
                        drawWidth,
                        Math.abs(intNewHeight)

                    );
                    OGame.DrawShade(
                        this.left,
                        this.bottom,
                        drawWidth,
                        Math.abs(intNewHeight),
                        (Math.abs(intZDiff)/10 +.2) * OGame.eleCanvas.globalAlpha
                    );

                }
            }
        }
    }

    OGame.DrawShade(
        this.left,
        this.top,
        drawWidth,
        drawWidth,
        (Math.abs(intZDiff)/10) * OGame.eleCanvas.globalAlpha
    );
    if(typeof(this.Action) != 'undefined'){
        c.fillText(
            'Xxxx',
            //this.Action.type,
            this.top + 200,
            this.left
        );
    }
    this.frame += 1;
    if(this.frame >= this.Animations[this.state].Frames.length ){
        this.AnimateEnd(this.state, this.next_state);
        this.frame = 0;
        this.state = this.next_state;
        this.next_state = 'default';
    }

    if(
        (typeof(this.Action) != 'undefined') &&
        (typeof(this.Action.objHoldObject) != 'undefined')
    ){
        //console.log("Drawing:" + this.Action.objHoldObject.Id);
        this.Action.objHoldObject.Draw(c);
    }
   OGame.eleCanvas.globalAlpha = intOrigAlpha;
    /*
    c.save();
    c.translate((this.x + objFrame.width/2), (this.y - objFrame.height));
    c.rotate( this.rot );
    c.drawImage(
        objFrame.imageObj,
        0,//this.x,
        0,//this.y + 300,
        objFrame.width,
        objFrame.height
    );
    c.translate( -1 * (this.x  + objFrame.width/2), -1 * (this.y - objFrame.height ));
    //ctx.drawImage( myImageOrCanvas, 0, 0 );
    c.restore();*/

}
OObject.prototype.Move = function(){

    this.Cycle();
    if(this.key == -1){
        this.ChangeState('default');
        /*this.vX = 0;
         this.vY = 0;
         this.vZ = 0;*/
    }
    if(this.key == 65){
        //for(var i = 0; i < 20; i++){
        this.Function2();
    }
    if(this.key == 83){
        //for(var i = 0; i < 20; i++){
        this.Function1();
    }
    if(this.key == 68){
        this.Fire();
    }
    if(this.key == 87){
        this.Menu();
    }
    if(this.key == 40){

        this.Down();

    }
    if(this.key == 38){

        this.Up()
    }
    if(this.key == 37){

        this.Left();
    }
    if(this.key == 39){

       this.Right();
    }
    if(this.key == 32){
        //this.vZ =  this.speed/2;
       this.Space();


    }

    if(this.key == 67){
        this.vZ =  this.speed/-2;
    }
    if(typeof(this.key) != 'undefined' && this.key != -1){
        //alert(this.key);
    }
    this.key = -1;

}
OObject.prototype.Hold = function(objObject, funScueess){
    var objAction = this.SetAction(OGame.Actions.Hold(objObject, funScueess));
    return objAction;
}
OObject.prototype.PickUp = function(objObject, funSuccess){

}
OObject.prototype.Follow = function(objObject, funSuccess){
    var objAction = this.SetAction(OGame.Actions.Follow(objObject));
    objAction.Success = funSuccess;
    return objAction;
};
OObject.prototype.BlowUp = function(funSuccess){
    var objAction = this.SetAction(OGame.Actions.BlowUp());
    objAction.Success = funSuccess;
    return objAction;
}
OObject.prototype.Throw = function(funObject, funSuccess){
    var objAction = this.SetAction(OGame.Actions.Throw(funObject));
    objAction.Success = funSuccess;
    return objAction;
};

OObject.prototype.ThrowAt = function(objObject, funObject){

};
OObject.prototype.Push = function(objObject, funSuccess){
    var objAction = this.SetAction(OGame.Actions.Push(objObject));
    objAction.Success = funSuccess;
};
OObject.prototype.Remove = function(){

    OGame.DeleteObject(this);
}
OObject.prototype.TouchingObjects = function(){
    var arrReturn = [];
    for(strKey in this.Tile.Objects){
        if(strKey != this.Id){
            arrReturn[arrReturn.length] = this.Tile.Objects[strKey];
        }
    }
    return arrReturn;
}
OObject.prototype.ChangeState = function(strState, blnForce){
    if(typeof(this.Animations[strState]) != 'undefined'){
        if(this.state == strState){
            return;
        }
        if(blnForce == 'undefined'){
            blnForce = false;
        }
        if(this.force_animation){
            //Delay
            this.next_state = strState;
        }else{
            this.frame = 0;
            this.state = strState;
            this.next_state = 'default';
            this.force_animation = blnForce;
        }
    }
}
OObject.prototype.ContactTile = function(objTile){

}
OObject.prototype.ContactObject = function(objObject){

}
OObject.prototype.Down = function(){
    this.facing = 'd';
    this.ChangeState('f_walk');
    this.vY = this.speed;
}
OObject.prototype.Up = function(){
    this.facing = 'u';
    this.ChangeState('b_walk');
    this.vY = -1 * this.speed;
}
OObject.prototype.Right = function(){
    this.facing = 'r';
    this.ChangeState('r_walk');
    this.vX = 1 * this.speed;
};
OObject.prototype.Left = function(){
    this.facing = 'l';
    this.ChangeState('l_walk');
    this.vX = -1 * this.speed;
}
OObject.prototype.Fire = function(){
    this.ChangeState('f_attack');
    /*this.Throw(
        OGame.Chars.Lazer
    );*/
    this.CheeseRay();
}
OObject.prototype.Menu = function(){
    this.PutTile(
        OGame.Tiles.Water
    );
}
OObject.prototype.PutTile = function(objNewTile){
    var objAction = new OGame.Actions.PutTile();
    objAction.NewTile = objNewTile;
    this.SetAction(objAction);
    return objAction;
}
OObject.prototype.Function1 = function(){
    this.IceBomb();
}
OObject.prototype.IceBomb = function(){
    var objAction = new OGame.Actions.IceBomb();
    objAction.Object = this;
    objAction.Tiles[objAction.Tiles.length] = this.Tile.Below();
    OGame.AddSpecialAction(
        'ice_bomb',
        objAction,
        5
    );

}
OObject.prototype.Function2 = function(){
    this.PumpkinWave();
}
OObject.prototype.CheeseRay = function(){
    var objAction = new OGame.Actions.CheeseRay();
    objAction.Object = this;

    objAction.Tile = this.Tile;
    objAction.direction = this.facing
    OGame.AddSpecialAction(
        'cheese_ray',
        objAction,
        1
    );

}
OObject.prototype.PumpkinWave = function(){
    var objAction = new OGame.Actions.PumpkinWave();
    objAction.Object = this;

    objAction.Tile = this.Tile.Below();
    objAction.direction = this.facing
    OGame.AddSpecialAction(
        'pumpkin_wave',
        objAction,
        1
    );

}
OObject.prototype.EarthEater = function(){
    var objAction = new OGame.Actions.EarthEater();
    objAction.Object = this;
    objAction.Tiles[objAction.Tiles.length] = this.Tile.Below();
    OGame.AddSpecialAction(
        'earth_eater',
        objAction,
        2
    );

}
OObject.prototype.Space = function(){
    if(
        this.Tile.Below().solid
    ){
        this.vZ =  this.speed*2;
    }
    if(
        (typeof(this.Action) != 'undefined') &&
            (typeof(this.Action.objHoldObject) != 'undefined')
        ){
        //console.log("Drawing:" + this.Action.objHoldObject.Id);
        this.Throw(this.Action.objHoldObject, this.Action, this.Action);
    }else{
        //Trigger Push
        var arrObjects = this.TouchingObjects();
        for(var i =0; i < arrObjects.length; i++){
            if(arrObjects[i].loot){
                this.Hold(arrObjects[i], this.Action, this.Action);
            }else{
                this.Push(arrObjects[i], this.Action);
            }
            /*if(this.Id != arrObjects[i].Id){

             }*/
        }
    }

}
OObject.prototype.PlayBall = function(objBall){
    var objThrow = new OGame.Actions.Throw(
        objBall
    );
    var objHold = new OGame.Actions.Hold(
        objBall,
        objThrow
    );
    var objFollow = new OGame.Actions.Follow(
        objBall,
        objHold
    );
    objThrow.Success = objFollow;
    this.SetAction(
        objFollow
    );
}
OObject.prototype.Survive = function(){

}