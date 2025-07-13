const menu = document.getElementById('rightclick-menu');

document.addEventListener('contextmenu', (e) => {
    e.preventDefault(); // 기본 우클릭 메뉴 막기

    // 마우스 좌표를 CSS 변수로 설정
    document.documentElement.style.setProperty('--menu-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--menu-y', `${e.clientY}px`);

    // 메뉴 보이기
    menu.style.display = 'block';
});

document.addEventListener('click', (e) => {
    const isInside = menu.contains(e.target);
    if (isInside) return ;
    
    menu.style.display = 'none';
});

function handleClick(element) {
    alert(element.innerHTML);
}
