function type(container) {
    const text = container.textContent;
    container.textContent = '';
    text.split('').forEach((char, i) => {
        setTimeout(() => {
            container.textContent += char;
    
            if (i === text.length - 1) {
                container.classList.add('blink');
            }
        }, 75 * i);
    });
}

const containers = document.querySelectorAll('.typewriter');
containers.forEach(type);
