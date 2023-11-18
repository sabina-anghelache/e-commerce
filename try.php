<?php 

    $hostname = "127.0.0.1";
    $username = "username";
    $dbname = "sign_up";
    $password = "passoword";

$conn = mysqli_connect($hostname, $username, $password, $dbname) or DIE("unable to connect the database! ");

if (isset($_POST['submit'])) {
    
    $Email = $_POST['Email'];
    $Pass = $_POST['Pass'];

    $sql = "Insert into sign_up (username, password) values ('$Email','$Pass')";
    if ($conn->query($sql) === TRUE) {
        echo "New Record Created";
    }
    else {
        echo "Not inserted";
    }

    $conn->close();

}


?>