document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.querySelector('.search-button');
  
    searchButton.addEventListener('click', function() {
      const searchTerm = document.querySelector('.search-input').value.trim().toLowerCase();
      const cards = document.querySelectorAll('.card');
  
      cards.forEach(card => {
        const title = card.querySelector('h2').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
  