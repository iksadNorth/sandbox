const toast = document.getElementById('toast');

async function sleep(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    });
}

async function showToast(message = '', duration = 3000) {
    toast.textContent = message;
    toast.classList.add('show');

    // duration 후에 다시 올라가도록
    await sleep(duration);
    hideToast();
}

function hideToast() {
    toast.classList.remove('show');
}

window.alert = showToast;
