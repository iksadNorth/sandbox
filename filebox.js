const fileInput = document.querySelector('.form-input input[type="file"]');
const fileLabel = document.querySelector('.form-input:has(input[type="file"]) label');

function setFile(files) {
    if (files.length <= 0) return;
    const name = files[0].name;
    document.documentElement.style.setProperty('--after-text', `"${name}"`);
}

(function() {
    fileLabel.classList.add('fa-solid');
    fileLabel.classList.add('fa-upload');
})();

// 파일 선택 시 이름 표시
fileInput.addEventListener('change', (e) => {
    const files = e.target.files;
    setFile(files);
});

// 드래그 오버 시 스타일 변경
fileLabel.addEventListener('dragover', (e) => {
    e.preventDefault();
    fileLabel.classList.add('dragover');
});

// 드래그 오버 후 이탈 시 스타일 변경
fileLabel.addEventListener('dragleave', () => {
    fileLabel.classList.remove('dragover');
});

// 드롭 시 파일 처리
fileLabel.addEventListener('drop', (e) => {
    e.preventDefault();
    fileLabel.classList.remove('dragover');

    const files = fileInput.files = e.dataTransfer.files;
    setFile(files);
});