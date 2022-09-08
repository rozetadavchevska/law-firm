<?php

    if (isset($_POST['submit'])){
        $firstName = $_POST['fname'];
        $lastName = $_POST['lname'];
        $emailFrom = $_POST['email'];
        $message = $_POST['message'];
    }

    $emailTo = "rozetadavcevska@gmail.com";
    $headers = "From: " .$firstName .$lastName. 
    "\r\n Email: ".$emailFrom. 
    "\r\n Message: " .$message. "\r\n";

    if(mail($emailTo,$firstName, $message, $headers)){
        $success="Your message is received successfully";
    };

?>