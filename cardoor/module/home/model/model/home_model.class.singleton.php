<?php
class home_model {
    private $bll;
    static $_instance;

    private function __construct() {
        $this->bll = home_bll::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function home($arrArgument) {
        return $this->bll->home_bll($arrArgument);
    }
    
    public function select_all_cars(){
        return $this->bll->select_all_cars_BLL();
    }

    // public function obtain_provinces(){
    //     return $this->bll->obtain_provinces_BLL();
    // }

    // public Function obtain_cities($arrArgument){
    //     return $this->bll->obtain_cities_BLL($arrArgument);
    // }

}
