
OGame.Chars.Bug = function(){
    var me = new OObject();

    me.speed = 1;
    me.friction = 0;
    me.Animations = {
        "b_walk":{"Frames":[{"name":"b_walk","img":"/imgs/misquito.png","width":"33","height":"42","x":"4","y":"22","offsetWidth":"41","offsetHeight":"42","offsetYSpace":"0"},{"name":"b_walk","img":"/imgs/misquito.png","width":"33","height":"42","x":"45","y":"22","offsetWidth":"41","offsetHeight":"42","offsetYSpace":"0"}]},
        "r_walk":{"Frames":[{"name":"b_walk","img":"/imgs/misquito.png","width":"33","height":"42","x":"153","y":"22","offsetWidth":"1","offsetHeight":"42","offsetYSpace":"0"},{"name":"b_walk","img":"/imgs/misquito.png","width":"33","height":"42","x":"187","y":"22","offsetWidth":"1","offsetHeight":"42","offsetYSpace":"0"}]},
        "die":{"Frames":[{"name":"b_walk","img":"/imgs/misquito.png","width":"33","height":"42","x":"149","y":"77","offsetWidth":"1","offsetHeight":"1","offsetYSpace":"0"},{"name":"b_walk","img":"/imgs/misquito.png","width":"33","height":"42","x":"181","y":"77","offsetWidth":"1","offsetHeight":"1","offsetYSpace":"0"},{"name":"b_walk","img":"/imgs/misquito.png","width":"33","height":"42","x":"216","y":"77","offsetWidth":"1","offsetHeight":"1","offsetYSpace":"0"}]},
        "f_walk":{"Frames":[{"name":"b_walk","img":"/imgs/misquito.png","width":"33","height":"39","x":"73","y":"64","offsetWidth":"1","offsetHeight":"1","offsetYSpace":"0"},{"name":"b_walk","img":"/imgs/misquito.png","width":"33","height":"39","x":"110","y":"64","offsetWidth":"1","offsetHeight":"1","offsetYSpace":"0"}]},
        //File l_walk
        "l_walk":{"Frames":[{"name":"b_walk","img":"/imgs/misquito.png","width":"33","height":"42","x":"4","y":"22","offsetWidth":"41","offsetHeight":"42","offsetYSpace":"0"},{"name":"b_walk","img":"/imgs/misquito.png","width":"33","height":"42","x":"45","y":"22","offsetWidth":"41","offsetHeight":"42","offsetYSpace":"0"}]}
    };
    me.Cycle = function(){}
    return me;
}