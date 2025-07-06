let inertiaX    = 0;
let inertiaY    = 0;
let targetX     = 0;
let targetY     = 0;
const threshold = 1;
const speed     = 0.05;

// 커서 움직임 포착
document.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;

    // 실시간 마우스 좌표도 CSS 변수로 업데이트
    document.documentElement.style.setProperty('--mouse-x', `${targetX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${targetY}px`);
});

// 마우스가 브라우저 창 밖으로 나가면 숨김
document.addEventListener('mouseleave', () => {
    document.documentElement.style.setProperty('--mouse-x', `-9999px`);
    document.documentElement.style.setProperty('--mouse-y', `-9999px`);
});
  
// 창 전환 시에도 숨김 처리 (윈도우 포커스 기준)
window.addEventListener('blur', () => {
    document.documentElement.style.setProperty('--mouse-x', `-9999px`);
    document.documentElement.style.setProperty('--mouse-y', `-9999px`);
});

// 커서 관성 부여
animate();
function animate() {
    const dx = targetX - inertiaX;
    const dy = targetY - inertiaY;

    if (Math.abs(dx) < threshold) {
        inertiaX = targetX;
    } else {
        inertiaX += dx * speed;
    }

    if (Math.abs(dy) < threshold) {
        inertiaY = targetY;
    } else {
        inertiaY += dy * speed;
    }

    // 관성 좌표 CSS 변수 업데이트
    document.documentElement.style.setProperty('--inertia-x', `${inertiaX}px`);
    document.documentElement.style.setProperty('--inertia-y', `${inertiaY}px`);

    requestAnimationFrame(animate);
}
