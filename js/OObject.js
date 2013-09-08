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
    var imgd = ctx.getImageData(0, 0, imageWidth, imageHeight),
        pix = imgd.data;

    for (var i = 0, n = pix.length; i <n; i += 4) {
        var r = pix[i],
            g = pix[i+1],
            b = pix[i+2];

        if(g > 150){
            // If the green component value is higher than 150
            // make the pixel transparent because i+3 is the alpha component
            // values 0-255 work, 255 is solid
            pix[i + 3] = 0;
        }
    }

    ctx.putImageData(imgd, 0, 0);
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
        if(this.width > 500){
            this.width = 1;
            this.height = 1;
            this.y = -1000;
            this.speed = 0;
            this.vY = 0;
            this.vX = 0;
            this.Move = function(){

            }
        }else{
            this.vY = 0;

            this.width *= 1.5;
            this.height *= 1.5;
        }

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
    var drawWidth = ((.25 * intZDiff) + 1)  * OGame.Settings.tile_width;
    if(this.Id == 'owen'){
        console.log(this.Id + '_' + drawY);
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
OObject.prototype.ChangeState = function(strState){
    this.state = strState;
}