<!-- HTML -->
<button id="changeTextBtn">Change Text</button>
<p id="text">This is the original text.</p>

<script>
    document.getElementById('changeTextBtn').addEventListener('click', function() {
        document.getElementById('text').textContent = "The text has been changed!";
    });
</script>