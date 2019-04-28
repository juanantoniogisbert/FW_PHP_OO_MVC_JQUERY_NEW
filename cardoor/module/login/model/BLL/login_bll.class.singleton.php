<?php
class login_bll{
    private $dao;
    private $db;
    static $_instance;

    private function __construct() {
        $this->dao = login_DAO::getInstance();
        $this->db = Db::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function insert_rs_BLL($arrArgument){
      return $this->dao->insert_rs($this->db,$arrArgument);
    }

    public function insert_user_BLL($arrArgument){
        return $this->dao->insert_user($this->db,$arrArgument);
      }

    // public function obtain_provinces_BLL(){
    //   return $this->dao->obtain_provinces_DAO();
    // }

    // public function obtain_cities_BLL($arrArgument){
    //   return $this->dao->obtain_cities_DAO($arrArgument);
    // }
}
