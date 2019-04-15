<?php
//SITE_ROOT
$path = $_SERVER['DOCUMENT_ROOT'] . '/www/FW_PHP_OO_MVC_JQUERY_NEW/cardoor/';
define('SITE_ROOT', $path);

//SITE_PATH
define('SITE_PATH', 'http://' . $_SERVER['HTTP_HOST'] . '/www/FW_PHP_OO_MVC_JQUERY_NEW/cardoor/');

//CSS
define('CSS_PATH', SITE_PATH . 'view/assets/css/');
define('CSS_PATH_PLUG', SITE_PATH . 'view/assets/css/plugins/');

//JS
define('JS_PATH', SITE_PATH . 'view/assets/js/');

//JS PLUGINS
define('PLUGINS_JS_PATH', SITE_PATH . 'view/assets/js/plugins');

//IMG
define('IMG_PATH', SITE_PATH . 'view/assets/img/');
define('IMG_PATH_images', SITE_PATH . 'view/assets/img/images');

//log
define('USER_LOG_DIR', SITE_ROOT . 'log/user/Site_User_errors.log');
define('GENERAL_LOG_DIR', SITE_ROOT . 'log/general/Site_General_errors.log');

define('PRODUCTION', true);

//model
define('MODEL_PATH', SITE_ROOT . 'model/');
//view
define('VIEW_PATH_INC', SITE_ROOT . 'view/inc/');
define('VIEW_PATH_INC_ERROR', SITE_ROOT . 'view/inc/templates_error/');
//modules
define('MODULE_PATH', SITE_ROOT . 'module/');
//resources
define('RESOURCES', SITE_ROOT . 'resources/');
//media
define('MEDIA_PATH', SITE_ROOT . 'media/');
//utils
define('UTILS', SITE_ROOT . 'utils/');

//model home
define('FUNCTIONS_HOME', SITE_ROOT . 'module/home/utils/');
define('MODEL_PATH_HOME', SITE_ROOT . 'module/home/model/');
define('DAO_HOME', SITE_ROOT . 'module/home/model/DAO/');
define('BLL_HOME', SITE_ROOT . 'module/home/model/BLL/');
define('MODEL_HOME', SITE_ROOT . 'module/home/model/model/');
define('HOME_JS_PATH', SITE_PATH . 'module/home/view/js/');

//model home
define('CONTACT_JS_PATH', SITE_PATH . 'module/contact/view/js/');

//amigables
define('URL_AMIGABLES', TRUE);
