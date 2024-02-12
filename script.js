let firstname = document.querySelector("#firstName");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let lastName = document.querySelector("#lastName");
let phoneNumber = document.querySelector("#phone");
let pwdConfirm = document.querySelector("#passConfirm");
let form = document.querySelector("#signUpForm");

form.reset();
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(form.checkValidity()) {
        alert("Form was able to be submitted")
    }
})

email.addEventListener("input", (e => {

    if (email.validity.typeMismatch) {
        showError(email, "emailTypeMismatch");
    } else {
        resetValidity(email)
    }
}))

firstname.addEventListener("input", (e => {

    if (firstname.validity.valueMissing) {
        showError(firstname, "textValueMissing");
    } else {
        resetValidity(firstname)
    }
}))

password.addEventListener("input", (e => {
    if(pwdConfirm.value !== "") {
        if (pwdConfirm.value !== password.value) {
            showError(pwdConfirm, "passMustMatch");
        } else {
            resetValidity(pwdConfirm)
        }
    }
    if (password.validity.valueMissing) {
        showError(password, "textValueMissing");
        resetValidity(pwdConfirm)
    } else {
        resetValidity(password)
    }

    if (password.validity.tooShort) {
        showError(password, "tooShort");
    } else {
        resetValidity(password)
    }
}))


pwdConfirm.addEventListener("input", (e => {
    if (pwdConfirm.value !== password.value && password.value !== "") {
        showError(pwdConfirm, "passMustMatch");
    } else {
        resetValidity(pwdConfirm)
    }
}))



function showError (element, error) {
    switch (error) {
        case "emailTypeMismatch":
            element.setCustomValidity("Please enter a valid email address!");
            element.nextElementSibling.innerHTML = "Invalid Email";
            break;
        case "textValueMissing":
            element.setCustomValidity("Required Field");
            element.nextElementSibling.innerHTML = "Required Field";
            break;
        case "tooShort":
            element.setCustomValidity("Password must be at least 8 characters long");
            element.nextElementSibling.innerHTML = "Password must be at least 8 characters long";
            break;
        case "passMustMatch":
            element.setCustomValidity("Passwords must match!");
            element.nextElementSibling.innerHTML = "Passwords must match!";
            break;   
        default:
            break;
    }
}

function resetValidity (element) {
    element.setCustomValidity("");
    element.nextElementSibling.innerHTML = "";
}


