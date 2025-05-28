document.addEventListener("DOMContentLoaded", function(){

    let timeout;
    let timeoutAppear;
    const menuContainer = document.querySelector(".menuContainer");
    const menuToggle = document.querySelector("#menu-toggle");
    const navLinks=document.querySelector("#nav-links");
    let lastScrollY= window.scrollY;

    window.addEventListener("scroll", function(){
        const scrollPosition = window.scrollY;
        const opacity = Math.max(1 - scrollPosition /500,0);
        menuContainer.style.opacity = opacity;

        clearTimeout(timeout);
        timeout = setTimeout(function(){
            if(window.scrollY === scrollPosition){
                menuContainer.style.opacity =1;
                menuContainer.classList.remove("hidden");
            };
        },500);

   
        if(scrollPosition > lastScrollY){
            menuContainer.classList.add("hidden");
        }
        else{
            menuContainer.classList.remove("hidden");
        }

        lastScrollY = scrollPosition;
    });



    menuToggle.addEventListener("click", function(){
        navLinks.classList.toggle("active");
    });


    const bocadillos = document.querySelectorAll(".bocadillo");
    window.addEventListener("scroll", function(){
        const scrollPosition = window.scrollY;
        bocadillos.forEach(bocadillo => {
            const opacity = Math.max(1 - scrollPosition / 500,0);
            bocadillo.style.opacity = opacity;

            if(scrollPosition > lastScrollY && !bocadillo.classList.contains("appear")){
                bocadillo.classList.add("appear");
            }
        });

        clearTimeout(timeoutAppear);
        timeoutAppear = setTimeout(function(){
            bocadillos.forEach(bocadillo =>{
                if(!bocadillo.classList.contains("appear")){
                    bocadillo.style.opacity = 1;
                }
            });
        }, 200);
        lastScrollY = scrollPosition;
   });


   const botonArriba = document.querySelector(".botonArriba");
   window.addEventListener("scroll", function(){
        if (window.scrollY > 50){
            botonArriba.classList.add("show");
        }else{
            botonArriba.classList.remove("show");
        }  
   });

   botonArriba.addEventListener("click", function(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
   });
});
