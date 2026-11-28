/* ==================== PANDUAN CEPAT ====================
   Fail ini ada 4 fungsi kecil:
     1. Menu mobile  : buka dan tutup apabila butang menu ditekan
     2. Tahun        : kemas kini tahun hak cipta di footer secara automatik
     3. Menu aktif   : tandakan pautan menu mengikut seksyen yang sedang dilihat
     4. Escape       : tutup menu mobile dengan butang Escape
   ====================================================== */


// Responsive navigation
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute(
      "aria-label",
      open ? "Close navigation" : "Open navigation"
    );
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Automatic copyright year
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// Tandakan pautan menu mengikut seksyen yang sedang dilihat
const spyLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];
const spyTargets = spyLinks.map((link) => document.querySelector(link.getAttribute("href")));

function updateActiveLink() {
  let current = spyLinks[0];
  let best = -Infinity;

  spyLinks.forEach((link, i) => {
    const target = spyTargets[i];
    if (!target) return;
    const top = target.getBoundingClientRect().top;
    // pilih seksyen paling hampir dengan bawah header (120px)
    if (top <= 120 && top > best) {
      best = top;
      current = link;
    }
  });

  spyLinks.forEach((link) => link.classList.toggle("active", link === current));
}

window.addEventListener("scroll", updateActiveLink, { passive: true });
updateActiveLink();

// Tutup menu mobile dengan butang Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && nav && nav.classList.contains("open")) {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.focus();
  }
});
