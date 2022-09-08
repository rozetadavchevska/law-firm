<?php
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);
    
    if (empty($_POST['fname']) && empty($_POST['email'])) die();



    if (isset($_POST['submit'])){
        $firstName = $_POST['fname'];
        $lastName = $_POST['lname'];
        $emailFrom = $_POST['email'];
        $message = $_POST['message'];


        $emailTo = "rozetadavcevska@gmail.com";
        $headers = "From: " .$firstName .$lastName. 
        "\r\n Email: ".$emailFrom. 
        "\r\n Message: " .$message. "\r\n";

        mail($emailTo, $firstName, $message, $headers);
    } else{
        echo json_encode(["sent" => false, "message" => "Something went wrong"]);
    }

   

?>