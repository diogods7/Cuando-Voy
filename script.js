const playButton = document.getElementById('playButton');
const audio = new Audio('music.mp3');
const photos = document.querySelectorAll('.photo');
const lyricElements = document.querySelectorAll('.lyrics h1, .lyrics h2');
const speed = 70;
const myPopup = new Popup({
    id: "my-popup",
    title: "Atenção!",
    content: `
        Aperte apenas uma vez no botão e aguarde...`,
    showImmediately: true,
    css: `
    .popup.my-popup .popup-content {
        background-color: rgba(0, 0, 0, 0.548) !important;
      }

    .popup.my-popup .popup-title, .popup.my-popup p {
        font-family: 'Tangerine', cursive !important;
        color: #fff !important;
    }
    
    .popup.my-popup .popup-close {
        color: var(--red) !important;
    }
    `
});

playButton.addEventListener('click', () => {
    playPhoto();
    playText();
    audio.play();
    setTimeout(showLyrics, 100);
});

const photoTimings = [20000, 30000, 40000, 49000, 60000, 70000, 79000, 89000, 117000, 127000, 136000, 146000];
const textTimings = [20000, 20000, 25000, 25000, 30000, 30000, 35000, 35000, 40000, 40000, 45000, 45000, 49000, 49000, 54000, 54000, 60000, 60000, 65000, 65000, 70000, 70000, 74500, 74500, 79000, 79000, 84000, 84000, 89000, 89000, 93000, 93000, 117000, 117000, 121000, 121000, 127000, 127000, 132000, 132000, 136000, 136000, 141000, 141000, 146000, 146000, 150000, 150000];

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