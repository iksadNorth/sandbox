function wrappWithDiv(el) {
    const wrapper = document.createElement("div");
    Array.from(el.childNodes).forEach(child => {
        wrapper.appendChild(child);
    });
    el.appendChild(wrapper);
}

(function() {
    const containers = document.querySelectorAll('.box');
    containers.forEach(wrappWithDiv);
})();
