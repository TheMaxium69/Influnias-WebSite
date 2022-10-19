<?php


include "/home/tyroliumfg/DB-tyroliumfguser.php";

if(isset($_POST['influnias-name']) && isset($_POST['influnias-email'])&& isset($_POST['influnias-text'])){

    if( !empty($_POST['influnias-name']) && !empty($_POST['influnias-email']) &&  !empty($_POST['influnias-text']) ){

        $name = "*" . $_POST['influnias-name'] . "*";
        $mail = "*" . $_POST['influnias-email'] . "*";
        $content = "*" . $_POST['influnias-text'] . "*";

                $requeteInsert = "INSERT INTO influnias(name, mail, content) VALUES ('$name', '$mail', '$content')";

                $resultInsert = mysqli_query($ConnectDB, $requeteInsert);

                header("location: https://www.influnias.fr/#contact?true=1");

    }else{
        
        header("location: https://www.influnias.fr/#contact?false=0");

    }

}






?>