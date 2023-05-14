import Animalese from '../external/animalese.js';

var synth = new Animalese('animalese.wav', function () {
});

function generateWav(text) {
    return synth.Animalese(text, false, 1.0);
}

function preview(text) {
    var audio = new Audio();
    audio.src = generateWav(text);
    audio.play();
}

export {generateWav, preview};
