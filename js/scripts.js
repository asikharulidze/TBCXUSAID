/*
* TBCxUSAID ASIKHARULIDZE
*/
window.addEventListener("scroll", function () {
    let header = document.getElementById("fixed_header");
    let scrollTop =  document.documentElement.scrollTop;
    scrollTop>0 ? header.style.opacity = 0.9 : header.style.opacity = 1; 
 });

  