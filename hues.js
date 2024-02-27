// Navigation Bar---------->
let menu = document.getElementById("menu");
let menuPage = document.getElementById("menu-page");
let close = document.getElementById("close");

menu.addEventListener("click",()=>{
    setTimeout(()=>{
        menuPage.classList.add("menuPage");
    },200)
     menu.style = "border-top: 2px solid white; border-bottom: 2px solid white; border-right: none; border-left: none; border-radius: 10px;"
});

close.addEventListener("click",()=>{
    setTimeout(()=>{
        menuPage.classList.remove("menuPage");
    },100)
    menu.style = "border-right: 2px solid whitesmoke; border-left: 2px solid whitesmoke;"
});

// Theme---------->
let theme = document.getElementById("theme");
let themeCircle = document.querySelector(".theme-body-circle");
let themeBackground = document.querySelector(".theme-body-background");

theme.addEventListener("click",()=>{
    themeCircle.classList.toggle("theme-body-circle-active");
    document.body.classList.toggle("theme");
    themeBackground.classList.toggle("theme-body-background-active")
});
// Gradient---------->

let firstColor = document.getElementById("first-color");
let ScndColor = document.getElementById("second-color");
let done = document.getElementById("done");
let GrndArea = document.getElementById("gradient-area");
let deg = document.getElementById("deg");

if(deg.value == ""){
    deg.value = 90;
}else{
    deg.value;
}

done.addEventListener("click",()=>{
    GrndArea.style.background = `linear-gradient(${deg.value}deg,${firstColor.value},${ScndColor.value})`
    grndimp.textContent = "Here You Go";
})

setInterval(()=>{
    if(firstColor.value == ""){
        GrndArea.textContent = "Input Color Names Or Codes".toUpperCase();
    }else if(ScndColor.value == ""){
        GrndArea.textContent = "Input Color Names Or Codes".toUpperCase();
    }else{
     GrndArea.textContent = "";
    }
},0.5);
