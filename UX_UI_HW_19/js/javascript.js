console.log("your index.js file is loaded correctly!")

        // Function to open the lightbox
        function openLightbox(imageSrc, caption) {
          const lightbox = document.getElementById('lightbox');
          const lightboxImage = document.getElementById('lightbox-image');
          const lightboxCaption = document.getElementById('lightbox-caption');

          lightboxImage.src = imageSrc;
          lightboxCaption.textContent = caption;
          lightbox.style.display = 'block';
      }

      // Function to close the lightbox
      function closeLightbox() {
          const lightbox = document.getElementById('lightbox');
          lightbox.style.display = 'none';
      }