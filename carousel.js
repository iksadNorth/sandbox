const carousel = document.querySelector('.carousel');

// 새로운 래퍼 div 생성
const track = document.createElement('div');
track.classList.add('track');

// 버튼 생성
const prevBtn = document.createElement('button');
const nextBtn = document.createElement('button');

prevBtn.className = 'carousel-btn prev';
nextBtn.className = 'carousel-btn next';

prevBtn.textContent = '‹';
nextBtn.textContent = '›';

// 기존 자식 요소들을 모두 track 안으로 이동
while (carousel.firstChild) {
  track.appendChild(carousel.firstChild);
}

// track을 carousel 안에 삽입
carousel.appendChild(track);

// carousel 앞뒤에 삽입
carousel.insertAdjacentElement('afterbegin', prevBtn);
carousel.insertAdjacentElement('beforeend', nextBtn);

(function() {
    let index = 0;
    const slides = document.querySelectorAll('.track > *');

    document.querySelector('.next').addEventListener('click', () => {
        index = (index + 1) % slides.length;
        track.style.transform = `translateX(-${index * 100}%)`;
    });

    document.querySelector('.prev').addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length;
        track.style.transform = `translateX(-${index * 100}%)`;
    });
})();