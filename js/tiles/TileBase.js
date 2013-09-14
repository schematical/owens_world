
OGame.Tiles.TileBase = function(){
    var me = new OObject();
    me.Objects = {};
    me.type = 'OTile';
    me.solid = true;
    me.friction = 1;
    me.gX = 0;
    me.gY = 0;
    me.gZ = -.1;

    me.Animations = {};
    me.Animations['default'] = {
        Frames: [{"name":"","img":"/imgs/minecraft1.png","height":"100","width":"100","x":"64","y":"64","offsetWidth":"32","offsetHeight":"32"},{"name":"","img":"/imgs/minecraft1.png","height":"100","width":"100","x":"64","y":"96","offsetWidth":"32","offsetHeight":"32"},{"name":"","img":"/imgs/minecraft1.png","height":"100","width":"100","x":"96","y":"96","offsetWidth":"32","offsetHeight":"32"}]
    };
    me.RemoveObject = function(objObject){
        if(typeof(objObject) == 'string'){
            var objObject = OGame.Objects[objObject];
        }
        //Get its Id and remove it
        delete me.Objects[objObject.Id];
    }
    me.Below = function(){

        return OGame.GetTile(
            me.x,
            me.y,
            me.z -1
        );
    }
    me.Above = function(){
        return OGame.GetTile(
            me.x,
            me.y,
            me.z +1
        );
    }
    me.Front = function(){
        return OGame.GetTile(
            me.x,
            me.y +1,
            me.z
        );
    }
    me.Behind = function(){
        return OGame.GetTile(
            me.x,
            me.y -1,
            me.z
        );
    }
    me.Right = function(){
        return OGame.GetTile(
            me.x +1,
            me.y,
            me.z
        );
    }
    me.Left = function(){
        return OGame.GetTile(
            me.x -1,
            me.y,
            me.z
        );
    }
    me.NextTo = function(){
        var objReturn = {
            'l':me.Left(),
            'r':me.Right(),
            'u':me.Behind(),
            'd':me.Front()
        };
        return objReturn;
    }
    me.Around = function(){
        var objReturn = this.NextTo();
        objReturn['t'] = this.Above();
        objReturn['b'] = this.Below();
        return objReturn;
    }
    me.Destroy = function(){
        OGame.RemoveTile(this);
    }
    me.Replace = function(objTile){
        OGame.RemoveTile(this);
        OGame.AddTile(this.x, this.y, this.z, objTile);
    }
    return me;
}