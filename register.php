<?php

    session_start();
    header('Location:signup.html');
    $con= mysqli_connect('localhost','root');
    if ($con) {
        echo "Connection Successfully";
    }
    else {
        echo "No connection ";
    }

    mysqli_select_db($con, 'sign_up_ecommerce');
    $name= $_POST['email'];
    $pass= $_POST['password'];

    $quer = "Select * from sign_up where username = '$name' && password = '$pass'";
    $result = mysqli_query($con, $quer);
    $num = mysqli_num_rows($result);
    if ($num == 1) {
        echo "Duplicate Data";
    }
    else {
        $querr = "insert into sign_up(username,password) values('$name','$pass')";
        mysqli_query($con, $querr);
    }

?>