window.onload = function(){
  document.getElementByClassName('close').onclick = function(){
    var v = document.getElementByClassName('promo');
    v.style.display = "none";
  };
};;
      
      
      
      
      window.addEventListener("scroll", function () {
        let header = document.querySelector("nav");
        let windowPosition = window.scrollY > 500;
        header.classList.toggle("scrolling-active", windowPosition);
      });
      const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})


var images = new Array();

function preloadImages(){

    for (i=0; i < preloadImages.arguments.length; i++){

         images[i] = new Image();

        images[i].src = preloadImages.arguments[i];

    }

}

preloadImages("logo.jpg", "main_bg.jpg", "body_bg.jpg", "header_bg.jpg");







