<?php
class home_bll{
    private $dao;
    private $db;
    static $_instance;

    private function __construct() {
        $this->dao = home_DAO::getInstance();
        $this->db = Db::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function home_bll($arrArgument){
      return $this->dao->home_dao($this->db, $arrArgument);
    }

    public function select_all_cars_BLL(){
      return $this->dao->select_all_cars_DAO($this->db);
    }

    // public function obtain_provinces_BLL(){
    //   return $this->dao->obtain_provinces_DAO();
    // }

    // public function obtain_cities_BLL($arrArgument){
    //   return $this->dao->obtain_cities_DAO($arrArgument);
    // }
}
