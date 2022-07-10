console.log('Hello world');

setInterval(hello,1000)
setInterval(setClock,1000)
const secondHand= document.querySelector('[data-second]')
const minuteHand= document.querySelector('[data-minute]')
const hourHand= document.querySelector('[data-hour]')
 
const number = document.querySelector('.pee')

function hello(){
const date = new Date() 
return number.textContent = date.toLocaleTimeString();

 }
 
function setClock(){
  const currentDate = new Date()
  const secondRatio = currentDate.getSeconds()/60
  const minuteRatio =(secondRatio+ currentDate.getMinutes())/60
  const hourRatio = (minuteRatio+ currentDate.getHours())/12
  setRotation(secondHand,secondRatio )
  setRotation(minuteHand,minuteRatio)
  setRotation(hourHand,hourRatio)
}

setClock();
hello();

function setRotation(element, rotationRatio){
element.style.setProperty('--rotation',(rotationRatio * 360)+ 180)
}