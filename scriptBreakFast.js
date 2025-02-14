



const footerImages = document.querySelectorAll(".footer .images img");
const foodbarImage = document.querySelector(".foodbar img");
const Material = document.querySelectorAll(".side-navbar .design a");
const Heading = document.querySelectorAll(".food .order p");
footerImages.forEach(image=>{
    image.addEventListener("click",()=>{
        foodbarImage.src = image.src;
    });
})