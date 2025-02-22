const serviceItemTitle = document.querySelectorAll(".service__item-title span");

serviceItemTitle[1].style.cssText = `
    background: linear-gradient(102deg, #722FFF 4.6%, #B12EFF 80.31%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

serviceItemTitle[2].style.cssText = `
    background: linear-gradient(88deg, #FFCB01 4.62%, #FF5993 40.95%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const checkBoxInput = document.querySelectorAll(".faqs__item-checkbox");
const faqIcon = document.querySelectorAll(".faqs__item-icon");

checkBoxInput.forEach((currentCheckbox, index) => {
    currentCheckbox.addEventListener("change", function () {
        if (this.checked) {
            faqIcon[index].src = "./assets/icons/plus.svg";
        } else {
            faqIcon[index].src = "./assets/icons/minus.svg";
        }
    });
});
