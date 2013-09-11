OGame.Chars.Cow = function () {
    var me = new OObject();
    me.speed = .25;
    me.ammo = 100;
    me.x = 100;
    me.y = 100;
    me.height = 250;
    me.width = 250;
    me.Cycle = function(){

    }


    me.Animations = {
        'default':{
            'Frames':[{"name": "f_attack", "img": "/imgs/cow.gif", "width": "158", "height": "153", "x": "50", "y": "33", "offsetWidth": "250", "offsetHeight": "250", "offsetYSpace": "0"}]
        },

        "f_walk":{
            "Frames":[{"name":"default","img":"/imgs/cow.gif","width":"150","height":"150","x":"0","y":"4390","offsetWidth":"152","offsetHeight":"0","offsetYSpace":"0"},{"name":"default","img":"/imgs/cow.gif","width":"150","height":"150","x":"152","y":"4390","offsetWidth":"152","offsetHeight":"0","offsetYSpace":"0"},{"name":"default","img":"/imgs/cow.gif","width":"150","height":"150","x":"304","y":"4390","offsetWidth":"152","offsetHeight":"0","offsetYSpace":"0"},{"name":"default","img":"/imgs/cow.gif","width":"150","height":"150","x":"456","y":"4390","offsetWidth":"152","offsetHeight":"0","offsetYSpace":"0"},{"name":"default","img":"/imgs/cow.gif","width":"150","height":"150","x":"608","y":"4390","offsetWidth":"152","offsetHeight":"0","offsetYSpace":"0"},{"name":"default","img":"/imgs/cow.gif","width":"150","height":"150","x":"760","y":"4390","offsetWidth":"152","offsetHeight":"0","offsetYSpace":"0"},{"name":"default","img":"/imgs/cow.gif","width":"150","height":"150","x":"912","y":"4390","offsetWidth":"152","offsetHeight":"0","offsetYSpace":"0"},{"name":"default","img":"/imgs/cow.gif","width":"150","height":"150","x":"1064","y":"4390","offsetWidth":"152","offsetHeight":"0","offsetYSpace":"0"}]
        },
        "f_attack": {"Frames": [
            {"name": "f_attack", "img": "/imgs/cow.gif", "width": "158", "height": "153", "x": "50", "y": "33", "offsetWidth": "250", "offsetHeight": "250", "offsetYSpace": "0"},
            {"name": "f_attack", "img": "/imgs/cow.gif", "width": "158", "height": "153", "x": "300", "y": "33", "offsetWidth": "250", "offsetHeight": "250", "offsetYSpace": "0"},
            {"name": "f_attack", "img": "/imgs/cow.gif", "width": "158", "height": "153", "x": "550", "y": "33", "offsetWidth": "250", "offsetHeight": "250", "offsetYSpace": "0"},
            {"name": "f_attack", "img": "/imgs/cow.gif", "width": "158", "height": "153", "x": "800", "y": "33", "offsetWidth": "250", "offsetHeight": "250", "offsetYSpace": "0"},
            {"name": "f_attack", "img": "/imgs/cow.gif", "width": "158", "height": "153", "x": "1050", "y": "33", "offsetWidth": "250", "offsetHeight": "250", "offsetYSpace": "0"},
            {"name": "f_attack", "img": "/imgs/cow.gif", "width": "158", "height": "153", "x": "1300", "y": "33", "offsetWidth": "250", "offsetHeight": "250", "offsetYSpace": "0"},
            {"name": "f_attack", "img": "/imgs/cow.gif", "width": "158", "height": "153", "x": "1550", "y": "33", "offsetWidth": "250", "offsetHeight": "250", "offsetYSpace": "0"},
            {"name": "f_attack", "img": "/imgs/cow.gif", "width": "158", "height": "153", "x": "1800", "y": "33", "offsetWidth": "250", "offsetHeight": "250", "offsetYSpace": "0"},
            {"name": "f_attack", "img": "/imgs/cow.gif", "width": "158", "height": "153", "x": "2050", "y": "33", "offsetWidth": "250", "offsetHeight": "250", "offsetYSpace": "0"},
            {"name": "f_attack", "img": "/imgs/cow.gif", "width": "158", "height": "153", "x": "2300", "y": "33", "offsetWidth": "250", "offsetHeight": "250", "offsetYSpace": "0"},
            {"name": "f_attack", "img": "/imgs/cow.gif", "width": "158", "height": "153", "x": "2550", "y": "33", "offsetWidth": "250", "offsetHeight": "250", "offsetYSpace": "0"},
            {"name": "f_attack", "img": "/imgs/cow.gif", "width": "158", "height": "153", "x": "2800", "y": "33", "offsetWidth": "250", "offsetHeight": "250", "offsetYSpace": "0"},
            {"name": "f_attack", "img": "/imgs/cow.gif", "width": "158", "height": "153", "x": "3050", "y": "33", "offsetWidth": "250", "offsetHeight": "250", "offsetYSpace": "0"},
            {"name": "f_attack", "img": "/imgs/cow.gif", "width": "158", "height": "153", "x": "3300", "y": "33", "offsetWidth": "250", "offsetHeight": "250", "offsetYSpace": "0"},
            {"name": "f_attack", "img": "/imgs/cow.gif", "width": "158", "height": "153", "x": "3550", "y": "33", "offsetWidth": "250", "offsetHeight": "250", "offsetYSpace": "0"},
            {"name": "f_attack", "img": "/imgs/cow.gif", "width": "158", "height": "153", "x": "3800", "y": "33", "offsetWidth": "250", "offsetHeight": "250", "offsetYSpace": "0"},
            {"name": "f_attack", "img": "/imgs/cow.gif", "width": "158", "height": "153", "x": "4050", "y": "33", "offsetWidth": "250", "offsetHeight": "250", "offsetYSpace": "0"},
            {"name": "f_attack", "img": "/imgs/cow.gif", "width": "158", "height": "153", "x": "4300", "y": "33", "offsetWidth": "250", "offsetHeight": "250", "offsetYSpace": "0"},
            {"name": "f_attack", "img": "/imgs/cow.gif", "width": "158", "height": "153", "x": "4550", "y": "33", "offsetWidth": "250", "offsetHeight": "250", "offsetYSpace": "0"}
        ]},
        'b_attack':{
            'Frames':[
                {"name": "b_attack", "img": "/imgs/cow.gif", "width": "158", "height": "153", "x": "50", "y": "2533", "offsetWidth": "250", "offsetHeight": "250", "offsetYSpace": "0"},
                {"name": "b_attack", "img": "/imgs/cow.gif", "width": "158", "height": "153", "x": "300", "y": "2533", "offsetWidth": "250", "offsetHeight": "250", "offsetYSpace": "0"},
                {"name": "b_attack", "img": "/imgs/cow.gif", "width": "158", "height": "153", "x": "550", "y": "2533", "offsetWidth": "250", "offsetHeight": "250", "offsetYSpace": "0"},
                {"name": "b_attack", "img": "/imgs/cow.gif", "width": "158", "height": "153", "x": "800", "y": "2533", "offsetWidth": "250", "offsetHeight": "250", "offsetYSpace": "0"},
                {"name": "b_attack", "img": "/imgs/cow.gif", "width": "158", "height": "153", "x": "1050", "y": "2533", "offsetWidth": "250", "offsetHeight": "250", "offsetYSpace": "0"},
                {"name": "b_attack", "img": "/imgs/cow.gif", "width": "158", "height": "153", "x": "1300", "y": "2533", "offsetWidth": "250", "offsetHeight": "250", "offsetYSpace": "0"},
                {"name": "b_attack", "img": "/imgs/cow.gif", "width": "158", "height": "153", "x": "1550", "y": "2533", "offsetWidth": "250", "offsetHeight": "250", "offsetYSpace": "0"},
                {"name": "b_attack", "img": "/imgs/cow.gif", "width": "158", "height": "153", "x": "1800", "y": "2533", "offsetWidth": "250", "offsetHeight": "250", "offsetYSpace": "0"},
                {"name": "b_attack", "img": "/imgs/cow.gif", "width": "158", "height": "153", "x": "2050", "y": "2533", "offsetWidth": "250", "offsetHeight": "250", "offsetYSpace": "0"},
                {"name": "b_attack", "img": "/imgs/cow.gif", "width": "158", "height": "153", "x": "2300", "y": "2533", "offsetWidth": "250", "offsetHeight": "250", "offsetYSpace": "0"},
                {"name": "b_attack", "img": "/imgs/cow.gif", "width": "158", "height": "153", "x": "2550", "y": "2533", "offsetWidth": "250", "offsetHeight": "250", "offsetYSpace": "0"},
                {"name": "b_attack", "img": "/imgs/cow.gif", "width": "158", "height": "153", "x": "2800", "y": "2533", "offsetWidth": "250", "offsetHeight": "250", "offsetYSpace": "0"},
                {"name": "b_attack", "img": "/imgs/cow.gif", "width": "158", "height": "153", "x": "3050", "y": "2533", "offsetWidth": "250", "offsetHeight": "250", "offsetYSpace": "0"},
                {"name": "b_attack", "img": "/imgs/cow.gif", "width": "158", "height": "153", "x": "3050", "y": "2533", "offsetWidth": "250", "offsetHeight": "250", "offsetYSpace": "0"},
                {"name": "b_attack", "img": "/imgs/cow.gif", "width": "158", "height": "153", "x": "3300", "y": "2533", "offsetWidth": "250", "offsetHeight": "250", "offsetYSpace": "0"},
                {"name": "b_attack", "img": "/imgs/cow.gif", "width": "158", "height": "153", "x": "3550", "y": "2533", "offsetWidth": "250", "offsetHeight": "250", "offsetYSpace": "0"},
                {"name": "b_attack", "img": "/imgs/cow.gif", "width": "158", "height": "153", "x": "3800", "y": "2533", "offsetWidth": "250", "offsetHeight": "250", "offsetYSpace": "0"},
                {"name": "b_attack", "img": "/imgs/cow.gif", "width": "158", "height": "153", "x": "4050", "y": "2533", "offsetWidth": "250", "offsetHeight": "250", "offsetYSpace": "0"},
                {"name": "b_attack", "img": "/imgs/cow.gif", "width": "158", "height": "153", "x": "4300", "y": "2533", "offsetWidth": "250", "offsetHeight": "250", "offsetYSpace": "0"},
                {"name": "b_attack", "img": "/imgs/cow.gif", "width": "158", "height": "153", "x": "4550", "y": "2533", "offsetWidth": "250", "offsetHeight": "250", "offsetYSpace": "0"}
            ]
        },
        'l_walk':{
            "Frames":[{"name":"l_walk","img":"/imgs/cow.gif","width":"150","height":"150","x":"0","y":"4680","offsetWidth":"152","offsetHeight":"10","offsetYSpace":"0"},{"name":"l_walk","img":"/imgs/cow.gif","width":"150","height":"150","x":"152","y":"4680","offsetWidth":"152","offsetHeight":"10","offsetYSpace":"0"},{"name":"l_walk","img":"/imgs/cow.gif","width":"150","height":"150","x":"304","y":"4680","offsetWidth":"152","offsetHeight":"10","offsetYSpace":"0"},{"name":"l_walk","img":"/imgs/cow.gif","width":"150","height":"150","x":"456","y":"4680","offsetWidth":"152","offsetHeight":"10","offsetYSpace":"0"},{"name":"l_walk","img":"/imgs/cow.gif","width":"150","height":"150","x":"608","y":"4680","offsetWidth":"152","offsetHeight":"10","offsetYSpace":"0"},{"name":"l_walk","img":"/imgs/cow.gif","width":"150","height":"150","x":"760","y":"4680","offsetWidth":"152","offsetHeight":"10","offsetYSpace":"0"},{"name":"l_walk","img":"/imgs/cow.gif","width":"150","height":"150","x":"912","y":"4680","offsetWidth":"152","offsetHeight":"10","offsetYSpace":"0"},{"name":"l_walk","img":"/imgs/cow.gif","width":"150","height":"150","x":"1064","y":"4680","offsetWidth":"152","offsetHeight":"10","offsetYSpace":"0"}]
        },
        'b_walk':{
            "Frames":[{"name":"l_walk","img":"/imgs/cow.gif","width":"150","height":"150","x":"0","y":"4980","offsetWidth":"152","offsetHeight":"150","offsetYSpace":"0"},{"name":"l_walk","img":"/imgs/cow.gif","width":"150","height":"150","x":"152","y":"4980","offsetWidth":"152","offsetHeight":"150","offsetYSpace":"0"},{"name":"l_walk","img":"/imgs/cow.gif","width":"150","height":"150","x":"304","y":"4980","offsetWidth":"152","offsetHeight":"150","offsetYSpace":"0"},{"name":"l_walk","img":"/imgs/cow.gif","width":"150","height":"150","x":"456","y":"4980","offsetWidth":"152","offsetHeight":"150","offsetYSpace":"0"},{"name":"l_walk","img":"/imgs/cow.gif","width":"150","height":"150","x":"608","y":"4980","offsetWidth":"152","offsetHeight":"150","offsetYSpace":"0"},{"name":"l_walk","img":"/imgs/cow.gif","width":"150","height":"150","x":"760","y":"4980","offsetWidth":"152","offsetHeight":"150","offsetYSpace":"0"},{"name":"l_walk","img":"/imgs/cow.gif","width":"150","height":"150","x":"912","y":"4980","offsetWidth":"152","offsetHeight":"150","offsetYSpace":"0"},{"name":"l_walk","img":"/imgs/cow.gif","width":"150","height":"150","x":"1064","y":"4980","offsetWidth":"152","offsetHeight":"150","offsetYSpace":"0"}]
        },
        'r_walk':{
            "Frames":[{"name":"l_walk","img":"/imgs/cow.gif","width":"150","height":"150","x":"0","y":"5280","offsetWidth":"152","offsetHeight":"150","offsetYSpace":"0"},{"name":"l_walk","img":"/imgs/cow.gif","width":"150","height":"150","x":"152","y":"5280","offsetWidth":"152","offsetHeight":"150","offsetYSpace":"0"},{"name":"l_walk","img":"/imgs/cow.gif","width":"150","height":"150","x":"304","y":"5280","offsetWidth":"152","offsetHeight":"150","offsetYSpace":"0"},{"name":"l_walk","img":"/imgs/cow.gif","width":"150","height":"150","x":"304","y":"5280","offsetWidth":"152","offsetHeight":"150","offsetYSpace":"0"},{"name":"l_walk","img":"/imgs/cow.gif","width":"150","height":"150","x":"456","y":"5280","offsetWidth":"152","offsetHeight":"150","offsetYSpace":"0"},{"name":"l_walk","img":"/imgs/cow.gif","width":"150","height":"150","x":"608","y":"5280","offsetWidth":"152","offsetHeight":"150","offsetYSpace":"0"},{"name":"l_walk","img":"/imgs/cow.gif","width":"150","height":"150","x":"760","y":"5280","offsetWidth":"152","offsetHeight":"150","offsetYSpace":"0"},{"name":"l_walk","img":"/imgs/cow.gif","width":"150","height":"150","x":"912","y":"5280","offsetWidth":"152","offsetHeight":"150","offsetYSpace":"0"},{"name":"l_walk","img":"/imgs/cow.gif","width":"150","height":"150","x":"1064","y":"5280","offsetWidth":"152","offsetHeight":"150","offsetYSpace":"0"}]
        }

    };
    me.ContactObject = function(objObject){


    }


    return me;
}
