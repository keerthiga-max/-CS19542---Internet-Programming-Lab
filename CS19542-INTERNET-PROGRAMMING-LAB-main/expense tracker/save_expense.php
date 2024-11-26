<?php
session_start();
include 'db.php';

if (isset($_SESSION['username'])) {
    $username = $_SESSION['username'];
    $name = $_POST['name'];
    $amount = $_POST['amount'];
    $category = $_POST['category'];
    $date = $_POST['date'];

    $sql = "INSERT INTO expenses (username, name, amount, category, date) VALUES ('$username', '$name', '$amount', '$category', '$date')";
    if ($conn->query($sql) === TRUE) {
        echo "Expense saved successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
} else {
    echo "User not logged in";
}

$conn->close();
?>
