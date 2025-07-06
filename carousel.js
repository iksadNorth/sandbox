const carousel = document.querySelector('.carousel');

// 1. wrapper 생성
const wrapper = document.createElement('div');
wrapper.classList.add('carousel-wrapper');

// 2. 버튼 생성
const prevBtn = document.createElement('button');
const nextBtn = document.createElement('button');

prevBtn.className = 'carousel-btn prev';
nextBtn.className = 'carousel-btn next';

prevBtn.textContent = '‹';
nextBtn.textContent = '›';

// 3. carousel 부모에 wrapper 삽입 → carousel 대체
carousel.parentNode.insertBefore(wrapper, carousel);
wrapper.appendChild(prevBtn);
wrapper.appendChild(carousel);
wrapper.appendChild(nextBtn);

(function() {
    let index = 0;
    const slides = document.querySelectorAll('.carousel > *');

    document.querySelector('.next').addEventListener('click', () => {
        index = (index + 1) % slides.length;
        carousel.style.transform = `translateX(-${index * 100}%)`;
    });

    document.querySelector('.prev').addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length;
        carousel.style.transform = `translateX(-${index * 100}%)`;
    });
})();