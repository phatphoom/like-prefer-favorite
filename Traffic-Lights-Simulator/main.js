const circles = document.querySelectorAll(".circle");
let active = 0;

setInterval(()=>{changelight()},1000);

function changelight(){
    circles[active].className = 'circle';
    active++;
    if(circles > 2){
        active = 0;
    }
    const current = circles[active];
    current.classList.add(current.getAttribute('color'));
}