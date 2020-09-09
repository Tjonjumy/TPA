function Archive(){
    var temprature=null;
    var archiver=[];
    Object.defineProperty(this,'temprature',{
  	    get(){
            console.log('Get !!!');
            return temprature;
        },
        set(value){
            temprature=value;
            archiver.push({val:temprature});
    	} 
    });
	this.getArchive=function(){
    	return archiver;
    }
}
var arc=new Archive();
arc.temprature;
arc.temprature=20;
arc.temprature=30;
let a=arc.getArchive();
console.log(a);

/* rebuild methods of array */

/* Array.map1() */
const array1 = [1, 4, 9, 16];
Array.prototype.map1=function(cb){
  	let l=this.length;
  	let arr=[];
	for(let i=0;i<l;i++){
    	let e=cb(this[i]);
      	arr.push(e);
    }
  	return arr;
};
const map1 = array1.map1(function(x){
  return x * 2;
});
for(index in array1 ){
    console.log(index,array1.hasOwnProperty(index));
}
console.log(map1);
console.log(array1);

let courses=['Js','PHP','Python'];
let htmls=courses.map(function(course){
    return '<h2>'+course+'</h2>';
});
console.log(htmls.join(''));
let text="";
text=window.innerWidth;
function myFunction(){
    this.innerHTML=text;
}

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
/* close menu and layer when click item on menu */
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

    /* silde bar */
let sliderBar=document.querySelectorAll('.slider-bar li');
console.log(sliderBar);

document.getElementById('next-btn').addEventListener("click",()=>console.log(distance));
document.getElementById('back-btn').addEventListener("click",()=>console.log(distance));