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


  // Portfolio filter
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectItems = document.querySelectorAll(".project-item");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      projectItems.forEach((item) => {
        const show = filter === "all" || item.getAttribute("data-category") === filter;
        item.classList.toggle("hide", !show);
      });
    });
  });

});