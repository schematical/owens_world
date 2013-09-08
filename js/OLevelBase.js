function OLevelBase(){
    this.Tiles = [];
    return this;
}
OLevelBase.prototype.width = 100;
OLevelBase.prototype.height = 100;
OLevelBase.prototype.depth = 10;

OLevelBase.prototype.Generate = function(){

};
OLevelBase.prototype.AddObject = function(objObject, x,y,z){
    objObject.x = x;
    objObject.y = y;
    objObject.z = z;
    OGame.MoveObject(
        objObject,
        objObject.x,
        objObject.y,
        objObject.z
    );
};