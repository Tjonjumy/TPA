
/* function reponsive for Menu*/
function open_menu(){
    document.getElementById('layer2').style.left="0";  
}
function close_menu(){
    document.getElementById('layer2').style.left="-320px";  
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
document.querySelectorAll('.rps ul li').forEach(item=>
    {item.addEventListener("click",close_menu)});
document.querySelectorAll('.rps ul li').forEach(item=>
    {item.addEventListener("click",close_layer)});

    // Open-Close sub-menu course reponsive
var rpsMenu=document.getElementsByClassName('rps-nav')[0];
var rpsSubmenu = rpsMenu.getElementsByClassName('submenu-rps')[0];

rpsSubmenu.parentElement.removeEventListener("click",close_menu);
rpsSubmenu.parentElement.removeEventListener("click",close_layer);
rpsSubmenu.parentElement.onclick =function(){
    if(rpsSubmenu .style.display=="block"){
        rpsSubmenu .style.display="none";
    }
    else{
        rpsSubmenu .style.display="block";
    }
}
// silde bar 
    let sliderBar=document.querySelectorAll('.slider-bar li');
// Carousel Silder
let carouselSlider=document.querySelector('.carousel-slider');
let carouselImg=document.querySelectorAll('.carousel-slider a img');
const size=carouselSlider.clientWidth;
let distance=0;

function slide_next(){
    if(distance==-2*size){ //
        distance=size;
    }
    distance-=size;
    
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


/* Vlidation form */

function Validator (options) {
    var formElement=document.querySelector(options.form);// Lấy element của form cần validate
    var selectorRules = {};
    if(formElement){
        //console.log(options.rules);
        // Lặp qua mỗi rule, lắng nghe và xử lí sự kiện
        options.rules.forEach(function(rule){
            var inputElement = formElement.querySelector(rule.selector);
            
            if(inputElement){
                if(Array.isArray(selectorRules[rule.selector])){
                    selectorRules[rule.selector].push(rule.test);
                }
                else{
                    selectorRules[rule.selector]=[rule.test];
                }
                var rules = selectorRules[rule.selector];
                var errorOutput=inputElement.parentElement.querySelector(options.errorSelector);
                inputElement.onblur = function(){
                    //var errorMessage=rule.test(inputElement.value);
                    validate(rules,inputElement);
                    //  console.log(rules[0](inputElement.value));
                }
                inputElement.onfocus = function(){
                    errorOutput.innerText='';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
        });
        console.log(selectorRules);
         var submitElement = document.getElementById('send-mess');
         // submit function
         var dataInput={};
         submitElement.onclick = function(){
            var isOK = true;
            for(key in selectorRules){
                 let rules=selectorRules[key];
                 let inputElement = formElement.querySelector(key);
                 if(!validate(rules,inputElement)){
                     isOK=false;
                 }
                 else{
                    dataInput[key]=inputElement.value;
                 }
             }  
             if(isOK){
                 console.log('all is ok');
                 // Get Name and Email into message-alert-box
                var messageAlertBox=document.querySelectorAll('.alert-box .message-alert');
                //messageAlertBox[0].innerHTML="Cảm ơn "+ dataInput['#fname']+" đã để lại tin nhắn";
                messageAlertBox[0].innerHTML=`Cảm ơn ${dataInput['#fname'].toUpperCase()} đã để lại tin nhắn.`;
                messageAlertBox[1].innerHTML=`Chúng tôi sẽ sớm liên hệ với bạn qua email: ${dataInput['#email']}`;
                console.log(dataInput);
                document.getElementById('alert-box').style.display="block"; 
                document.getElementById('alert-box').style.top="50%";     
             }
         }      

        // Hàm thực hiện validate
        function validate(rules,inputElement){
            //var errorOutput = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
            var errorOutput=inputElement.parentElement.querySelector(options.errorSelector);
            var isTrue=true;
            for(let i=0;i<rules.length;i++){
                var errorMessage = rules[i](inputElement.value);
                if(errorMessage){
                    errorOutput.innerText=errorMessage;
                    inputElement.parentElement.classList.add('invalid');
                    isTrue=false;
                    break;
                }   
                else{
                    errorOutput.innerText='';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }  
            return isTrue;
        }
    }
}
// Định nghĩa rule
// Nguyên tắc của các rules:
// 1. Khi có lỗi => Trả ra message lỗi
// 2. Khi hợp lệ => Không trả ra cái gì cả (undefined)
Validator.isRequired = function(selector,message){
    return {
        selector:selector, 
        test: function(value){
            return value ? undefined : message;
        }
    };
}
Validator.isEmail = function(selector,message){
    return {
        selector:selector,
        test: function(value){
            var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return regex.test(value) ? undefined : message;
        }
    }

}
Validator.isPhone = function(selector,message){
    return {
        selector:selector,
        test: function(value){
            var regex = /^\d{10}$/;
            return regex.test(value) ? undefined : message;
        }
    }
}
// Đối tượng mong muốn
Validator({
    form:'#form-1',
    formGroupSelector: '.form-group',
    errorSelector: '.form-message',
    rules:  [
            Validator.isRequired('#fname','Vui lòng nhập danh tính'),
            Validator.isRequired('#email','Trường này là bắt buộc'),
            Validator.isEmail('#email','Vui lòng nhập email đúng'),
            Validator.isRequired('#phone_number','Trường này là bắt buộc'),
            Validator.isPhone('#phone_number','Vui lòng nhập đúng số điện thoại'),
            ]
});

// Close Alert-Box
document.getElementById('closeAlertBox').onclick = function(){
    //document.getElementById('alert-box').style.display="none";
    document.getElementById('alert-box').style.top="150%";
}   
var alertBox=document.getElementById('alert-box');
var sendMsg =document.getElementById('send-mess');
window.addEventListener("click", function(event) {
     if (event.target !==alertBox && event.target !==sendMsg && document.getElementById('alert-box').style.top=="50%") {
	document.getElementById('alert-box').style.top="150%";		
    }
});
