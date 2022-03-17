"use strict";
//Variables
const $wallpaper = document.getElementById("wallpapers"),
      $submit = document.getElementById("submit"),
      $inputEmail = document.getElementById("email"),
      $sections = document.querySelectorAll("section");

//Functions
const checkPattern = (value, pattern) =>{
    const expReg = new RegExp(pattern);
    expReg.test(value) ? window.location.href = "https://www.freecodecamp.org/email-submit" : alert("Check the email");
}
const openModal = () =>{
    const $btn = document.querySelector("#btnMenu"),
          $modal = document.querySelector("#modal");
    if($btn.classList.contains("is-active")) {
        $btn.classList.remove("is-active");
        $modal.classList.remove("selected");
    }
    else{
        $btn.classList.add("is-active");
        $modal.classList.add("selected");
    }

}
const paintMenu = (entries) => {
    if(entries[0].isIntersecting) document.querySelector(`.nav-link a[href="#${entries[0].target.id}"]`).classList.add("intersected");
    else document.querySelector(`.nav-link a[href="#${entries[0].target.id}"]`).classList.remove("intersected");
};
const useObserver = () =>{
    if(window.matchMedia("(min-width: 700px)").matches){
        let observer = new IntersectionObserver(paintMenu, {
            threshold: 0.8
        });
    
        $sections.forEach($section =>{
            observer.observe($section);
        });
    }
}
const changeBackground = () =>{
    let wallpaper = 1;
    setInterval(()=>{
        (wallpaper >= 3) ? wallpaper = 1 : wallpaper++;
        $wallpaper.style = `background-image: url("back${wallpaper}.jpg")`;
    }, 5000);
}

//Events
document.addEventListener("submit", e=>{
    e.preventDefault();
    checkPattern(e.target.value, e.target.pattern);
});
document.addEventListener("click", e=>{
        if(e.target.matches("#modal-nav li *") || e.target.matches("#btnMenu") || e.target.matches("#btnMenu *"))
        openModal();
});
window.addEventListener("resize", useObserver);

//Executions
changeBackground();
useObserver();