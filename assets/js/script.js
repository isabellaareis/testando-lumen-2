/* MENU HAMBURGUER */

const hamburger = document.getElementById("hamburger");
const navMobile = document.getElementById("navMobile");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMobile.classList.toggle("active");
});

/* FAQ */
const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
        item.classList.toggle('open');
        });
});

