function OObject(){
    this.Animations = {};
    return this;
}

OObject.prototype.state = 'default';
OObject.prototype.frame = 0;
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
OObject.prototype.ChangeTransparent = function(){

};
OObject.prototype.BlowUp = function(){
    for(strId in OGame.Players){
        console.log(Math.abs(OGame.Players[strId].x - this.x));
        if(
            (strId != this.Id) &&
                (Math.abs(OGame.Players[strId].x - this.x) < 100) &&
                (Math.abs(OGame.Players[strId].y - this.y) < 100)
            ){
            console.log(this.Id+ ' HIT');
            OGame.Players[strId].speed += 30;
            OGame.Players[strId].vY -= Math.random() * 30 + 10;
            OGame.Players[strId].vX -= Math.random() * 30 + 10;
        }
    }
    this.Move = function(){


    }
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
    if(this.Animations[this.state].Frames.length <= this.frame){
        this.frame = 0;
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
    if(this.key == -1){
        this.ChangeState('default');
        /*this.vX = 0;
         this.vY = 0;
         this.vZ = 0;*/
    }
    if(this.key == 79){
        //for(var i = 0; i < 20; i++){
        this.key = 0;
        var objNed = OGame.AddPlayer(
            'ned_' + Math.random(),
            OGame.Chars.Ned
        );
        objNed.x = this.x;
        objNed.y = this.y;

        //}
    }
    if(this.key == 40){

        this.vY = this.speed;
    }
    if(this.key == 38){
        this.vY = -1 * this.speed;
    }
    if(this.key == 37){
        this.ChangeState('left');
        this.vX = -1 * this.speed;
    }
    if(this.key == 39){
        this.ChangeState('right');
        this.vX = 1 * this.speed;
    }
    if(this.key == 32){
        //this.vZ =  this.speed/2;
        if(
            OGame.GetTile(
                this.Tile.x,
                this.Tile.y,
                this.Tile.z -1
            ).solid
        ){
            this.vZ =  this.speed*2;
        }


    }

    if(this.key == 67){
        this.vZ =  this.speed/2;
    }

    this.key = -1;

}
OObject.prototype.ChangeState = function(strState){
    if(typeof(this.Animations[strState]) != 'undefined'){
        this.state = strState;
    }
}