<!-- HTML -->
<button id="changeTextBtn">Change Text</button>
<p id="text">This is the original text.</p>

<script>
    document.getElementById('changeTextBtn').addEventListener('click', function() {
        document.getElementById('text').textContent = "The text has been changed!";
    });
</script>
<!-- HTML -->
<form id="myForm">
    <label for="name">Name:</label>
    <input type="text" id="name" required>
    <button type="submit">Submit</button>
</form>

<script>
    document.getElementById('myForm').addEventListener('submit', function(event) {
        const nameInput = document.getElementById('name').value;
        if (!nameInput) {
            alert("Please enter your name.");
            event.preventDefault(); // Prevent form submission
        }
    });
</script>
<!-- HTML -->
<button id="fetchDataBtn">Fetch Data</button>
<div id="dataContainer"></div>

<script>
    document.getElementById('fetchDataBtn').addEventListener('click', function() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                const container = document.getElementById('dataContainer');
                container.innerHTML = data.map(post => `<h3>${post.title}</h3><p>${post.body}</p>`).join('');
            })
            .catch(error => console.error('Error fetching data:', error));
    });
</script>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Activities Control</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
        }
        button {
            margin: 10px 0;
            padding: 10px;
            background-color: #5cb85c;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background-color: #4cae4c;
        }
        #content {
            display: none;
            margin: 20px 0;
            padding: 15px;
            border: 1px solid #ddd;
            background: white;
        }
    </style>
</head>
<body>

    <h1>Control Activities with JavaScript</h1>
    
    <!-- Change Text -->
    <button id="changeTextBtn">Change Text</button>
    <p id="text">This is the original text.</p>

    <!-- Form Validation -->
    <form id="myForm">
        <label for="name">Name:</label>
        <input type="text" id="name" required>
        <button type="submit">Submit</button>
    </form>

    <!-- Toggle Content -->
    <button id="toggleBtn">Toggle Content</button>
    <div id="content">This is some toggleable content!</div>

    <!-- Fetch Data -->
    <button id="fetchDataBtn">Fetch Data</button>
    <div id="dataContainer"></div>

    <!-- Countdown Timer -->
    <div id="timer">10</div>
    <button id="startTimerBtn">Start Timer</button>

    <script>
        // Change Text
        document.getElementById('changeTextBtn').addEventListener('click', function() {
            document.getElementById('text').textContent = "The text has been changed!";
        });

        // Form Validation
        document.getElementById('myForm').addEventListener('submit', function(event) {
            const nameInput = document.getElementById('name').value;
            if (!nameInput) {
                alert("Please enter your name.");
                event.preventDefault(); // Prevent form submission
            } else {
                alert(`Hello, ${nameInput}!`);
            }
        });

        // Toggle Content
        document.getElementById('toggleBtn').addEventListener('click', function() {
            const content = document.getElementById('content');
            content.style.display = (content.style.display === "none") ? "block" : "none";
        });

        // Fetch Data from API
        document.getElementById('fetchDataBtn').addEventListener('click', function() {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(data => {
                    const container = document.getElementById('dataContainer');
                    container.innerHTML = data.map(post => `<h3>${post.title}</h3><p>${post.body}</p>`).join('');
                })
                .catch(error => console.error('Error fetching data:', error));
        });

        // Countdown Timer
        document.getElementById('startTimerBtn').addEventListener('click', function() {
            let timeLeft = 10; // Set countdown time here
            const timerDisplay = document.getElementById('timer');

            const countdown = setInterval(function() {
                if (timeLeft <= 0) {
                    clearInterval(countdown);
                    timerDisplay.textContent = "Time's up!";
                } else {
                    timerDisplay.textContent = timeLeft;
                    timeLeft--;
                }
            }, 1000);
        });
    </script>

</body>
</html>