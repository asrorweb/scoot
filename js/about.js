let burgerMenuBtn = document.querySelector(".burger__menu"),
    navMenu = document.querySelector(".navigation"),
    darkShadow = document.querySelector(".dark-shadow");
click = true;
burgerMenuBtn.addEventListener("click", function () {
    if (click) {
        navMenu.style.left = "0";
        darkShadow.style.display = "block";
    } else {
        navMenu.style.left = "-100%";
        darkShadow.style.display = "none";
    }

    click = !click;
});

darkShadow.addEventListener("click", function () {
    darkShadow.style.display = "none";
    navMenu.style.left = "-100%";
});

let faqsBtn = document.querySelectorAll(".howto-work__item");

faqsclick = true;
for (let i = 0; i < faqsBtn.length; i++) {
    faqsBtn[i].addEventListener("click", function () {
        if (faqsclick) {
            faqsBtn[i].classList.add("howto-work__item--active");
        } else {
            faqsBtn[i].classList.remove("howto-work__item--active");
        }
        faqsclick = !faqsclick;
    });
}
