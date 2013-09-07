function OObject(){

}
OObject.prototype.Animations = {};
OObject.prototype.state = 'default';
OObject.prototype.frame = 0;
OObject.prototype.solid = false;

OObject.prototype.rot =0;
OObject.prototype.x =0;
OObject.prototype.y =0;
OObject.prototype.z =0;

OObject.prototype.speed = 10;
OObject.prototype.health = 100;
OObject.prototype.img = 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg';

OObject.prototype.vX = 0;
OObject.prototype.vY = 0;
OObject.prototype.vZ = 0;
OObject.prototype.width = 200;
OObject.prototype.height = 137;
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
    // console.log('Drawing Start');

    var x = 188;
    var y = 30;

    //var imageObj = new Image();
    c.save();
    c.translate((this.x + this.width/2), (this.y - this.height));
    c.rotate( this.rot );
    c.drawImage(
        this.imageObj,
        0,//this.x,
        0,//this.y + 300,
        this.width,
        this.height
    );
    c.translate( -1 * (this.x  + this.width/2), -1 * (this.y - this.height ));
    //ctx.drawImage( myImageOrCanvas, 0, 0 );
    c.restore();



}