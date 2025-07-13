const n = 8;
const spinner = document.getElementById('spinner');

spinner.style.setProperty('--unit-degree', `${360 / n}deg`);
spinner.style.setProperty('--unit-tiktok', `${1 / n}s`);
spinner.style.setProperty('--radius', `20px`);

for (let i = 0; i < n; i++) {
    const span = document.createElement('span');
    span.style.setProperty('--i', i);
    spinner.appendChild(span);
}

function runSpin() {
    spinner.style.display = 'block';
}
function removeSpin() {
    spinner.style.display = 'none';
}

removeSpin();
