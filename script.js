window.addEventListener('DOMContentLoaded', () => {

    const column = document.querySelectorAll('.services__item'),
          links = document.querySelectorAll('.footer-link');

column.forEach(element => {
    element.addEventListener('mouseover', event => {
    element.style.backgroundColor = "#2d2d44";
    element.style.color = "#fff";
    element.style.transition = "color .1s ease-in-out, box-shadow 1s ease";
    element.style.boxShadow = "inset 0 -360px #2d2d44";

});
    element.addEventListener('mouseout', event => {
    element.style.backgroundColor = "#fff";
    element.style.color = "#2d2d44";
    element.style.boxShadow = "inset 0 0 #2d2d44";
});
});

links.forEach(e => {
    e.addEventListener('mouseover', event => {
        event.preventDefault();
        e.style.backgroundColor = "rgb(17, 159, 202)";
        e.style.borderRadius = "15%";
        
    });
    e.addEventListener('mouseout', event => {
        event.preventDefault();
        e.style.backgroundColor = "#2d2d44";
        e.style.transition = "5s else-in-out";
        
    });
});

//  timer
    const deadLine = '2022-12-30';

    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds;
        const t = Date.parse(endtime) - Date.parse(new Date());
        days = Math.floor (t / (1000 * 60 * 60 * 24)),
        hours = Math.floor (t / (1000 * 60 * 60) % 24),
        minutes = Math.floor (t / (1000 / 60) % 60),
        seconds = Math.floor ((t / 1000) % 60); 
    

    return {
        'total': t,
        'days': days,
        'hours': minutes,
        'seconds': seconds
        };
    }

function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
            days = document.querySelector('#days'),
            hours = document.querySelector('#hours'),
            minutes = document.querySelector('#minutes'),
            seconds = document.querySelector('#seconds');
            timeInterval = setInterval((updateClock), 1000);


            function updateClock() {
                const t = getTimeRemaining(endtime);
                days.innerHTML = (t.days);
                hours.innerHTML = (t.hours);
                minutes.innerHTML = (t.minutes);
                seconds.innerHTML = t.seconds;

                if (t.total <= 0) {
                    clearInterval(timeInterval)
                }
            }
        }
        setClock('.main-block__timer', deadLine);
});