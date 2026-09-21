
document.addEventListener("DOMContentLoaded", () => {

  
  // Nav
  const navLinks = document.querySelectorAll("nav a[data-target]");
  const sections = document.querySelectorAll("article section");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("data-target");

      navLinks.forEach((target) => target.classList.remove("active"));
      link.classList.add("active");

      sections.forEach((section) => {
        section.classList.toggle("active", section.id === targetId);
      });
    });
  });

  // toggle-info
  const toggleInfo = document.getElementById("toggle-info");
  const infoList = document.getElementById("info-list");
  
  toggleInfo.addEventListener("click", () => {
    infoList.classList.toggle("show");
  });


});
