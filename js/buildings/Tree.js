
OGame.Chars.Tree = function(){
    var me = new OBuilding();

    me.speed = 1;
    me.friction = .2;
    var me = new OGame.Tiles.TileBase();

    me.friction = 1;
    me.state = 'age_0';
    me.Animations['age_0'] = {"Frames":[{"name":"default","img":"/imgs/minecraft1.png","width":"32","height":"32","x":"480","y":"0","offsetWidth":"1","offsetHeight":"1","offsetYSpace":"0"}]};



    me.Cycle = function(){}
    return me;
}