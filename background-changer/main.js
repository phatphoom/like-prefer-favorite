const change = document.getElementById("change");
const color = document.getElementById("color");
const body = document.body;


change.addEventListener("click",changeBG);

function changeBG(){
    const r1 = getrgbrand();
    const r2 = getrgbrand();
    const r3 = getrgbrand();
    const textcolor = `rgb(${r1},${r2},${r3})`
    body.style.backgroundColor = textcolor;
    color.innerHTML = textcolor;
}
function getrgbrand(){
    return Math.floor(Math.random()*256);
}