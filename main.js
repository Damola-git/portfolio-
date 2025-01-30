document.addEventListener('DOMContentLoaded', function() {

	var mastheadheight = document.querySelector('.ds-header').offsetHeight;
	//console.log(mastheadheight);
	document.querySelectorAll('.ds-banner, .ds-main-section').forEach(function(element) {
		element.style.marginTop = mastheadheight + 'px';
	});

	window.addEventListener('scroll', function() {
		if (window.scrollY >= 10) {
			document.querySelector('.ds-header').classList.add('ds-fixed-header');
		} else {
			document.querySelector('.ds-header').classList.remove('ds-fixed-header');
		}
	});

	
	window.dispatchEvent(new Event('scroll'));

});

const textLines = [
  "I'm Adedamola Adejumo, a FRONTEND DEVELOPER from",
  "Lagos, Nigeria."
];


  const typingElement = document.getElementById("typing-text");
const cursorSpan = document.querySelector(".cursor");


let lineIndex = 0;
let charIndex = 0;
let typingSpeed = 100; 
let lineBreakDelay = 800;
let currentText = ""; 

function typeWriter() {
  if (lineIndex < textLines.length) {
    if (charIndex < textLines[lineIndex].length) {

      typingElement.innerHTML = currentText + textLines[lineIndex].substring(0, charIndex + 1) + `<span class="cursor"></span>`;
      charIndex++;
      setTimeout(typeWriter, typingSpeed);
    } else {

      currentText += textLines[lineIndex] + "<br>";
      charIndex = 0;
      lineIndex++;
      setTimeout(typeWriter, lineBreakDelay);
    }
  } else {
   
    typingElement.innerHTML = currentText;
  }
}



/*  let lineIndex = 0;
  let charIndex = 0;
  let typingSpeed = 100; // Speed of typing
  let lineBreakDelay = 800; // Delay before typing the next line

  function typeWriter() {
    if (lineIndex < textLines.length) {
      if (charIndex < textLines[lineIndex].length) {
        typingElement.innerHTML += textLines[lineIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, typingSpeed);
      } else {
        typingElement.innerHTML += "<br>"; // Move to next line
        charIndex = 0;
        lineIndex++;
        setTimeout(typeWriter, lineBreakDelay);
      }
    }
  }*/

  typeWriter();
