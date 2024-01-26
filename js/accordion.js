document.addEventListener("DOMContentLoaded", function() {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach(item => {
      const header = item.querySelector(".accordion-header");
      const content = item.querySelector(".accordion-content");
      const arrow = header.querySelector(".arrow");

      header.addEventListener("click", function() {

          item.classList.toggle("active");


          if (item.classList.contains("active")) {
              content.style.maxHeight = content.scrollHeight + "px";
          } else {
              content.style.maxHeight = 0;
          }


          arrow.style.transform = item.classList.contains("active") ? "rotate(180deg)" : "rotate(0deg)";
      });
  });
});