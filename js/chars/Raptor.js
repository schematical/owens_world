
OGame.Chars.Raptor = function(){
    var me = new OObject();
    me.speed = .25;
    me.friction = 1;
    me.Animations = {
        "default":{
            "Frames":[{"name":"default","img":"/imgs/vraptor.png","width":"36","height":"70","x":"5","y":"31","offsetWidth":"35","offsetHeight":"1","offsetYSpace":"0"}]
        },
        'b_walk':{
            "Frames":[{"name":"default","img":"/imgs/vraptor.png","width":"36","height":"70","x":"5","y":"31","offsetWidth":"35","offsetHeight":"1","offsetYSpace":"0"},{"name":"default","img":"/imgs/vraptor.png","width":"36","height":"70","x":"40","y":"31","offsetWidth":"35","offsetHeight":"1","offsetYSpace":"0"},{"name":"default","img":"/imgs/vraptor.png","width":"36","height":"70","x":"75","y":"31","offsetWidth":"35","offsetHeight":"1","offsetYSpace":"0"},{"name":"default","img":"/imgs/vraptor.png","width":"36","height":"70","x":"110","y":"31","offsetWidth":"35","offsetHeight":"1","offsetYSpace":"0"},{"name":"default","img":"/imgs/vraptor.png","width":"36","height":"70","x":"145","y":"31","offsetWidth":"35","offsetHeight":"1","offsetYSpace":"0"},{"name":"default","img":"/imgs/vraptor.png","width":"36","height":"70","x":"180","y":"31","offsetWidth":"35","offsetHeight":"1","offsetYSpace":"0"}]
        },
        'f_walk':{"Frames":[{"name":"default","img":"/imgs/vraptor.png","width":"36","height":"70","x":"214","y":"31","offsetWidth":"32","offsetHeight":"1","offsetYSpace":"0"},{"name":"default","img":"/imgs/vraptor.png","width":"36","height":"70","x":"246","y":"31","offsetWidth":"32","offsetHeight":"1","offsetYSpace":"0"},{"name":"default","img":"/imgs/vraptor.png","width":"36","height":"70","x":"278","y":"31","offsetWidth":"32","offsetHeight":"1","offsetYSpace":"0"},{"name":"default","img":"/imgs/vraptor.png","width":"36","height":"70","x":"310","y":"31","offsetWidth":"32","offsetHeight":"1","offsetYSpace":"0"},{"name":"default","img":"/imgs/vraptor.png","width":"36","height":"70","x":"342","y":"31","offsetWidth":"32","offsetHeight":"1","offsetYSpace":"0"},{"name":"default","img":"/imgs/vraptor.png","width":"36","height":"70","x":"374","y":"31","offsetWidth":"32","offsetHeight":"1","offsetYSpace":"0"}]},
        'r_walk':{
            "Frames":[{"name":"default","img":"/imgs/vraptor.png","width":"80","height":"52","x":"4","y":"174","offsetWidth":"1","offsetHeight":"1","offsetYSpace":"0"},{"name":"default","img":"/imgs/vraptor.png","width":"80","height":"52","x":"91","y":"174","offsetWidth":"1","offsetHeight":"1","offsetYSpace":"0"},{"name":"default","img":"/imgs/vraptor.png","width":"80","height":"52","x":"174","y":"174","offsetWidth":"1","offsetHeight":"1","offsetYSpace":"0"},{"name":"default","img":"/imgs/vraptor.png","width":"80","height":"52","x":"258","y":"174","offsetWidth":"1","offsetHeight":"1","offsetYSpace":"0"},{"name":"default","img":"/imgs/vraptor.png","width":"80","height":"52","x":"345","y":"174","offsetWidth":"1","offsetHeight":"1","offsetYSpace":"0"},{"name":"default","img":"/imgs/vraptor.png","width":"80","height":"52","x":"428","y":"174","offsetWidth":"1","offsetHeight":"1","offsetYSpace":"0"}]
        },
        'l_walk':{
            //'flip':1,
            "Frames":[{"name":"default","img":"/imgs/vraptor.png","width":"80","height":"52","x":"4","y":"174","offsetWidth":"1","offsetHeight":"1","offsetYSpace":"0"},{"name":"default","img":"/imgs/vraptor.png","width":"80","height":"52","x":"91","y":"174","offsetWidth":"1","offsetHeight":"1","offsetYSpace":"0"},{"name":"default","img":"/imgs/vraptor.png","width":"80","height":"52","x":"174","y":"174","offsetWidth":"1","offsetHeight":"1","offsetYSpace":"0"},{"name":"default","img":"/imgs/vraptor.png","width":"80","height":"52","x":"258","y":"174","offsetWidth":"1","offsetHeight":"1","offsetYSpace":"0"},{"name":"default","img":"/imgs/vraptor.png","width":"80","height":"52","x":"345","y":"174","offsetWidth":"1","offsetHeight":"1","offsetYSpace":"0"},{"name":"default","img":"/imgs/vraptor.png","width":"80","height":"52","x":"428","y":"174","offsetWidth":"1","offsetHeight":"1","offsetYSpace":"0"}]
        }

    };
    me.ContactTile = function(){
        this.Space();
    }

    me.Cycle = function(){}
    return me;
}