function OObject(){
    this.Animations = {};
    return this;
}
OObject.Action = {
    Exicute:function(){}
};
OObject.prototype.facing = 'f';
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
OObject.prototype.AnimateEnd = function(strState, strNextState){

}
OObject.prototype.ChangeTransparent = function(){

};
OObject.prototype.SetAction = function(objAction){
    this.Action = objAction;
    this.Action.Object = this;
    return this.Action;
}

OObject.prototype.Draw = function(c){
    if(!this.visible){
        return;
    }
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


    var drawX = this.x - OGame.Focus.x;
    var drawY = this.y -OGame.Focus.y;
    var intZDiff = this.z - OGame.Focus.z;
    var drawWidth = ((.03 * intZDiff) + 1)  * OGame.Settings.tile_width;
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

        c.drawImage(
            objFrame.imageObj,
            objFrame.x,//this.x,
            objFrame.y,

            objFrame.width,
            objFrame.height,
            (drawX  * drawWidth) + OGame.Focus.offsetX,
            (drawY  * drawWidth) + OGame.Focus.offsetY,
            drawWidth,
            drawWidth
        );
    //}
    c.beginPath();
    c.globalAlpha   = Math.abs(intZDiff)/5;

    c.rect(
        (drawX  * drawWidth) + OGame.Focus.offsetX,
        (drawY  * drawWidth) + OGame.Focus.offsetY,
        drawWidth,
        drawWidth
    );

    c.fillStyle = 'black';
    c.fill();
    c.globalAlpha   = 1;


    this.frame += 1;
    if(this.frame >= this.Animations[this.state].Frames.length ){
        this.AnimateEnd(this.state, this.next_state);
        this.frame = 0;
        this.state = this.next_state;
        this.next_state = 'default';
    }




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
    if(this.key == 79){
        //for(var i = 0; i < 20; i++){

        this.Fire();

        //}
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
        this.vZ =  this.speed/2;
    }

    this.key = -1;

}
OObject.prototype.Follow = function(objObject, funSuccess){
    var objAction = this.SetAction(OGame.Actions.Follow(objObject));
    objAction.Success = funSuccess;
};
OObject.prototype.BlowUp = function(funSuccess){
    var objAction = this.SetAction(OGame.Actions.BlowUp());
    objAction.Success = funSuccess;
}
OObject.prototype.Throw = function(funObject, funSuccess){
    var objAction = this.SetAction(OGame.Actions.Throw(funObject));
    objAction.Success = funSuccess;
};

OObject.prototype.ThrowAt = function(objObject, funObject){

};
OObject.prototype.PushObject = function(objObject, funObject){

};
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