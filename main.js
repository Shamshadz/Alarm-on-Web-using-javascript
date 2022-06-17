console.log('Alarm is Running..');

var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');

const setAlarm = document.getElementById('setAlarm');
setAlarm.addEventListener('click', Alarm);

function ringBell() {
    audio.play();
}

function Alarm (e) {
    e.preventDefault();

    const alarmInput = document.getElementById('alarmInput');
    let alarm = new Date(alarmInput.value);
    console.log(`Alarm is set For ${alarm}`);

    let now = new Date();
    let time = alarm - now;

    console.log(time);

    if(time>=0){
        setTimeout(() => {
            ringBell();
        }, time);
    }

}