<?php
include 'config.php';
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit;
}

$user_id = $_SESSION['user_id'];
$query = "SELECT * FROM todos WHERE user_id = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();
?>

<h1>Your To-Do List</h1>
<a href="logout.php">Logout</a>

<form action="add_todo.php" method="POST">
    <input type="text" name="task" placeholder="New Task" required>
    <button type="submit">Add Task</button>
</form>

<ul>
    <?php while ($row = $result->fetch_assoc()): ?>
        <li>
            <?php echo $row['task']; ?> - 
            <form action="update_status.php" method="POST" style="display:inline;">
                <input type="hidden" name="id" value="<?php echo $row['id']; ?>">
                <select name="status" onchange="this.form.submit()">
                    <option <?php if ($row['status'] == 'Yet to be started') echo 'selected'; ?>>Yet to be started</option>
                    <option <?php if ($row['status'] == 'Ongoing') echo 'selected'; ?>>Ongoing</option>
                    <option <?php if ($row['status'] == 'Completed') echo 'selected'; ?>>Completed</option>
                </select>
            </form>
        </li>
    <?php endwhile; ?>
</ul>