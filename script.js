const slider = document.querySelector('.slider');
        const slides = document.querySelectorAll('.slide');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        const thumbnails = document.querySelectorAll('.thumbnail');
        const bback = document.querySelector('body');
        const totalSlides = slides.length;
        let currentIndex = 0;
    
        function showSlide(index) {
            slider.style.transform = `translateX(-${index * (100 / totalSlides)}%)`;
            
            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.style.transform = 'scale(1) rotateY(0deg)'; // Center slide
                    slide.style.zIndex = '1';
                    slide.style.opacity = '1';
                } else if (i === (index - 1 + totalSlides) % totalSlides) {
                    slide.style.transform = 'scale(0.8) rotateY(-15deg)'; // Previous slide
                    slide.style.zIndex = '0';
                    slide.style.opacity = '0.7';
                } else if (i === (index + 1) % totalSlides) {
                    slide.style.transform = 'scale(0.8) rotateY(15deg)'; // Next slide
                    slide.style.zIndex = '0';
                    slide.style.opacity = '0.7';
                } else {
                    slide.style.transform = 'scale(0.5) rotateY(30deg)'; // Hidden slides
                    slide.style.zIndex = '-1';
                    slide.style.opacity = '0.5';
                }
            });
            
            updateBodyBackground(index);
            updateThumbnails(index);
        }
    
        function updateBodyBackground(index) {
            const imageUrls = [
                'Images/PARIS.avif',
                'Images/TOKYO.avif',
                'Images/SYDNEY.avif',
                'Images/LONDON.avif',
                'Images/DUBAI.avif',
                'Images/NEWYORK.avif',
                'Images/ROME.avif',
                'Images/AMSTERDAM.avif',
                'Images/LOSANGELS.avif',
                'Images/MIAMI.avif'
            ];


            bback.style.backgroundImage = `url(${imageUrls[index]})`;
        }
    
        function updateThumbnails(index) {
            thumbnails.forEach((thumb, i) => {
                if (i === index) {
                    thumb.classList.add('active');
                } else {
                    thumb.classList.remove('active');
                }
            });
        }
    
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            showSlide(currentIndex);
        });
    
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            showSlide(currentIndex);
        });
    
        thumbnails.forEach((thumb, index) => {
            thumb.addEventListener('click', () => {
                currentIndex = index;
                showSlide(currentIndex);
            });
        });
    
        showSlide(currentIndex);