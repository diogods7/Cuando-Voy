const playButton = document.getElementById('playButton');
const audio = new Audio('music.mp3');
const photos = document.querySelectorAll('.photo');
const lyricElements = document.querySelectorAll('.lyrics h1, .lyrics h2');
const speed = 70;

playButton.addEventListener('click', () => {
    playPhoto();
    playText();
    audio.play();
    setTimeout(showLyrics, 100);
});

const photoTimings = [0, 2000, 4000, 6000, 8000, 10000, 12000, 14000, 16000, 18000, 20000, 22000];
const textTimings = [0, 5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000];

function playPhoto() {
    console.log('foto');
    photos.forEach((photo, index) => {
        setTimeout(() => {
            photo.style.opacity = '1';
            if (index % 2 === 0) {
                photo.style.animation = 'moveAndRotateEven 1s ease forwards';
            } else {
                photo.style.animation = 'moveAndRotate 1s ease forwards';
            }
        }, photoTimings[index]);
    });
}

function playText() {
    lyricElements.forEach((element, index) => {
        setTimeout(() => {
            writeText(element);
            console.log(textTimings[index])
        }, textTimings[index]);
    });
}

function writeText(element) {
    var text = element.textContent.trim();
    var currentLetterIndex = 0;
    var interval = setInterval(function () {
        if (currentLetterIndex <= text.length) {
            var partialText = text.substring(0, currentLetterIndex);
            element.textContent = partialText;
            currentLetterIndex++;
        } else {
            clearInterval(interval);
        }
    }, speed);
}

function showLyrics() {
    lyricElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
        }, textTimings[index]);
    });
}