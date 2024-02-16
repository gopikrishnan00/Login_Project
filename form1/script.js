
let stateObject = {
    "India": {
        "Delhi": ["new Delhi", "North Delhi"],
        "Kerala": ["Thiruvananthapuram", "Palakkad"],
        "TamilNadu": ["Chennai", "Cuddalore", "Villupuram"],
    },
    "USA": {
        "California": ["California City", "San Jose"],
        "Texas": ["Austin", "Dallas"],
        "Washington": ["Tacoma", "Richland"],
    },
}

window.onload = function () {

    let countrySel = document.getElementById('countySel'),
        stateSel = document.getElementById('stateSel'),
        districtSel = document.getElementById('districtSel');

    for (let country in stateObject) {
        countrySel.options[countrySel.options.length] = new Option(country);
    }

    countrySel.onchange = function () {
        stateSel.length = 1;
        districtSel.length = 1;

        if (this.selectedIndex < 1) return;
        for (let state in stateObject[this.value]) {
            stateSel.options[stateSel.options.length] = new Option(state);
        }
    }
    countrySel.onchange();

    stateSel.onchange = function () {
        districtSel.length = 1;

        if (this.selectedIndex < 1) return;
        let district = stateObject[countrySel.value][this.value];

        for (let i = 0; i < district.length; i++) {
            districtSel.options[districtSel.options.length] = new Option(district[i]);
        }
    }
}






const form = document.getElementById("myform");
const fname = document.getElementById("name");
const email = document.getElementById("e-mail");
const password = document.getElementById("password");
const cpassword = document.getElementById("c-password");
const phone = document.getElementById("phone");
const country = document.getElementById("countySel");
const state = document.getElementById("stateSel");
const city = document.getElementById("districtSel");


form.addEventListener('submit', e => {
    e.preventDefault();
    myFunction();
});


function myFunction() {

    const nameValue = fname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cpasswordValue = cpassword.value.trim();
    const phoneValue = phone.value.trim();
    const countryValue = country.value.trim();
    const stateValue = state.value.trim();
    const cityValue = city.value.trim();



    if (nameValue === '') {
        setError(fname, 'Name is required*');
    }
    else {
        setSuccess(fname);
    }

    if (emailValue === '') {
        setError(email, 'Email is required*');
    } else if (!isEmail(emailValue)) {
        setError(email, 'Email is not matched*')
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, 'password  is required*');
    }
    else if (passwordValue.length !== 8) {
        setError(password, 'password must be at least 8 characters*');
    }
    else {
        setSuccess(password);
    }

    if (cpasswordValue === '') {
        setError(cpassword, 'Confirm password is requried*');
    } else if (passwordValue !== cpasswordValue) {
        setError(cpassword, 'Confirm password is not matched*');
    } else {
        setSuccess(cpassword);
    }

    if (phoneValue === '') {
        setError(phone, 'Phone number is requried*');
    } else if (phoneValue.length !== 10) {
        setError(phone, 'Phone number is not match*');
    } else {
        setSuccess(phone);
    }

    if (countryValue === '') {
        setError(country, 'Select a country*');
    } else {
        setSuccess(country);
    }

    if (stateValue === '') {
        setError(state, 'Select a state*');
    } else {
        setSuccess(state);
    }

    if (cityValue === '') {
        setError(city, 'Select a city*');
    } else {
        setSuccess(city);
    }





    if (nameValue !== '' && emailValue !== '' && passwordValue !== '' && cpasswordValue !== '' && phoneValue !== '' && countryValue !== '' && stateValue !== '' && cityValue !== '') {

        if (isEmail(emailValue) && passwordValue === cpasswordValue && phoneValue.length === 10 && passwordValue.length === 8) {


            let table = document.getElementById('tabledata');
            let row = table.insertRow(1);

            let row1 = row.insertCell(0);
            let row2 = row.insertCell(1);
            let row3 = row.insertCell(2);
            let row4 = row.insertCell(3);
            let row5 = row.insertCell(4);
            let row6 = row.insertCell(5);
            let row7 = row.insertCell(6);
            let row8 = row.insertCell(7);

            row1.innerHTML = nameValue;
            row2.innerHTML = emailValue;
            row3.innerHTML = passwordValue;
            row4.innerHTML = cpasswordValue;
            row5.innerHTML = phoneValue;
            row6.innerHTML = countryValue;
            row7.innerHTML = stateValue;
            row8.innerHTML = cityValue;
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






let currentSortOrder = 'asc';

function sortTable(columnIndex) {
    let table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById('tabledata');
    switching = true;

    while (switching) {
        switching = false;
        rows = table.rows;

        for (i = 1; i < rows.length - 1; i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName('td')[columnIndex];
            y = rows[i + 1].getElementsByTagName('td')[columnIndex];

            let xValue = x.innerHTML.toLowerCase();
            let yValue = y.innerHTML.toLowerCase();

            if (currentSortOrder === 'asc' && xValue > yValue) {
                shouldSwitch = true;
                break;
            } else if (currentSortOrder === 'desc' && xValue < yValue) {
                shouldSwitch = true;
                break;
            }
        }

        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
    currentSortOrder = (currentSortOrder === 'asc') ? 'desc' : 'asc';
}






const search = document.getElementById('search');
const rows = document.getElementsByTagName('tr');
search.addEventListener('input', searchVal);

function searchVal() {
    let value = search.value.toLowerCase();

    for (let i = 1; i < rows.length; i++) {
        let columns = rows[i].cells;
        let rowDisplay = "none";

        for (let j = 0; j < columns.length; j++) {
            let column_Value = columns[j].innerText || columns[j].textContent;

            if (column_Value.toLowerCase().indexOf(value) > -1) {
                rowDisplay = "";
                break;
            }
        }
        rows[i].style.display = rowDisplay;
        document.getElementById('show').style.display = (rowDisplay === "") ? "none" : "block";
    }
}




















