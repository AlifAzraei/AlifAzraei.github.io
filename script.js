// Responsive navigation and active-section navigation.
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

document.querySelectorAll("[data-linkedin]").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (link.getAttribute("href") === "#") {
      event.preventDefault();
      alert("Add your LinkedIn profile URL in index.html before publishing.");
    }
  });
});

const cvLink = document.querySelector('a[href="assets/your-cv.pdf"]');
if (cvLink) {
  cvLink.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Add your CV PDF as assets/your-cv.pdf before publishing.");
  });
}
