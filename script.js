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