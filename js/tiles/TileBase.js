
OGame.Tiles.TileBase = function(){
    var me = new OObject();
    me.Objects = {};
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
    return me;
}