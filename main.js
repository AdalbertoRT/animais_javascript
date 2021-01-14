function initScrollSuave() {
    const links = document.querySelectorAll(".js-menu a[href^='#']");

    function scrolltToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }
    links.forEach(e => {
        e.addEventListener('click', scrolltToSection);
    });
}
initScrollSuave();

function initAnimaisTab() {
    const animais = document.querySelectorAll(".js-animais-lista li");

    animais.forEach((e, index) => (
        e.addEventListener('click', function () {
            let section = document.querySelectorAll(".animais-descricao section")
            let faq = document.querySelectorAll(".faq dl")
            section.forEach(sec => {
                sec.classList.remove("ativo")
            });
            faq.forEach(faq => {
                faq.classList.remove("ativo")
            });
            section[index].classList.add("ativo")
            faq[index].classList.add("ativo")
        })
    ));
};
initAnimaisTab();

const accordionList = document.querySelectorAll(".faq dl.ativo dt");

function activeAccordion() {
    this.classList.toggle("ativo")
    this.nextElementSibling.classList.toggle("ativo")
}

accordionList.forEach(item => {
    item.addEventListener("click", activeAccordion)
})

console.log(accordionList)