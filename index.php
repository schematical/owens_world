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
    <script src='/js/OGame.js' type="text/javascript"></script>
    <script src='/js/OLevelBase.js' type="text/javascript"></script>
    <script src='/js/tiles/TileBase.js' type="text/javascript"></script>
    <script src='/js/OAction.js' type="text/javascript"></script>
    <?php foreach($objOGame->GetChars() as $strCharFile){ ?>
        <script type="text/javascript" src='js/chars/<?php echo $strCharFile; ?>'></script>
    <?php } ?>
    <?php foreach($objOGame->GetTiles() as $strTileFile){ ?>
        <script type="text/javascript" src='js/tiles/<?php echo $strTileFile; ?>'></script>
    <?php } ?>
    <?php foreach($objOGame->GetLevels() as $strLevelFile){ ?>
        <script type="text/javascript" src='js/levels/<?php echo $strLevelFile; ?>'></script>
    <?php } ?>
    <?php foreach($objOGame->GetActions() as $strLevelFile){ ?>
        <script type="text/javascript" src='js/actions/<?php echo $strLevelFile; ?>'></script>
    <?php } ?>
</head>
<body>

    <canvas id='myCanvas' height='500Px' width='900Px' style='background-color: lightblue;'></canvas>
    <div id='container'></div>
<script>



    OGame.Start();
</script>

</body>
</html>