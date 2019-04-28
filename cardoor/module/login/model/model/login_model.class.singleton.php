<?php
class login_model {
    private $bll;
    static $_instance;

    private function __construct() {
        $this->bll = login_bll::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function rs($arrArgument){
        return $this->bll->insert_rs_BLL($arrArgument);
    }

    public function insert_user($arrArgument){
        return $this->bll->insert_user_BLL($arrArgument);
    }

    // public function obtain_provinces(){
    //     return $this->bll->obtain_provinces_BLL();
    // }

    // public Function obtain_cities($arrArgument){
    //     return $this->bll->obtain_cities_BLL($arrArgument);
    // }

}
