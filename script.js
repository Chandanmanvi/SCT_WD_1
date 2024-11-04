const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
    hamburger.classList.toggle("ri-close-large-fill");
})

navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("left-[0]");
        hamburger.classList.toggle("ri-close-large-fill");
    })
})

const scrollUp = () => {
    const scrollUpBtn = document.getElementById("scroll-up");
    if (this.scrollY >= 250) {
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
    } else {
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-4");
    }
}

window.addEventListener("scroll", scrollUp);

const activeLink = () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll(".nav-link");
    let current = "home";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if (this.scrollY >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    })

    navLinks.forEach(item => {
        item.classList.remove("active");
        if (item.href.includes(current)) {
            item.classList.add("active");
        }
    })
}

window.addEventListener("scroll", activeLink);

const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 1300,
    delay: 300,
    reset: true
})

sr.reveal(`.home_data, .about_top, .popular_top, .footer_icon, .footer_content, .copy_right`);
sr.reveal(`.home_image`, { delay: 500, scale: 0.5 });
sr.reveal(`.service_card, .popular__card`, { interval: 100 });

sr.reveal(`.about_leaf`, {interval: 1000, origin: "right"});
sr.reveal(`.about_item_1-content, .about_item_2-img`, {origin: "right"});
sr.reveal(`.about_item_2-content, .about_item_1-img`, {origin: "left"});

sr.reveal(`.footer_floral`, {delay: 1000, origin: "left" });