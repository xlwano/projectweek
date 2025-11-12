const form = document.getElementById('searchForm');
const input = document.getElementById('searchInput');

console.log(form);
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const query = input.value.trim();
  console.log('Search query:', query);
  if (query) {
    // For example, search on Google for the query:
    const url = 'https://www.google.com/search?q=' + encodeURIComponent(query);
    window.open(url, '_blank');
  }
});
