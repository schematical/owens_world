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
    <script src='/js/OObject.js' type="text/javascript"></script>
    <script src='/js/TileBase.js' type="text/javascript"></script>
    <script src='/js/OGame.js' type="text/javascript"></script>
    <?php foreach($objOGame->GetChars() as $strCharFile){ ?>
        <script type="text/javascript" src='js/chars/<?php echo $strCharFile; ?>'></script>
    <?php } ?>
    <?php foreach($objOGame->GetTiles() as $strTileFile){ ?>
        <script type="text/javascript" src='js/tiles/<?php echo $strTileFile; ?>'></script>
    <?php } ?>
</head>
<body>
    <h1>Owens Game</h1>
    <canvas id='myCanvas' height='500Px' width='900Px' style='background-color: white;'></canvas>
<script>



    OGame.Start();
</script>
</body>
</html>