let hour = document.querySelector(".hour");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let ampm = document.querySelector(".ampm");




function clock(){

    let now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    let amPm = h >= 12 ? "PM" : "AM";
    ampm.innerText = amPm;

    const hRotation = h * 30;
    const mRotation = m * 6;
    const sRotation = s * 6;


    hour.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

    console.log(sRotation);
};

setInterval(function () {
    clock();
}, 1000);


