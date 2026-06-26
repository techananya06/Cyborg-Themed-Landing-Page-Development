// Mouse glow effect

document.addEventListener(
"mousemove",
(e)=>{


let x=e.clientX;

let y=e.clientY;



document.body.style.background =

`radial-gradient(circle at ${x}px ${y}px,#062a35,#020207)`;


}

);




// scroll animation


window.addEventListener(
"scroll",
()=>{


document.querySelector(".cyborg")
.style.transform =

`translateY(${window.scrollY*.2}px)`;


}

);