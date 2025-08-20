<?php
	/*define('ROOT_PATH', realpath(dirname(__FILE__)));*/ /*this gets me ALL the way to the root path which then won't display in browser, I think because of the way I configured the apache webserver to display the localhost url in browser?*/
	define('ROOT_PATH', '/dev-site'); /*YESSSS LET'S GOOOO THIS WORKED! leading / brings me to the root that is currently at http://localhost/, then sends me to the website directory. in my menu include links, I can then use <?php echo ROOT_PATH?>/file-path-here, and then I SHOULD be able to just update the definition of ROOT_PATH on a live server to have them work across pages, right? investigate security issues*/
	define('BASE_URL', 'http://localhost/dev-site/');
?>