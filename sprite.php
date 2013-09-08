<?php
require_once(dirname(__FILE__) . '/php/_config.inc.php');
$objOGame = OGame::Init();
?>

<html>
<head>
    <script language="javascript" src="http://local.ffs.com/assets/MJax/js/jquery/jquery.1.9.1.js"></script>
    <style>
        body {
            margin: 0px;
            padding: 0px;
        }
    </style>

</head>
<body>
<h1>Owens Game</h1>
<div id='frmInputHolder'>
    Name: <input id='txtUrl' name='name' value='' /><br/>
    Img Url: <input id='txtUrl' name='img' value='http://www.pixeljoint.com/files/icons/full/minecraft1.png' /><br/>
    Width: <input id='txtWidth' name='width' class='numeric-inc'  value='64' /><br/>
    Height: <input id='txtHeight' name='height' class='numeric-inc' value='64' /><br/>

    X: <input id='txtX' name='x' value='0' class='numeric-inc'  /><br/>
    Y: <input id='txtY' name='y' value='0' class='numeric-inc'  /><br/>

    Offset Width: <input id='txtOffsetWidth' name='offsetWidth' value='32' /><br/>
    Offset Height: <input id='txtOffsetHeight' name='offsetHeight' value='32' /><br/>
    <button id='btnAdd' value=''>Add</button>
    <button id='btnAll' value=''>View All</button>
    <button id='btnClear' value=''>Clear</button>
</div>
<textarea id='txtCode' cols='100' row='5'>

</textarea>
<canvas id='myCanvas' height='500Px' width='900Px' style='background-color: white;'></canvas>

<script>
    var OSprite = {
        Data:{
            Frames:[]
        },
        GetData:function(){
            var jColl = $('#frmInputHolder input');
            var objData = {};
            for(var i = 0; i < jColl.length; i++){
                var jInput = $(jColl[i]);
                objData[jInput.attr('name')] = jInput.val();

            }
            return objData;
        },
        Update:function(){
            var intOffsetWidth = $('#txtOffsetWidth').val();
            var intOffsetHeight = $('#txtOffsetHeight').val();
                var objData = OSprite.GetData();
                c = document.getElementById("myCanvas");
                var context = c.getContext('2d');
                context.clearRect(0, 0, c.width, c.height);
                objData.imageObj = new Image();
                objData.imageObj.src = objData.img;
                objData.imageObj.onload = function(){
                    //var objData = this;
                    c = document.getElementById("myCanvas");
                    var context = c.getContext('2d');

                    context.drawImage(
                        objData.imageObj,
                        objData.x,//this.x,
                        objData.y,

                        $('#txtWidth').val(),
                        $('#txtHeight').val(),
                        0,
                        0,
                        intOffsetWidth,
                        intOffsetHeight
                    );

                }


        }
    };
    $('#frmInputHolder input').blur(
        OSprite.Update
    );
    $('#btnAll').click(function(objEvent){
        var objData = OSprite.GetData();
        c = document.getElementById("myCanvas");
        var context = c.getContext('2d');
        context.clearRect(0, 0, c.width, c.height);
        objData.imageObj = new Image();
        objData.imageObj.src = objData.img;
        objData.imageObj.onload = function(){
            //var objData = this;
            c = document.getElementById("myCanvas");
            var context = c.getContext('2d');

            context.drawImage(
                objData.imageObj,
                0,
                0,
                objData.imageObj.width,
                objData.imageObj.height
            );

        }
    });

    $('#btnAdd').click(function(objEvent){
        var objData = OSprite.GetData();
        OSprite.Data.Frames[OSprite.Data.Frames.length] = objData;
        $('#txtCode').val(JSON.stringify(OSprite.Data));
    });

    $('body').on('keydown', '.numeric-inc', function(objEvent){
        var jThis = $(this);
        var intOffsetWidth = $('#txtOffsetWidth').val();
        var intOffsetHeight = $('#txtOffsetHeight').val();
        if(objEvent.keyCode == 40){
            if(jThis.attr('name') == 'x'){
                jThis.val(parseInt(jThis.val()) -  intOffsetWidth);
            }else{
                jThis.val(parseInt(jThis.val()) - intOffsetHeight);
            }
        }
        if(objEvent.keyCode == 38){
            if(jThis.attr('name') == 'x'){
                jThis.val(parseInt(jThis.val()) - -1* intOffsetWidth);
            }else{
                jThis.val(parseInt(jThis.val()) - -1* intOffsetHeight);
            }
        }
        OSprite.Update();
    });
    $('#myCanvas').click(function(e) {
        var intOffsetWidth = $('#txtOffsetWidth').val();
        var intOffsetHeight = $('#txtOffsetHeight').val();
        var offset = $(this).offset();
        var mX = (e.pageX - offset.left);
        var mY = (e.pageY - offset.top);

        $('#txtX').val(Math.floor((mX/intOffsetWidth)) * intOffsetWidth);
        $('#txtY').val(Math.floor((mY/intOffsetHeight)) * intOffsetHeight);
        OSprite.Update();
    });
    $('#btnClear').click(function(){
       OSprite.Data = {
           'Frames':[]
       };
    });
    OSprite.Update();



</script>
</body>
</html>