// ------BURGER--MENU--------------------------------
const menuButton = document.querySelector(".header_burger");
const menuButton1 = document.querySelector(".header_nav");
const contentBody = document.querySelector("body");

menuButton.onclick = function () {
  menuButton.classList.toggle("active");
  menuButton1.classList.toggle("active");
  contentBody.classList.toggle("lock");
};
menuButton1.onclick = function () {
   menuButton.classList.remove("active");
   menuButton1.classList.remove("active");
   contentBody.classList.remove("lock");
 };


 // ------TYPING--EFFECT--------------------------------

var typingEffect = document.querySelector(".typetext");
 var text = "Junior Front-end Developer";
 var index = 0;
 var adding = true;

 function animation() {

  setTimeout( function() {

    typingEffect.innerText = text.slice(0,index);

    if (adding) {
      if (index > text.length) {
        adding = false;

        setTimeout( function() {
          animation();
        }, 2000)
        return;
      } 

      else {
        index ++;
      }
    } 

    else {
      if (index === 0) {
        adding = true;
      } 

      else {
        index --;
      }
    }
    animation();
  }, 120)

 }
 animation();

//  ----------------------------------------


