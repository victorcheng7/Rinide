<?php
require('mailin.php');
$mailin = new Mailin(('https://api.sendinblue.com/v2.0', 'DkTr9tnFAc0I5s7O', 5000);
  $data = array( "email" => "example@example.net",
        "attributes" => array("NAME"=>"name", "SURNAME"=>"surname"),
        "listid" => array(1,4,6),
        "listid_unlink" => array(2,5)
    );

    var_dump($mailin->create_update_user($data));
?>