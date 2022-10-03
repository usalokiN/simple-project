const column = document.querySelectorAll('.services__item');
const links = document.querySelectorAll('.footer-link');

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