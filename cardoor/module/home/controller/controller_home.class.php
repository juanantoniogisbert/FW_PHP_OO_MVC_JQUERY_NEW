<?php
    //include("module/cars/model/DAOCars.php");
    class controller_home {

        function __construct() {
            include(FUNCTIONS_HOME . "utils.inc.php");
            $_SESSION['module'] = "home";
        }

        function view_home() {
            require_once(VIEW_PATH_INC . "top_pages.php");
            require_once(VIEW_PATH_INC . "header.php");
            require_once(VIEW_PATH_INC . "menu.php");

            loadView('module/home/view/', 'home.php');

            require_once(VIEW_PATH_INC . "footer.html");
        }

        function list_cars() {
            try {
                // $daohome = new DAOHome();
                // $rdo = $daohome->select_all_cars();
                $rdo = loadModel(MODEL_HOME, "home_model", "select_all_cars");
            } catch (Exception $e) {
                echo json_encode("error");
            }

            if (!$rdo) {
                echo json_encode("error");
            }else{
                $prod = array();
                foreach ($rdo as $value) {
                    array_push($prod, $value);
                }
                echo json_encode($prod);
                exit();
            }
        }
    }
    // switch($_GET['op']){

    //     case 'home':
    //         try{
    //             $daohome = new DAOHome();
    //             $rdo = $daohome->select_all_cars();
    //         }catch (Exception $e){
    //             $callback = 'index.php?page=503';
    //             die('<script>window.location.href="'.$callback .'";</script>');
    //         }
    //         if(!$rdo){
    //             $callback = 'index.php?page=503';
    //             die('<script>window.location.href="'.$callback .'";</script>');
    //         }else{
    //             include("module/home/view/home.php");
    //         }
    //     break;

    //     case 'read_modal':
    //         // echo $_GET["modal"];
    //         // exit;
    //         try{
    //             $daohome = new DAOHome();
    //             $rdo = $daohome->select_cars($_GET['modal']);
    //         }catch (Exception $e){
    //             echo json_encode("error1");
    //             exit;
    //         }
    //         if(!$rdo){
    //             echo json_encode("error2");
    //             exit;
    //         }else{
    //             $cars=get_object_vars($rdo);
    //             echo json_encode($cars);
    //             exit;
    //         }
    //     break;

    //     case 'details':
    //         try {
    //             $daoshop = new DAOShop();
    //             $res = $daoshop->select_cars_details($_SESSION['id']);
    //             $datos = get_object_vars($res);
    //         } catch (Exception $e) {
    //             echo json_encode("error1");
    //         }
            
    //         if (!$res) {
    //             echo json_encode("error2");
    //         }else{
    //             echo json_encode($res);
    //             exit();
    //         }
    //     break;
    
    //     case 'details2':
    //         $_SESSION['id']=$_GET['id'];
    //         include("module/home/view/details_home.php");
    //     break;

    //     case 'dropdown':
    //         try{
    //             $daohome = new DAOHome();
    //             $rdo = $daohome->obtenertipo();
    //         }catch (Exception $e){
    //             echo json_encode("error1");
    //             exit;
    //         }
    //         if(!$rdo){
    // 			    echo json_encode("error2");
    //         exit;
    //     	}else{
    //           $tipos = array();
    //           foreach ($rdo as $value) {
    //             array_push($tipos, $value);
    //           }
    //             echo json_encode($tipos);
    //             exit;
    //     	}
    //     break;

    //     case 'dropdown2':
    //         try{
    //           $daohome = new DAOHome();
    //           $rdo = $daohome->obtenergama($_GET['tipo']);
    //         }catch (Exception $e){
    //           echo json_encode("error1");
    //           exit;
    //         }
    //         if(!$rdo){
    //           echo json_encode("error2");
    //           exit;
    //         }else{
    //           $gamas = array();
    //           foreach ($rdo as $value) {
    //           array_push($gamas, $value);
    //           }
    //           echo json_encode($gamas);
    //           exit;
    //         }
    //     break;

    //     case 'autocomplete':
    //         try{
    //             $daohome = new DAOHome();
    //             $rdo = $daohome->autocomplete($_GET['tipo'], $_GET['gama'], $_GET['marca']);
    //         }catch (Exception $e){
    //             echo json_encode("error1");
    //             exit;
    //         }
    //         if(!$rdo){
    //             echo json_encode("error2");
    //             exit;
    //         }else{
    //             foreach ($rdo as $value) {
    //                 echo '<div>
    //                         <a class="suggest-element" data="'.$value['marca'].'" id="service'.$value['id'].'">'.utf8_encode($value['marca']).'</a>
    //                     </div>';
    //             }
    //             exit;
    //         }
    //     break;

    //     case 'red':
    //         try{
    //             $daohome = new DAOHome();
    //             $rdo = $daohome->listautocomplete($_GET['tipo'],$_GET['gama'],$_GET['marca']);
    //         }catch (Exception $e){
    //             $callback = 'index.php?page=503';
    //             die('<script>window.location.href="'.$callback .'";</script>');
    //         }
            
    //         if(!$rdo){
    //             $callback = 'index.php?page=503';
    //             die('<script>window.location.href="'.$callback .'";</script>');
    //         }else{
    //             include("module/home/view/home.php");
    //         }
    //         break;

    //     default;
    //         include("view/inc/error404.php");
    //         break;

    //     }
