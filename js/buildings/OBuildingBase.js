function OBuilding(objTile){
    //determine top left corner
    this.top_x = objTile.x;
    this.top_y = objTile.y;
    this.top_z = objTile.z;
    return this;
}
OBuilding.prototype.Plan = [];
OBuilding.prototype.Plan [OBuilding.prototype.Plan.length] = {
    '_x':0,
    '_y':0,
    '_z':0,
    'tile':OGame.Tiles.Stone,
    'tile_type':'stone'
};
OBuilding.prototype.Plan [OBuilding.prototype.Plan.length] = {
    '_x':1,
    '_y':0,
    '_z':0,
    'tile':OGame.Tiles.Stone,
    'tile_type':'stone'
};
OBuilding.prototype.Plan [OBuilding.prototype.Plan.length] = {
    '_x':2,
    '_y':0,
    '_z':0,
    'tile':OGame.Tiles.Stone,
    'tile_type':'stone'
};
OBuilding.prototype.Plan [OBuilding.prototype.Plan.length] = {
    '_x':2,
    '_y':1,
    '_z':0,
    'tile':OGame.Tiles.Stone,
    'tile_type':'stone'
};

OBuilding.prototype.Plan [OBuilding.prototype.Plan.length] = {
    '_x':2,
    '_y':2,
    '_z':0,
    'tile':OGame.Tiles.Stone,
    'tile_type':'stone'
};

OBuilding.prototype.Plan [OBuilding.prototype.Plan.length] = {
    '_x':0,
    '_y':2,
    '_z':0,
    'tile':OGame.Tiles.Stone,
    'tile_type':'stone'
};
OBuilding.prototype.Plan [OBuilding.prototype.Plan.length] = {
    '_x':1,
    '_y':2,
    '_z':0,
    'tile':OGame.Tiles.Stone,
    'tile_type':'stone'
};

OBuilding.prototype.Plan [OBuilding.prototype.Plan.length] = {
    '_x':0,
    '_y':0,
    '_z':1,
    'tile':OGame.Tiles.Stone,
    'tile_type':'stone'
};
OBuilding.prototype.Plan [OBuilding.prototype.Plan.length] = {
    '_x':1,
    '_y':0,
    '_z':1,
    'tile':OGame.Tiles.Stone,
    'tile_type':'stone'
};
OBuilding.prototype.Plan [OBuilding.prototype.Plan.length] = {
    '_x':2,
    '_y':0,
    '_z':1,
    'tile':OGame.Tiles.Stone,
    'tile_type':'stone'
};
OBuilding.prototype.Plan [OBuilding.prototype.Plan.length] = {
    '_x':2,
    '_y':1,
    '_z':1,
    'tile':OGame.Tiles.Stone,
    'tile_type':'stone'
};

OBuilding.prototype.Plan [OBuilding.prototype.Plan.length] = {
    '_x':2,
    '_y':2,
    '_z':1,
    'tile':OGame.Tiles.Stone,
    'tile_type':'stone'
};

OBuilding.prototype.Plan [OBuilding.prototype.Plan.length] = {
    '_x':0,
    '_y':2,
    '_z':1,
    'tile':OGame.Tiles.Stone,
    'tile_type':'stone'
};
OBuilding.prototype.Plan [OBuilding.prototype.Plan.length] = {
    '_x':1,
    '_y':2,
    '_z':1,
    'tile':OGame.Tiles.Stone,
    'tile_type':'stone'
};



OBuilding.prototype.NextTile = function(){

    for(var i in this.Plan){

        var objTile = OGame.GetTile(
            this.top_x + this.Plan[i]._x,
            this.top_y + this.Plan[i]._y,
            this.top_z + this.Plan[i]._z
        );
        if(objTile.tile_type != this.Plan[i].tile_type){
            this.Plan[i].x = this.top_x + this.Plan[i]._x;
            this.Plan[i].y = this.top_y + this.Plan[i]._y;
            this.Plan[i].z = this.top_z + this.Plan[i]._z;
            return this.Plan[i];
        }


    }
    return null;
}