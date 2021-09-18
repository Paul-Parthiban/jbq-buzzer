const buzzer = document.getElementsByTagName("BODY")[0];
const timer = document.querySelector(".timer span");
var beep = document.getElementById("beep");
var buzzerBeep = document.getElementById("buzzer-beep")
let timerSecond = 30;


document.addEventListener("click", function(){
    buzzerBeep.play();

    timer.innerHTML = `${timerSecond}`;

    const countDown = setInterval(() => {
        timerSecond--;
        timer.innerHTML = `${timerSecond}`;

        if (timerSecond <= 0 || timerSecond < 1) {
            clearInterval(countDown)
            beep.play()
            setInterval(() => {
                timer.innerHTML = "30"
                this.location.reload()
            }, 3000)
        }
    }, 1000);
});
