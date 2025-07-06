document.querySelectorAll('.carousel').forEach((carousel) => {
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

    // 3. carousel wrap
    carousel.parentNode.insertBefore(wrapper, carousel);
    wrapper.appendChild(prevBtn);
    wrapper.appendChild(carousel);
    wrapper.appendChild(nextBtn);

    // 4. 슬라이드 추적 및 동작 설정
    let index = 0;
    const slides = carousel.children;
    const total = slides.length;

    // 트랙처럼 보이게 설정 (필요 시)
    carousel.style.display = 'flex';
    carousel.style.transition = 'transform 0.3s ease';
    Array.from(slides).forEach(slide => {
        slide.style.flex = '0 0 100%';
    });

    // 버튼 이벤트
    nextBtn.addEventListener('click', () => {
        index = (index + 1) % total;
        carousel.style.transform = `translateX(-${index * 100}%)`;
    });

    prevBtn.addEventListener('click', () => {
        index = (index - 1 + total) % total;
        carousel.style.transform = `translateX(-${index * 100}%)`;
    });
});