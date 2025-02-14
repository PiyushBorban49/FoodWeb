const slide = document.querySelectorAll(".slides img");
let slideIndex = 0;
function initializer()
{
    if(slide.length>0){
        slide[slideIndex].classList.add("displaySlides");
    }
}
function showSlides(index){
    if(index >= slide.length){
        slideIndex = 0;
    }
    else if(index<0){
        slideIndex = slide.length-1;
    }
    slide.forEach(slideItem=>{
        slideItem.classList.remove("displaySlides");
    });
    slide[slideIndex].classList.add("displaySlides");
}
function prevSlide(){
    slideIndex--;
    showSlides(slideIndex);    
}
function nextSlide(){
    slideIndex++;
    showSlides(slideIndex);    
}
initializer();