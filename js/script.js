// LEWIS K 2024
///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";
    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));
    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);
    if (!isSupported) document.body.classList.add("no-flexbox-gap");
};

checkFlexGap();


// CHANGE YEAR
const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

// MENU
const hamburgerIcon = document.querySelector("#hamburgerIcon");
const mobileMenu = document.querySelector('.mobile-menu');
const closeIcon = document.querySelector("#x-close-icon");

hamburgerIcon.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
});

closeIcon.addEventListener('click', function() {
    mobileMenu.classList.remove('active');
});


// SMOOTH SCROLLING
const allLinks = document.querySelectorAll('a:link')

allLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const hrefAttribute = link.getAttribute('href');

        if (hrefAttribute === "#") 
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

        if (hrefAttribute !== "#" && hrefAttribute.startsWith('#')) {
            const sectionElement = document.querySelector(hrefAttribute);
            sectionElement.scrollIntoView({behavior: "smooth"});
        }

        if (link.classList.contains('mobileLink')) {
            mobileMenu.classList.remove('active');
        }
    });
});