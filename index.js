function curAni(){

  
    document.addEventListener("mousemove",function(info){
      gsap.to(".cur",{
          left:info.x,
          top:info.y
          
      })
  })
  }
  curAni();



var cur = document.querySelector(".cur")
var boxes = document.querySelectorAll(".box")

boxes.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
      var att = elem.getAttribute("data-img");
      
      cur.style.width = "400px";
      cur.style.height = "250px";
      cur.style.borderRadius = "0";
      cur.style.mixBlendMode = "normal";
      cur.style.backgroundColor = "transparent";
  
      cur.style.backgroundImage = `url(${att})`;
      
      
    });
  
  
  
    elem.addEventListener("mouseleave",function(){
      cur.style.width = "15px";
      cur.style.height = "15px";
      cur.style.borderRadius = "50%";
      cur.style.mixBlendMode = "difference";
      cur.style.backgroundColor = "#EDBFFF";
      cur.style.backgroundImage = "none";
      
    })
  
  })