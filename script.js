document.addEventListener('DOMContentLoaded', () => {
 
  const headers = document.querySelectorAll('.card-header');

  
  headers.forEach(header => {
    header.addEventListener('click', () => {
      // Find the parent timeline-card of the clicked header
      const card = header.parentElement;
      
      // Toggle the 'expanded' class on the parent card
      // This class triggers the CSS animations for the dropdown and the arrow
      card.classList.toggle('expanded');
    });
  });
});