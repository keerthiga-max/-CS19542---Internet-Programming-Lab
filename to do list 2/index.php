<?php
session_start(); // Start the session
if (!isset($_SESSION['loggedIn']) || $_SESSION['loggedIn'] !== true) {
    header('Location: login.html'); // Redirect to login page if not logged in
    exit();
}
?>
