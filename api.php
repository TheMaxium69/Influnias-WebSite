<?php


include "/home/tyroliumfg/DB-tyroliumfguser.php";

if(isset($_POST['influnias-name']) && isset($_POST['influnias-email'])&& isset($_POST['influnias-text'])){

    if( !empty($_POST['influnias-name']) && !empty($_POST['influnias-email']) &&  !empty($_POST['influnias-text']) ){

        $name = crypt_influnias($_POST['influnias-name']);
        $mail = crypt_influnias($_POST['influnias-email']);
        $content = crypt_influnias($_POST['influnias-text']);

                $requeteInsert = "INSERT INTO influnias(name, mail, content) VALUES ('$name', '$mail', '$content')";

                $resultInsert = mysqli_query($ConnectDB, $requeteInsert);

                header("location: https://www.influnias.fr/#contact?true=1");

    }else{
        
        header("location: https://www.influnias.fr/#contact?false=0");

    }

}

function crypt_influnias($content){

    $content = str_replace("'", "&#039", $content);
    $content = str_replace("ô", "&ocirc;", $content);
    $content = str_replace("î", "&icirc;", $content);
	$content = "*" . $content . "*";

	return $content;

}





?>