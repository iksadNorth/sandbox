const typeInterval = 75;

function type(container) {
    const text = container.textContent;
    container.textContent = '';
    text.split('').forEach((char, i) => {
        setTimeout(() => {
            container.textContent += char;
        }, typeInterval * i);
    });
    
    setTimeout(() => {
        container.classList.add('blink');
        syncBlink();
    }, 0);
}

function syncBlink() {
    const arrElBlink = document.querySelectorAll('.blink');
    arrElBlink.forEach(el => el.classList.remove('blink'));
    
    setTimeout(() => {
        arrElBlink.forEach(el => el.classList.add('blink'));
    }, 0);
}

const containers = document.querySelectorAll('.typewriter');
containers.forEach(type);
