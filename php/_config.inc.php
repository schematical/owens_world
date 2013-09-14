<?php
switch($_SERVER['SERVER_NAME']){
    case('owensgame.com'):
    case('www.owensgame.com'):

        define('__INSTALL_DIR__', '/var/www/owensgame.com');
    break;
    case('local.owens-world.com'):
        define('__INSTALL_DIR__', '/var/www/owens_game');
    break;
}

class OGame{
    public static function Init(){
        return new OGame();
    }
    public function GetChars(){
        return $this->ReadDir(__INSTALL_DIR__ .'/js/chars/');
    }
    public function GetTiles(){
        return $this->ReadDir(__INSTALL_DIR__ .'/js/tiles/');
    }
    public function GetLevels(){
        return $this->ReadDir(__INSTALL_DIR__ .'/js/levels/');
    }
    public function GetActions(){
        return $this->ReadDir(__INSTALL_DIR__ .'/js/actions/');
    }
    protected function ReadDir($strDir){
        $arrReturn = array();
        if ($handle = opendir($strDir)) {
            while (false !== ($entry = readdir($handle))) {
                if ($entry != "." && $entry != "..") {
                    $arrReturn[$entry] = $entry;
                }
            }
            closedir($handle);
        }
        return $arrReturn;
    }
}
