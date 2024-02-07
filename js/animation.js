
//menu animation
const trigger  = document.querySelectorAll("nav li");

trigger.forEach((menu) => menu.addEventListener('click', toogle));

function toogle(){
    trigger.forEach((item) => item != this ? item.classList.remove('active') : null);

    if (this.classList != 'active') {
        this.classList.toggle(('active'));
    }
}




//hero animation

var tl = gsap.timeline({
    defaults: {
        opacity: 0,
        ease:"elastic",
        duration:1,
    }
})

tl.fromTo(".hero-left", {x:-200},{ opacity: 1,x:0},);
tl.fromTo(".hero-right" , {y:100}, {opacity:1, y:0, play:true, });
tl.fromTo(".chair", {scale:0}, {opacity:1, x:0, scale:1,})
tl.fromTo("nav", {x:0}, {opacity:1, })

//cards animation
ScrollReveal().reveal('.card-1', {  delay: 300});
ScrollReveal().reveal('.card-2', {  delay: 600});
ScrollReveal().reveal('.card-3', {  delay: 800});