
fetch('goit-js-hw-09/public/1-gallery.html') 
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        
        const galleryContainer = document.querySelector('.gallery');
        galleryContainer.innerHTML = data;

       
        const lightbox = new SimpleLightbox('.gallery a', {
            captionsData: 'alt',
            captionDelay: 250,
        });
    })
    .catch(error => {
        console.error('Ошибка при загрузке галереи:', error);
    });
