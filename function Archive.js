
/* Action with Menu on mobile */
var sideMenu=document.getElementById('layer2');
var layer1=document.getElementById('layer1')
function action_Menu(){
    var sideMenuLeft=window.getComputedStyle(sideMenu).getPropertyValue('left');
    if(sideMenuLeft=='-320px'){
        sideMenu.style.left='0';        // Open Menu
        layer1.style.display="block";
    }
    else{
        console.log('bug here');
        sideMenu.style.left='-320px';  // Close Menu
        layer1.style.display="none";
    }
}

document.getElementById('idbar').addEventListener("click",action_Menu);
document.getElementById('idclose').addEventListener("click",action_Menu);
document.getElementById('layer1').addEventListener("click",action_Menu);

/* close menu and layer1 when click each item on menu */
document.querySelectorAll('.rps ul li').forEach(item=>
    {item.addEventListener("click",action_Menu)});

// Open-Close sub-menu course reponsive
var rpsMenu=document.querySelector('.rps-nav');
var rpsSubmenu = rpsMenu.querySelector('.submenu-rps');
rpsSubmenu.parentElement.removeEventListener("click",action_Menu);
rpsSubmenu.parentElement.removeEventListener("click",action_Menu);
rpsSubmenu.parentElement.onclick =function(){
    if(rpsSubmenu .style.display=="block"){
        rpsSubmenu .style.display="none";
    }
    else{
        rpsSubmenu .style.display="block";
    }
}

/* Carousel Silider */
let sliderBar=document.querySelectorAll('.slider-bar li');
let carouselContainer=document.querySelector('.slider-container');
let sliders=document.querySelector('.sliders');
let carouselImg=document.querySelectorAll('.sliders a img');
const size=carouselContainer.clientWidth;
sliders.style.width=`${size*carouselImg.length}px`;
let idx=0;
sliderBar[idx].style.background="red";
function slide_next(){
    if(idx<carouselImg.length-1){
        idx++;
    }
    else{
        idx=0;
    }
    sliders.style.transform=`translateX(${-idx*size}px)`;
    for(let i=0;i<sliderBar.length;i++){
        sliderBar[i].style.background="#eee";
    }
    sliderBar[idx].style.background="red";  
}
function slide_back(){
    if(idx>0){
        idx--;
    }
    else{
        idx=carouselImg.length-1;
    }
    sliders.style.transform=`translateX(${-idx*size}px)`;
    for(let i=0;i<sliderBar.length;i++){
        sliderBar[i].style.background="#eee";
    }
    sliderBar[idx].style.background="red";  
}
let autoSlide = setInterval(slide_next,1500);
function stop_slider(){
    clearInterval(autoSlide);
}
document.getElementById('next-btn').addEventListener("click",stop_slider);
document.getElementById('next-btn').addEventListener("click",slide_next);
document.getElementById('back-btn').addEventListener("click",stop_slider);
document.getElementById('back-btn').addEventListener("click",slide_back);


/* Vlidation form  */
function Validator (options) {
    var formElement=document.querySelector(options.form);// Lấy element của form cần validate
    var selectorRules = {};
    if(formElement){
        //console.log(options.rules);
        // Looping through each rule, listening and handling event
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
	    
         // send message
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

        // function to validate
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
// Defines rule
// Rules:
// 1. when have Error => Return Error Message
// 2. When valid => Return undefined)
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
// Target Object 
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

/* Close Alert-Box  */
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
