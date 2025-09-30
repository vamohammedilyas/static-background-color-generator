const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const generateBtn = document.getElementById('generateBtn');
const randomBtn = document.getElementById('randomBtn');
const preview = document.getElementById('preview');
const cssCode = document.getElementById('cssCode');
const copyBtn = document.getElementById('copyBtn');

// Generate gradient based on selected colors
generateBtn.addEventListener('click', () => {
    const gradient = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    preview.style.background = gradient;
    cssCode.value = `background: ${gradient};`;
});

// Generate random gradient
randomBtn.addEventListener('click', () => {
    const randomColor1 = `#${Math.floor(Math.random()*16777215).toString(16).padStart(6,'0')}`;
    const randomColor2 = `#${Math.floor(Math.random()*16777215).toString(16).padStart(6,'0')}`;
    color1.value = randomColor1;
    color2.value = randomColor2;
    const gradient = `linear-gradient(to right, ${randomColor1}, ${randomColor2})`;
    preview.style.background = gradient;
    cssCode.value = `background: ${gradient};`;
});

// Copy CSS to clipboard
copyBtn.addEventListener('click', () => {
    cssCode.select();
    cssCode.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(cssCode.value)
        .then(() => alert("CSS code copied!"))
        .catch(() => alert("Failed to copy!"));
});
