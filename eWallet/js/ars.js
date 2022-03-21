'use strict'
document.addEventListener('DOMContentLoaded',()=>{ 
const butntonSignIn = document.querySelector('#button-clik-size');
const modal = document.querySelector('.modal');
const burger = document.querySelectorAll('.header_menu'); 
const modPrem = document.querySelector('.modal-prem')


function openPrem(){
    modPrem.classList.remove('none')
}
setTimeout(openPrem,6000)
function closeModal(mod){
    burger.forEach((item)=>{
        item.addEventListener('click',()=>{ 
            mod.classList.add('none')
        })
    })
    
}
closeModal(modal);
closeModal(modPrem);


butntonSignIn.addEventListener('click',() =>{
  
    modal.classList.remove('none')
    
})

const dedline = '2022-05-13'
function getTimeRemaining(endTime){
  const t = Date.parse(endTime) - Date.parse(new Date());
  const days = Math.floor(t/1000/60/60/24);
  
  const hours = Math.floor((t/(1000*60*60))%24);
  const minutes = Math.floor((t/(1000*60))%60);
  const seconds = Math.floor((t/1000)%60)
 
 
 
  return{
    total:t,
    days:days,
    hours: hours,
    minutes:minutes,
    seconds:seconds
  }
}
 
function setClock(selector,endTime){
  const timer = document.querySelector(selector);
  const days = timer.querySelector('#days');
  
  const hours = timer.querySelector('#hours');
  const minutes = timer .querySelector('#minutes');
  const seconds = timer.querySelector('#seconds');
  updateCLock()
 
  function addZero(num){
    if(num>=0 && num< 10){
      return`0${num}`
    }
    else {
      return num
    }
  }
  const setinterval = setInterval(updateCLock,1000);
  function updateCLock(){
    const t = getTimeRemaining(endTime);
    days.innerHTML = addZero(t.days);
    hours.innerHTML =addZero(t.hours);
    minutes.innerHTML = addZero(t.minutes);
    seconds.innerHTML = addZero(t.seconds);
 
    if(t.total<=0){
      clearInterval(setinterval);
       
    }
  }
}
setClock('.timer', dedline);

let persName = localStorage.getItem('name', 1);
const btnGuest = document.querySelector('#myBtn');
btnGuest.innerHTML= persName;

if (persName == ''){
  btnGuest.innerHTML= 'Guest';
}

let persSurname = localStorage.getItem('surname', 2);
const surnameMod  = document.querySelector('#surname-mod');
surnameMod.innerHTML = persSurname;

let persMail = localStorage.getItem('e-mail', 3);
const mailMod = document.querySelector('#mail-mod');
mailMod.innerHTML = persMail;


let persPhone = localStorage.getItem('phone', 4);
const phoneMod = document.querySelector('#phone-mod');
phoneMod.innerHTML = persPhone;
var guest = document.getElementById('myModal');


var btn1 = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


btn1.onclick = function() {
    guest.style.display = "block";
}


span.onclick = function() {
    guest.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == guest) {
        guest.style.display = "none";
    }
}


const nameMod = document.querySelector('#name-mod');
nameMod.innerHTML = persName;



})