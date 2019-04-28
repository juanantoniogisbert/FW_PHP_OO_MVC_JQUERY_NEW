<?php
    class controller_login {

        function __construct() {
            include(FUNCTIONS_HOME . "utils.inc.php");
            $_SESSION['module'] = "login";
        }

        function view_login() {
            require_once(VIEW_PATH_INC . "top_pages.php");
            require_once(VIEW_PATH_INC . "header.php");
            require_once(VIEW_PATH_INC . "menu.php");

            loadView('module/login/view/', 'login.html');

            require_once(VIEW_PATH_INC . "footer.html");
        }

        function view_register() {
            require_once(VIEW_PATH_INC . "top_pages.php");
            require_once(VIEW_PATH_INC . "header.php");
            require_once(VIEW_PATH_INC . "menu.php");

            loadView('module/login/view/', 'register.html');

            require_once(VIEW_PATH_INC . "footer.html");
        }

        function log_social(){
			$rs = json_decode($_POST['data_social_net'],true);
			$result = loadModel(MODEL_LOGIN,'login_model','rid_social',$rs['id']);
			if (!$result) {
				$json = loadModel(MODEL_LOGIN,'login_model','rs',$rs);
			}else{
				$json = 'Registrado';
			}
			$data = exist_user($rs['id']);
			$data = $data[0];
			echo json_encode($data['token']);
		}

		function validate_register(){
			$info_data = json_decode($_POST['total_data'],true);
			$response = validate_data($info_data,'register');

			if ($response['result']) {
				$result['token'] = loadModel(MODEL_LOGIN,'login_model','insert_user',$info_data);
				if ($result) {
					$result['type'] = 'alta';
					$result['inputEmail'] = $info_data['remail'];
					$result['inputMessage'] = 'Para activar tu cuenta en ohana dogs pulse en el siguiente enlace';
					enviar_email($result);
				}
				echo json_encode($result);
			}else{
				$jsondata['success'] = false;
		 		$jsondata['error'] = $response['error'];
 				header('HTTP/1.0 400 Bad error');
				echo json_encode($jsondata);
			}
		}
    }