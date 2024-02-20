const playButton = document.getElementById('playButton');

//playButton.addEventListener('click', () => {});

// Adicione aqui a lógica para reiniciar o botão e parar a música quando necessário
// Adicione este código ao seu arquivo script.js

const photos = document.querySelectorAll('.photo');

// Remove a lógica de deslocamento vertical das fotos no script.js
window.addEventListener('load', () => {
    photos.forEach((photo, index) => {
        setTimeout(() => {
            photo.style.opacity = '1';
            if (index % 2 === 0) {
                photo.style.animation = 'moveAndRotateEven 1s ease forwards';
            } else {
                photo.style.animation = 'moveAndRotate 1s ease forwards';
            }
        }, index * 2000); // Ajuste o intervalo conforme necessário
    });
});

var lyricElements = document.querySelectorAll('.lyrics h1, .lyrics h2');
var currentElementIndex = 0;
var interval;
var speed = 70;

function writeText(element) {
    var text = element.textContent.trim(); // Obtém o texto do elemento
    var currentLetterIndex = 0;
    var interval = setInterval(function() {
        if (currentLetterIndex <= text.length) {
            var partialText = text.substring(0, currentLetterIndex);
            element.textContent = partialText;
            currentLetterIndex++;
        } else {
            clearInterval(interval);
        }
    }, speed);
}

window.addEventListener('load', function() {
    lyricElements.forEach(function(element) {
        writeText(element);
    });
});













