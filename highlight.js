// 하이라이트 넣기
function highlightText(container, word) {
    const regex = new RegExp(`(${word})`, 'gi');
    container.innerHTML = container.textContent.replace(regex, `<span class="highlight">$1</span>`);
}
// 하이라이트 제거
function removeHighlights(container) {
    const highlights = container.querySelectorAll('span.highlight');
    highlights.forEach((span) => {
        const textNode = document.createTextNode(span.textContent);
        span.replaceWith(textNode);
    });
}

// 하이라이트 적용 예시
const targetHighLight = document.querySelector('span:nth-child(2)');
highlightText(targetHighLight, 'lighted')
setTimeout(() => {
    removeHighlights(targetHighLight);
}, 1000);