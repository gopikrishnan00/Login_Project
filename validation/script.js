
const form = document.getElementById("myform");
const fname = document.getElementById("f-name");
const lname = document.getElementById("l-name");
const email = document.getElementById("e-mail");
const city = document.getElementById("city-place");
const state = document.getElementById("state-place");
const zip = document.getElementById("zip");
const password = document.getElementById("password");
const cpassword = document.getElementById("c-password");
const gender = document.getElementsByName("gender");




form.addEventListener('submit', e => {
    e.preventDefault();
    checkInput();

});

function checkInput() {
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const cityValue = city.value.trim();
    const stateValue = state.value.trim();
    const zipValue = zip.value.trim();
    const passwordValue = password.value.trim();
    const cpasswordValue = cpassword.value.trim();
    const radioValue = [...gender].find(radio => radio.checked);




    if (fnameValue === '') {
        setError(fname, '*First Name is required');
    }
    else {
        setSuccess(fname);
    }

    if (lnameValue === '') {
        setError(lname, '*Last Name  is required ');
    }
    else {
        setSuccess(lname);
    }

    if (emailValue === '') {
        setError(email, '*Email  is required');
    }
    else if (!isEmail(emailValue)) {
        setError(email, '*Not a Valid Email');
    }
    else {
        setSuccess(email);
    }

    if (cityValue === '') {
        setError(city, 'City Place  is required');
    }
    else {
        setSuccess(city);
    }

    if (stateValue === '') {
        setError(state, '*State Place  is required');
    }
    else {
        setSuccess(state);
    }

    if (zipValue === '') {
        setError(zip, '*zip code  is required');
    }
    else if (!isZip(zipValue)) {
        setError(zip, '*Not a Valid zip code');
    }
    else {
        setSuccess(zip);
    }

    if (passwordValue === '') {
        setError(password, '*password  is required');
    }
    else if (passwordValue.length < 8) {
        setError(password, '* password must be at least 8 characters');
    }
    else {
        setSuccess(password);
    }

    if (cpasswordValue === '') {
        setError(cpassword, '* confirm password  is required');
    }
    else if (cpasswordValue !== passwordValue) {
        setError(cpassword, '*confirm password does no match');
    }
    else {
        setSuccess(cpassword);
    }

    if (!radioValue) {
        setError(gender[0], '*Please select a gender');
    } else {
        setSuccess(gender[0]);
    }



    if (fnameValue !== '' && lnameValue !== '' && emailValue !== '' && radioValue !== '' && cityValue !== '' && stateValue !== '' && zipValue !== '' && passwordValue !== '' && cpasswordValue !== '') {


        if (zipValue.length === 6 && passwordValue.length === 8 && passwordValue === cpasswordValue) {

            document.getElementById('firstname').innerHTML = fnameValue;
            document.getElementById('lastname').innerHTML = lnameValue;
            document.getElementById('email-1').innerHTML = emailValue;
            document.getElementById('gender-1').innerHTML = radioValue.value;
            document.getElementById('city-1').innerHTML = cityValue;
            document.getElementById('state-1').innerHTML = stateValue;
            document.getElementById('zip-1').innerHTML = zipValue;
            document.getElementById('password-1').innerHTML = passwordValue;
            document.getElementById('cpssword-1').innerHTML = cpasswordValue;

        }
    }

}


function setError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = 'form-control.error';
    small.innerText = message;
}

function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


function isEmail(email) {
    return /^([A-Za-z0-9_.])+\@([a-z])+\.([a-z])+$/.test(email);
}


function isZip(zip) {
    return /^\d{6}(-\d{6})?$/.test(zip);
}





