<?php
include 'config.php';
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $user_id = $_SESSION['user_id'];
    $task = $_POST['task'];

    $query = "INSERT INTO todos (user_id, task) VALUES (?, ?)";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("is", $user_id, $task);

    if ($stmt->execute()) {
        header("Location: dashboard.php");
    } else {
        echo "Error: " . $stmt->error;
    }
}
?>