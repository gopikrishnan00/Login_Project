
let lists = document.getElementsByClassName("form-control");
let rightbox = document.getElementById("right");
let leftbox = document.getElementById("left");

for (lists of lists) {
    lists.addEventListener('dragstart', function (e) {
        let selected = e.target;

        rightbox.addEventListener('dragover', function (e) {
            e.preventDefault();
        });

        rightbox.addEventListener('drop', function (e) {
            rightbox.appendChild(selected);
            selected = null;
        })
    })
}



function copyToDiv() {
    const leftDiv = document.getElementById("right");
    const storeDiv = document.getElementById("store");
    storeDiv.innerHTML = "";
    for (let i = 0; i < leftDiv.children.length; i++) {
        let child = leftDiv.children[i];

        if (child.draggable) {
            let clonedElement = child.cloneNode(true);

            let inputs = clonedElement.querySelectorAll('input[type="text"], input[type="color"], input[type="password"], input[type="email"], input[type="radio"], input[type="number"]');
            // let inputs = clonedElement.querySelectorAll('input')
            for (let j = 0; j < inputs.length; j++) {
                inputs[j].setAttribute("required", "true");
            }

            storeDiv.appendChild(clonedElement);

        }
    }
}







function printValue() {
    const storeDiv = document.getElementById("store");
    const inputs = storeDiv.querySelectorAll('input[type="text"], input[type="color"], input[type="password"], input[type="email"], input[type="radio"], input[type="number"], input[type="date"],input[type="time"]');
    const values = [];

    for (let i = 0; i < inputs.length; i++) {
        values.push(inputs[i].value);
    }


  const  textValue = storeDiv.querySelector('input[type="text"]').value.trim();
  const  colorValue = storeDiv.querySelector('input[type="color"]').value;
  const  passwordValue = storeDiv.querySelector('input[type="password"]').value.trim();
  const  numerValue = storeDiv.querySelector('input[type="number"]').value.trim();
  const  dateValue = storeDiv.querySelector('input[type="date"]').value;
  const  timeValue = storeDiv.querySelector('input[type="time"]').value;
  const  rangeValue = storeDiv.querySelector('input[type="range"]').value;

  
  const text = storeDiv.querySelector('.one');
  const date = storeDiv.querySelector('.two');
  const time = storeDiv.querySelector('.three');
  const range = storeDiv.querySelector('.four');
  const color = storeDiv.querySelector('.five');
  const password = storeDiv.querySelector('.six');
  const number = storeDiv.querySelector('.seven');

 





    if (storeDiv.querySelector('input[type="text"]')) {

        if (textValue === "") {
            text.innerHTML = "please cannot be blank";
            text.style.visibility = "visible";
        } else {
            text.style.visibility = "hidden";
        }
    }


    if(storeDiv.querySelector('input[type="date"]')){

        if(dateValue === ""){
            date.innerHTML = "please fix the date";
            date.style.visibility = "visible";
        }else{
            date.style.visibility = "hidden";
        }
    }


    if(storeDiv.querySelector('input[type="time"]')){

        if(timeValue === ''){
            time.innerHTML = "please fix the time";
            time.style.visibility = "visible";
        }else{
            time.style.visibility = "hidden";
        }
    }
    

    if(storeDiv.querySelector('input[type="range"]')){

        if(rangeValue === '50'){
            range.innerHTML = "please fix the range";
            range.style.visibility = "visible";
        }else{
            range.style.visibility = "hidden";
        }
    }


    if (storeDiv.querySelector('input[type="color"]')) {

        if (colorValue === "#000000") {
            color.innerHTML = "please cannot be blank";
            color.style.visibility = "visible";
        } else {
            color.style.visibility = "hidden";
        }

    }


    if(storeDiv.querySelector('input[type="password"]')){
        
        if(passwordValue === ''){
            password.innerHTML = "please cannot be blank";
            storeDiv.querySelector('.six').style.visibility = "visible";
        }else if(passwordValue.length !== 8){
            password.innerHTML = "maximum 8 digit";
            password.style.visibility = "visible";
        }else{
            password.style.visibility = "hidden";
        }
    }


    if(storeDiv.querySelector('input[type="number"]')){

        if(numerValue === ''){
            number.innerHTML = "please fix the number";
            number.style.visibility = "visible";
        }else if(numerValue.length !== 10){
            number.innerHTML = "please fix the 10 digit number";
            number.style.visibility = "visible";
        }else{
            number.style.visibility = "hidden";
        }
    }


    if (textValue !== "" && colorValue !== "" && passwordValue !== "" && dateValue !== "" && numerValue !== "" && timeValue !== "" && numerValue.length === 10  && passwordValue.length === 8 && rangeValue !== "") {

  
        

        let table = document.getElementById('tabledata');
        let row = table.insertRow(1);

        let row1 = row.insertCell(0);
        let row2 = row.insertCell(1);
        let row3 = row.insertCell(2);
        let row4 = row.insertCell(3);
        let row5 = row.insertCell(4);
        let row6 = row.insertCell(5);
        let row7 = row.insertCell(6);



        row1.innerHTML = textValue;
        row2.innerHTML = dateValue;
        row3.innerHTML = colorValue;
        row4.innerHTML = passwordValue;
        row5.innerHTML = numerValue;
        row6.innerHTML = timeValue;
        row7.innerHTML = rangeValue;

    }

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

















