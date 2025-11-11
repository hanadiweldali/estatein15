const header =document.querySelector(".navbar")
const herosection =document.querySelector(".herosection");
window.onscroll=function(e){
    if(window.scrollY>=herosection.offsetTop){
        header.classList.add("header_scroll");
    }
else{
    header.classList.remove("header_scroll");
}
}