<?php
	class controller_contact {
		function __construct(){
			$_SESSION['module'] = "contact";
		}
		
		function list_contact(){
			require(VIEW_PATH_INC . "header.php");
			require(VIEW_PATH_INC . "menu.php");
			loadView('module/contact/view/','contact.html');
			require(VIEW_PATH_INC . "footer.html");
		}
		
		function send_cont(){
			$data_mail = array();
			$data_mail = json_decode($_POST['fin_data'],true);
			$arrArgument = array(
				'type' => 'contact',
				'token' => '',
				'inputName' => $data_mail['fullname'],
				'inputEmail' => $data_mail['correo'],
				'inputMessage' => $data_mail['message']
			);
			
			//set_error_handler('ErrorHandler');
			try{
	            echo "<div class='alert alert-success'>".enviar_email($arrArgument)." </div>";
			} catch (Exception $e) {
				echo "<div class='alert alert-error'>Server error. Try later...</div>";
			}
			//restore_error_handler();

			$arrArgument = array(
				'type' => 'admin',
				'token' => '',
				'inputName' => $data_mail['fullname'],
				'inputEmail' => $data_mail['correo'],
				'inputMessage' => $data_mail['message']
			);
			try{
	            enviar_email($arrArgument);
			} catch (Exception $e) {
				echo "<div class='alert alert-error'>Server error. Try later...</div>";
			}
		}

	}
