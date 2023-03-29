const form = document.forms[0];

form.login.addEventListener("change", function () {
    validateElement(form.login, "#loginError");
});

form.password.addEventListener("change", function () {
    validateElement(form.password, "#passwordError");
});

form.addEventListener("submit", function (e) {
    validateElement(form.login, "#loginError");
    validateElement(form.password, "#passwordError");

    let invalidElements = document.querySelectorAll(".invalid");
    if (invalidElements.length > 0) {
        e.preventDefault();
    }
    else {
        alert("Autorized");
    }
});

function validateElement(element, errorElementSelector) {
    let errorElement = document.querySelector(errorElementSelector);

    element.classList.remove("valid");
    element.classList.remove("invalid");
    errorElement.style.display = "none";

    if (element.value.length > 0) {
        element.classList.add("valid");
    }
    else {
        element.classList.add("invalid");
        errorElement.style.display = "inline";
    }
}
