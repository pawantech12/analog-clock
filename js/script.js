const deg = 6;
const hr = document.getElementById("hour");
const min = document.getElementById("minute");
const sec = document.getElementById("second");

setInterval(() => {
    let day = new Date();
    let hh = day.getHours()*30;
    let mm = day.getMinutes()*deg;
    let ss = day.getSeconds()*deg;

    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    min.style.transform = `rotateZ(${(mm)}deg)`;
    sec.style.transform = `rotateZ(${(ss)}deg)`;
})