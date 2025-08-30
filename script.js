// Highlight the active section in navbar while scrolling
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY + 200;

  sections.forEach(sec => {
    const top = sec.offsetTop;
    const bottom = top + sec.offsetHeight;

    if (scrollPosition >= top && scrollPosition < bottom) {
      navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${sec.id}`);
      });
    }
  });
});
