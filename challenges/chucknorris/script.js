// Extracted search functionality into a separate function
function performSearch() {
    const searchTerm = document.getElementById('searchInput').value;
    fetch(`https://api.chucknorris.io/jokes/search?query=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
            if (data.result.length > 0) {
                const randomIndex = Math.floor(Math.random() * data.result.length);
                document.getElementById('jokeDisplay').innerText = data.result[randomIndex].value;
            } else {
                document.getElementById('jokeDisplay').innerText = 'No jokes found for that search term.';
            }
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
            document.getElementById('jokeDisplay').innerText = 'Failed to fetch joke.';
        });
}

// Event listener for the search button
document.getElementById('searchButton').addEventListener('click', performSearch);

// Event listener for the Enter key in the search input field
document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});

// Event listener for toggling dark mode
document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? "enabled" : "disabled");
});

// Apply dark mode based on local storage
if (localStorage.getItem('darkMode') === "enabled") {
    document.body.classList.add('dark-mode');
}