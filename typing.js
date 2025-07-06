const typeInterval = 75;

async function sleep(interval) {
    return await new Promise(resolve => setTimeout(resolve, interval));
}

async function type(container) {
    const text = container.textContent;
    container.textContent = '';
  
    for (const char of text) {
        container.textContent += char;
        await sleep(typeInterval);
    }
  
    container.classList.add('blink');
    syncBlink();
}

async function syncBlink() {
    const arrElBlink = document.querySelectorAll('.blink');
    arrElBlink.forEach(el => el.classList.remove('blink'));
    
    await sleep(typeInterval * 2);
    arrElBlink.forEach(el => el.classList.add('blink'));
}

const containers = document.querySelectorAll('.typewriter');
containers.forEach(type);
