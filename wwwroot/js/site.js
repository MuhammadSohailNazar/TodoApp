// Add event listener to the input field to submit form on "Enter" key press
document.getElementById('taskInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.getElementById('taskForm').submit(); // Submit the form
    }
});