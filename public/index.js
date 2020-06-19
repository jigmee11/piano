function changeValue() {
    document.getElementById("demo").innerHTML = ++value;
}

var timerInterval = null;

function start() {
    stop();
    value = 0;
    timerInterval = setInterval(changeValue, 1000);
}
var stop = function() {
    clearInterval(timerInterval);
}





const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']

const starter = () => {
    const keys = document.querySelectorAll('.key')
    const whiteKeys = document.querySelectorAll('.key.white')
    const blackKeys = document.querySelectorAll('.key.black')
    keys.forEach(key => {
        key.addEventListener('click', () => playNote(key))

    })


    function checkTime(i) {
        if (i < 10) { i = "0" + i }; // add zero in front of numbers < 10
        return i;
    }
    document.addEventListener('keydown', e => {
        if (e.repeat) return
        const key = e.key
        const whiteKeyIndex = WHITE_KEYS.indexOf(key)
        const blackKeyIndex = BLACK_KEYS.indexOf(key)

        if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
        if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
    })

    function playNote(key) {
        const noteAudio = document.getElementById(key.dataset.note)
        noteAudio.currentTime = 0
        noteAudio.play()
        key.classList.add('active')
        noteAudio.addEventListener('ended', () => {
            key.classList.remove('active')
        })
    }

}