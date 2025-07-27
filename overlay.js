// 포커스 오버레이 상호작용
function popFocusOverlay(el) {
    const rect = el.getBoundingClientRect();
    const [x1, x2] = [rect.left-3, rect.right +3];
    const [y1, y2] = [rect.top -3, rect.bottom+3];
  
    // https://bennettfeely.com/clippy/
    const path = `
        polygon(
            0 0, 0 100%, 
            ${x1}px 100%,

            ${x1}px ${y1}px,
            ${x2}px ${y1}px,
            ${x2}px ${y2}px,
            ${x1}px ${y2}px,

            ${x1}px 100%,
            100% 100%, 100% 0
        )
    `;
    document.documentElement.style.setProperty('--mask-clip-path', path);
    document.documentElement.style.setProperty('--mask-display', 'block');
}
function removeFocusOverlay() {
    document.documentElement.style.setProperty('--mask-clip-path', '');
    document.documentElement.style.setProperty('--mask-display', 'none');
}

// 사용 예시
function popFocusInContext(seletor) {
    popFocusOverlay(document.querySelector(seletor));
    setTimeout(() => {
        removeFocusOverlay();
    }, 1000);
}
