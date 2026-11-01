document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. AMENITIES LIVE SEARCH FILTER
    // ==========================================
    const searchInput = document.getElementById('amenities-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            const cards = document.querySelectorAll('.home-card');

            cards.forEach(card => {
                const text = card.textContent.toLowerCase();
                if (text.includes(query)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // ==========================================
    // 2. DYNAMIC BOOKING & RATE CALCULATOR
    // ==========================================
    const checkInInput = document.getElementById('check-in');
    const checkOutInput = document.getElementById('check-out');
    const totalNightsSpan = document.getElementById('total-nights');
    const totalCostSpan = document.getElementById('total-cost');
    const proceedBtn = document.getElementById('proceed-booking-btn');

    const NIGHTLY_RATE = 850;

    function calculateTotal() {
        if (checkInInput && checkOutInput && checkInInput.value && checkOutInput.value) {
            const checkInDate = new Date(checkInInput.value);
            const checkOutDate = new Date(checkOutInput.value);

            const timeDiff = checkOutDate - checkInDate;
            const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

            if (daysDiff > 0) {
                if (totalNightsSpan) totalNightsSpan.textContent = daysDiff;
                if (totalCostSpan) totalCostSpan.textContent = (daysDiff * NIGHTLY_RATE).toLocaleString();
            } else {
                if (totalNightsSpan) totalNightsSpan.textContent = '0';
                if (totalCostSpan) totalCostSpan.textContent = '0';
            }
        }
    }

    if (checkInInput && checkOutInput) {
        checkInInput.addEventListener('change', calculateTotal);
        checkOutInput.addEventListener('change', calculateTotal);
    }

    if (proceedBtn) {
        proceedBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (!checkInInput.value || !checkOutInput.value) {
                alert('Please select valid check-in and check-out dates before booking.');
                return;
            }
            alert('Booking details captured! Redirecting to contact inquiry form...');
            window.location.href = 'contact.html';
        });
    }

    // ==========================================
    // GALLERY LIGHTBOX MODAL WITH NEXT/PREV
    // ==========================================
    const galleryImages = document.querySelectorAll('.gallery-grid img');
    if (galleryImages.length > 0) {
        let currentIndex = 0;

        // Create lightbox container dynamically
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox-modal';
        lightbox.style.cssText = 'display:none; position:fixed; z-index:9999; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.85); justify-content:center; align-items:center;';
        
        const lightboxImg = document.createElement('img');
        lightboxImg.style.cssText = 'max-width:80%; max-height:80%; border-radius:8px; box-shadow:0 0 20px rgba(0,0,0,0.5); object-fit:contain;';
        
        // Navigation buttons
        const prevBtn = document.createElement('button');
        prevBtn.innerHTML = '&#10094;';
        prevBtn.style.cssText = 'position:absolute; left:20px; background:transparent; color:white; border:none; font-size:3rem; cursor:pointer; padding:10px; z-index:10000;';

        const nextBtn = document.createElement('button');
        nextBtn.innerHTML = '&#10095;';
        nextBtn.style.cssText = 'position:absolute; right:20px; background:transparent; color:white; border:none; font-size:3rem; cursor:pointer; padding:10px; z-index:10000;';

        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '&times;';
        closeBtn.style.cssText = 'position:absolute; top:15px; right:25px; background:transparent; color:white; border:none; font-size:3rem; cursor:pointer; z-index:10000;';

        lightbox.appendChild(prevBtn);
        lightbox.appendChild(lightboxImg);
        lightbox.appendChild(nextBtn);
        lightbox.appendChild(closeBtn);
        document.body.appendChild(lightbox);

        function showImage(index) {
            currentIndex = index;
            lightboxImg.src = galleryImages[currentIndex].src;
            lightbox.style.display = 'flex';
        }

        galleryImages.forEach((img, index) => {
            img.style.cursor = 'pointer';
            img.addEventListener('click', () => {
                showImage(index);
            });
        });

        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
            lightboxImg.src = galleryImages[currentIndex].src;
        });

        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            currentIndex = (currentIndex + 1) % galleryImages.length;
            lightboxImg.src = galleryImages[currentIndex].src;
        });

        closeBtn.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });
    } 

    // ==========================================
    // 4. CONTACT FORM VALIDATION
    // ==========================================
    const contactForm = document.querySelector('form:not(#booking-calculator-form)');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            if (name && email && message) {
                if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
                    alert('Please fill in all required fields before submitting.');
                    return;
                }
            }
            alert('Thank you! Your message has been sent successfully to Buffalo\'s BnB.');
            contactForm.reset();
        });
    }

});