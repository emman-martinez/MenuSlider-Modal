// *************** Error Message *************** //
const showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
};
// *************** Success Message *************** //
const showSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
};
// *************** Valid Email *************** //
const checkEmail = (input) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase()); // with @ true, without @ false
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
};
// *************** Check Required *************** //
const checkRequired = (inputArray) => {
    inputArray.forEach((input) => {
        if (input.value.trim() === '') {
            showError(input, `${getFileName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
};
// *************** Check input length *************** //
const checkLength = (input, min, max) => {
    if (input.value.length < min) {
        showError(input, `${getFileName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFileName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
};
// *************** Password Match *************** //
const checkPasswordMatch = (input1, input2) => {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
};
// *************** Get File Name *************** //
const getFileName = (input) => {
    const mayuscula = input.id.charAt(0).toUpperCase();
    const restoPalabra = input.id.slice(1);

    return mayuscula + restoPalabra;
};

export {
    checkEmail,
    checkRequired,
    checkLength,
    checkPasswordMatch
}