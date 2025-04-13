const scrollToTopBtn=document.getElementById("scrollToTopBtn");

window.onscroll=function(){
    if(document.documentElement.scrollTop>500){
        scrollToTopBtn.style.opacity="0.6";
    }else{
        scrollToTopBtn.style.opacity="0";
    }
};
scrollToTopBtn.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    });
});