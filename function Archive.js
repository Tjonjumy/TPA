
/* function reponsive */
function open_menu(){
    document.getElementById('layer2').style.left="0";  
}
function close_menu(){
    if(window.innerWidth>768){
        document.getElementById('layer2').style.left="-520px";  
    }
    else{
        document.getElementById('layer2').style.left="-320px";  
    }
}
function open_layer(){
    document.getElementById('layer1').style.display="block";  
}
function close_layer(){
    document.getElementById('layer1').style.display="none";   
}
document.getElementById('idbar').addEventListener("click",open_menu);
document.getElementById('idclose').addEventListener("click",close_menu);

document.getElementById('idbar').addEventListener("click",open_layer);
document.getElementById('layer1').addEventListener("click",close_menu);
document.getElementById('layer1').addEventListener("click",close_layer);
document.getElementById('idclose').addEventListener("click",close_layer);

/* Event Capturing 
document.getElementById('layer2').addEventListener("click",close_menu,true);
document.getElementById('layer2').addEventListener("click",close_layer,true); */

/* Close menu and layer when click item on menu */
document.querySelectorAll('.rps ul li a').forEach(item=>
    {item.addEventListener("click",close_menu)});
document.querySelectorAll('.rps ul li a').forEach(item=>
    {item.addEventListener("click",close_layer)});

    /* SLIDER IMAGE */
let carouselSlider=document.querySelector('.carousel-slider');
let carouselImg=document.querySelectorAll('.carousel-slider a img');
console.log(carouselImg);
let count=1;
const size=carouselSlider.clientWidth;console.log(size);
let distance=0;

function slide_next(){
    if(distance==-2*size){
        distance=size;
    }
    distance-=size;
    //console.log(distance);
    carouselSlider.style.transform='translateX('+ distance +'px)';
    if(distance==0){
        sliderBar[0].style.background="red";
        sliderBar[1].style.background="#eee";
        sliderBar[2].style.background="#eee";
    }
    if(distance==-size){
        sliderBar[0].style.background="#eee";
        sliderBar[1].style.background="red";
        sliderBar[2].style.background="#eee";
    }
    if(distance==-2*size){
        sliderBar[0].style.background="#eee";
        sliderBar[1].style.background="#eee";
        sliderBar[2].style.background="red";
    }
}
function slide_back(){
    if(distance==0){
        distance=-3*size;
    }
    distance+=size;
   // console.log(distance);
    carouselSlider.style.transform='translateX('+ distance +'px)';
    if(distance==0){
        sliderBar[0].style.background="red";
        sliderBar[1].style.background="#eee";
        sliderBar[2].style.background="#eee";
    }
    if(distance==-size){
        sliderBar[0].style.background="#eee";
        sliderBar[1].style.background="red";
        sliderBar[2].style.background="#eee";
    }
    if(distance==-2*size){
        sliderBar[0].style.background="#eee";
        sliderBar[1].style.background="#eee";
        sliderBar[2].style.background="red";
    }
}
let autoSlide = setInterval(slide_next,3000);
function stop_slider(){
    clearInterval(autoSlide);
}
document.getElementById('next-btn').addEventListener("click",stop_slider);
document.getElementById('next-btn').addEventListener("click",slide_next);
document.getElementById('back-btn').addEventListener("click",stop_slider);
document.getElementById('back-btn').addEventListener("click",slide_back);

    /* Silder bar */
let sliderBar=document.querySelectorAll('.slider-bar li');
console.log(sliderBar);

document.getElementById('next-btn').addEventListener("click",()=>console.log(distance));
document.getElementById('back-btn').addEventListener("click",()=>console.log(distance));
