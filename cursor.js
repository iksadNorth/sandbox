const [ min_threshold, max_threshold ] = [ 2, 5000 ];
const [ UnExistedX, UnExistedY ] = [ -10000, -10000 ];
const speed = 0.05;

// 속성 getter, setter
function getProp(attr) {
    return getComputedStyle(document.documentElement).getPropertyValue(attr);
}
function setProp(attr, value) {
    document.documentElement.style.setProperty(attr, value);
}

// 커서 움직임 포착
document.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;

    // 실시간 마우스 좌표도 CSS 변수로 업데이트
    setProp('--mouse-x', `${targetX}px`);
    setProp('--mouse-y', `${targetY}px`);
});

// 마우스가 브라우저 창 밖으로 나가면 숨김
document.addEventListener('mouseleave', () => {
    setProp('--mouse-x', `${UnExistedX}px`);
    setProp('--mouse-y', `${UnExistedY}px`);
});
  
// 창 전환 시에도 숨김 처리 (윈도우 포커스 기준)
window.addEventListener('blur', () => {
    setProp('--mouse-x', `${UnExistedX}px`);
    setProp('--mouse-y', `${UnExistedY}px`);
});

// 커서 관성 부여
animate();
function animate() {
    const targetX = parseFloat(getProp('--mouse-x')) || 0;
    const targetY = parseFloat(getProp('--mouse-y')) || 0;
    let inertiaX = parseFloat(getProp('--inertia-x')) || 0;
    let inertiaY = parseFloat(getProp('--inertia-y')) || 0;

    const dx = targetX - inertiaX;
    const dy = targetY - inertiaY;

    if ( min_threshold <= Math.abs(dx) && Math.abs(dx) < max_threshold ) {
        inertiaX += dx * speed;
    } else {
        inertiaX = targetX;
    }
    
    if ( min_threshold <= Math.abs(dy) && Math.abs(dy) < max_threshold ) {
        inertiaY += dy * speed;
    } else {
        inertiaY = targetY;
    }

    // 관성 좌표 CSS 변수 업데이트
    setProp('--inertia-x', `${inertiaX}px`);
    setProp('--inertia-y', `${inertiaY}px`);

    requestAnimationFrame(animate);
}
