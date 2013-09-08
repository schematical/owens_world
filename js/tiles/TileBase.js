
OGame.Tiles.TileBase = function(){
    var me = new OObject();
    me.Objects = {};
    me.solid = true;

    me.Animations = {};
    me.Animations['default'] = {
        Frames: [{"name":"","img":"http://www.pixeljoint.com/files/icons/full/minecraft1.png","height":"100","width":"100","x":"64","y":"64","offsetWidth":"32","offsetHeight":"32"},{"name":"","img":"http://www.pixeljoint.com/files/icons/full/minecraft1.png","height":"100","width":"100","x":"64","y":"96","offsetWidth":"32","offsetHeight":"32"},{"name":"","img":"http://www.pixeljoint.com/files/icons/full/minecraft1.png","height":"100","width":"100","x":"96","y":"96","offsetWidth":"32","offsetHeight":"32"}]
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