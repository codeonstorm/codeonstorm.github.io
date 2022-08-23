"use strict";
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray     =   ["Hello! My self ANKIT KUMAR and i am a PHP and PYTHON developer, I have 2 year of working experiance"];
const typingDelay   =   200;
const erasingDelay  =   100;
const newTextDelay  =   2000;
let textArrayIndex  =   0;
let charIndex       =   0;

function type(){
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    if(charIndex < textArray[textArrayIndex].length)
    {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else{
       cursorSpan.classList.remove("typing");
       setTimeout(erase, newTextDelay);
    }
}

function erase()
{
  if(charIndex > 0){
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  }
  else{
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
    if (textArray.length)
    setTimeout(type, typingDelay + 250);
})
