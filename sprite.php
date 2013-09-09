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
    Name: <input id='txtUrl' name='name' value='default' /><br/>
    <select id='lstAnimation'>

    </select>
    <div style='border:thin blue solid; padding:5Px; margin:5Px;'>
        Img Url: <input id='txtUrl' name='img' value='/imgs/cow.gif' /><br/>
        Width: <input id='txtWidth' name='width' class='numeric-inc'  value='250' /><br/>
        Height: <input id='txtHeight' name='height' class='numeric-inc' value='250' /><br/>

        X: <input id='txtX' name='x' value='0' class='numeric-inc'  /><br/>
        Y: <input id='txtY' name='y' value='0' class='numeric-inc'  /><br/>

        Offset Width: <input id='txtOffsetWidth' name='offsetWidth' value='250' /><br/>
        Offset Height: <input id='txtOffsetHeight' name='offsetHeight' value='250' /><br/>
        Offset Y Space: <input id='txtOffsetYSpace' name='offsetYSpace' value='0' /><br/>
        <button id='btnAdd' value=''>Add</button>
    </div>
    <button id='btnAll' value=''>View All</button>
    <button id='btnClear' value=''>Clear</button>
</div>
<textarea id='txtCode' cols='100' row='5'>

</textarea>
<canvas id='myCanvas' height='500Px' width='900Px' style='background-color: lightblue;'></canvas>

<script>
    var OSprite = {
        Mode:'DRAG_SELECT',
        MouseDownData:null,
        Data:{
            'default':{
                Frames:[]
            }
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
        UpdateCtls:function(){
            $('#lstAnimation').children().remove();
            for(var strKey in OSprite.Data){
                var jOption = $('<option></option>');
                jOption.text(strKey);
                jOption.val(strKey);
                $('#lstAnimation').append(jOption);
            }
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
                        $('#txtWidth').val(),
                        $('#txtHeight').val()
                    );

                }

            OSprite.UpdateCtls();
        }
    };
    $('#frmInputHolder input').blur(
        OSprite.UpdateCtl
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
    $('#lstAnimation').change(
        function(objEvent){

        }
    );
    $('#btnAdd').click(function(objEvent){
        var objData = OSprite.GetData();
        if(typeof OSprite.Data[$('#txtName').val()] == 'undefined'){
            OSprite.Data[$('#txtName').val()] = {
                Frames:[]
            }
        };
        OSprite.Data[$('#txtName').val()].Frames[OSprite.Data[$('#txtName').val()].Frames.length] = objData;
        $('#txtCode').val(JSON.stringify(OSprite.Data));
        OSprite.UpdateCtls();
    });

    $('body').on('keydown', '.numeric-inc', function(objEvent){
        var jThis = $(this);
        var intOffsetWidth = $('#txtOffsetWidth').val();
        var intOffsetHeight = $('#txtOffsetHeight').val();
        var intOffsetYHeight = $('#txtOffsetYSpace').val();
        if(objEvent.keyCode == 40){
            if(jThis.attr('name') == 'x'){
                jThis.val(parseInt(jThis.val()) -  intOffsetWidth);
            }else{
                jThis.val(parseInt(jThis.val()) - (intOffsetHeight - intOffsetYHeight));
            }
        }
        if(objEvent.keyCode == 38){
            if(jThis.attr('name') == 'x'){
                jThis.val(parseInt(jThis.val()) - -1* intOffsetWidth);
            }else{
                jThis.val(parseInt(jThis.val()) - -1* (intOffsetHeight - -1 * intOffsetYHeight));
            }
        }
        OSprite.Update();
    });
    $('#myCanvas').mousedown(function(e) {

        var offset = $(this).offset();
        var mX = (e.pageX - offset.left);
        var mY = (e.pageY - offset.top);

        if(OSprite.Mode == 'DRAG_SELECT'){
            OSprite.MouseDownData = {
                x:mX,
                y:mY
            };
        }else{
            var intOffsetWidth = $('#txtOffsetWidth').val();
            var intOffsetHeight = $('#txtOffsetHeight').val();

            $('#txtX').val(Math.floor((mX/intOffsetWidth)) * intOffsetWidth);
            $('#txtY').val(Math.floor((mY/intOffsetHeight)) * intOffsetHeight);
        }

    });
    $('#myCanvas').mousemove(function(e){
        if(OSprite.MouseDownData != null){
            var offset = $(this).offset();
            var mX = (e.pageX - offset.left);
            var mY = (e.pageY - offset.top);

            var objData = OSprite.GetData();
            c = document.getElementById("myCanvas");
            var context = c.getContext('2d');

            context.rect(
                OSprite.MouseDownData.x,
                OSprite.MouseDownData.y,
                mX,
                mY
            );

        }
    });
    $('#myCanvas').mouseup(function(e){
        if(OSprite.MouseDownData != null){
            var offset = $(this).offset();
            var mX = (e.pageX - offset.left);
            var mY = (e.pageY - offset.top);

            $('#txtX').val(Math.floor( OSprite.MouseDownData.x));
            $('#txtY').val(Math.floor(OSprite.MouseDownData.y));

            $('#txtWidth').val(Math.floor(mX - OSprite.MouseDownData.x));
            $('#txtHeight').val(Math.floor(mY - OSprite.MouseDownData.y));
            OSprite.Update();
            OSprite.MouseDownData = null;
        }

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