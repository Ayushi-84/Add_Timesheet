function advancesrh(){
    document.getElementById("advanceSearch").style.display="flex";
    document.getElementById("advancesearchs").style.display="none";
    document.getElementsByClassName("Patentcards").style.height="98.5vh"
}
function closes(){
    document.getElementById("advanceSearch").style.display="none";
    document.getElementById("advancesearchs").style.display="flex"; 
}

var slideIndex = 1;
      showSlides(slideIndex);
      function plusSlides(n) {
         showSlides(slideIndex += n);
      }
      function currentSlide(n) {
         showSlides(slideIndex = n);
      }
      function showSlides(n) {
         var i;
         var slides = document.getElementsByClassName("mySlides");
         var dots = document.getElementsByClassName("dot");
         if (n > slides.length) {slideIndex = 1}
         if (n < 1) {slideIndex = slides.length}
         for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
         }
         for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
         }
         slides[slideIndex-1].style.display = "block";
         dots[slideIndex-1].className += " active";
      }

   function divided(){
      document.getElementById('hides').style.flexDirection="row";
      document.getElementById('hides').style.width="80%";
      document.getElementById('hides2').style.display="none";
      document.getElementById('claim').style.height="98vh";
      document.getElementById('claim').style.width="100%";
      document.getElementById('tytles').style.padding="1% 10% 5%";
      document.getElementById('slides').style.display="none";
      document.getElementById('slides1').style.display="flex";
      document.getElementById('close').style.width="68px";


   } 
   function divided1(){
      document.getElementById('hides').style.flexDirection="column";
      document.getElementById('slides1').style.display="none";
      document.getElementById('slides2').style.display="flex";
      
   }  
   function divided2(){
      document.getElementById('hides').style.flexDirection="column";
      document.getElementById('hides').style.width="50%";
      document.getElementById('hides2').style.display="flex";
      document.getElementById('claim').style.height="49vh";
      document.getElementById('slides2').style.display="none";
      document.getElementById('slides').style.display="flex";

   }

   // Query the element
const resizer = document.getElementById('dragMe');
const leftSide = resizer.previousElementSibling;
const rightSide = resizer.nextElementSibling;

// The current position of mouse
let x = 0;
let y = 0;

// Width of left side
let leftWidth = 0;
resizer.addEventListener('mousedown', mouseDownHandler);
// Handle the mousedown event
// that's triggered when user drags the resizer
const mouseDownHandler = function (e) {
    // Get the current mouse position
    x = e.clientX;
    y = e.clientY;
    leftWidth = leftSide.getBoundingClientRect().width;

    // Attach the listeners to `document`
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};

// Attach the handler


const mouseMoveHandler = function(e) {
   const dx = e.clientX - x;
   const dy = e.clientY - y;

   const newLeftWidth = ((leftWidth + dx) * 100) / resizer.parentNode.getBoundingClientRect().width;
   leftSide.style.width = `${newLeftWidth}%`;

   resizer.style.cursor = 'col-resize';
   document.body.style.cursor = 'col-resize';
   leftSide.style.userSelect = 'none';
   leftSide.style.pointerEvents = 'none';

   rightSide.style.userSelect = 'none';
   rightSide.style.pointerEvents = 'none';
};

const mouseUpHandler = function () {
   resizer.style.removeProperty('cursor');
   document.body.style.removeProperty('cursor');

   leftSide.style.removeProperty('user-select');
   leftSide.style.removeProperty('pointer-events');

   rightSide.style.removeProperty('user-select');
   rightSide.style.removeProperty('pointer-events');

   // Remove the handlers of `mousemove` and `mouseup`
   document.removeEventListener('mousemove', mouseMoveHandler);
   document.removeEventListener('mouseup', mouseUpHandler);
};