<?php
session_start();
include 'db.php';

if (isset($_SESSION['username'])) {
    $username = $_SESSION['username'];
    $sql = "SELECT * FROM expenses WHERE username = '$username'";
    $result = $conn->query($sql);

    $expenses = [];
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $expenses[] = $row;
        }
    }

    echo json_encode($expenses);
} else {
    echo json_encode([]);
}

$conn->close();
?>
