const searchInput = document.querySelector('.search');
const galleryItems = document.querySelectorAll('.gallery a');

searchInput.addEventListener('keyup', function(e) {
  const searchValue = e.target.value.toLowerCase();
  //e stands for element that triggered event, ie input  

  galleryItems.forEach(item => {
    const caption = item.getAttribute('data-caption');
    const captionLower = caption.toLowerCase();

    if (captionLower.includes(searchValue)) {
      item.style.display = 'block';   
    } else {
      item.style.display = 'none'; 
    }
  });
});