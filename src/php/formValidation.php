<?php
    header("Access-Control-Allow-Origin: *");

    require './vendor/phpmailer/phpmailer/src/PHPMailer.php';
    require './vendor/phpmailer/phpmailer/src/Exception.php';
    require './vendor/phpmailer/phpmailer/src/SMTP.php'; 
    require './vendor/autoload.php';  
    
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;

    if(isset($_POST['submit'])){
        $fName = $_POST['fname'];
        $lName = $_POST['lname'];
        $email = $_POST['email'];
        $message = $_POST['message'];


        $mail = new PHPMailer(true);

        try{
            $mail -> isSMTP();
            $mail -> SMTPAuth = true;
            $mail -> Host       = 'smtp.gmail.com';                // Set the SMTP server to send through
            $mail -> SMTPAuth   = true;                             // Enable SMTP authentication
            $mail -> Username   = 'projecttestings7@gmail.com';           // SMTP username
            $mail -> Password   = 'Codychristianisthehottest0909.';                        // SMTP password
            $mail -> SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;   // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
            $mail -> Port       = 587;

            $mail -> setFrom("projecttestings7@gmail.com", "Hetfield & Heiden");
            $mail -> addAddress($email); 

            $mail->isHTML(true);                                  //Set email format to HTML
            $mail->Subject = 'Hetfield & Heiden Form Message';
            $mail->Body    = 'Name: ' . $name . '<br />Email: ' . $email . '<br /><br /><b>Message:</b> '. $message;
            
            $mail->send();
            echo 'Message has been sent';
        
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }

    }
?>
