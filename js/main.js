let updateRowNumber = null;

function onFormSubmit() {
    const formData = readFormData();
    insertNewRecord(formData);
}

function readFormData() {
    const formData = {};
    formData["fullName"] = document.getElementById('fullName').value;
    formData["empCode"] = document.getElementById('empCode').value;
    formData["salary"] = document.getElementById('salary').value;
    formData["city"] = document.getElementById('city').value;
    return formData
}

function insertNewRecord(data) {
    const table = document.getElementById('employeeList').getElementsByTagName('tbody')[0]
    const newRow = table.insertRow(table.length);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    cell1.innerHTML = data.fullName;
    cell2.innerHTML = data.empCode;
    cell3.innerHTML = data.salary;
    cell4.innerHTML = data.city;
    cell5.innerHTML = `<a href="#" onclick="onEdit(this);">Edit</a>
    <a href="#" onclick="deleteExistingRecord(this);">Delete</a>`;
}

function onEdit(td) {
    const selectedRow = td.parentElement.parentElement;
    updateRowNumber = getIndex(td);
    document.getElementById('fullName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('empCode').value = selectedRow.cells[1].innerHTML;
    document.getElementById('salary').value = selectedRow.cells[2].innerHTML;
    document.getElementById('city').value = selectedRow.cells[3].innerHTML;
    document.getElementById('formUpdateBtn').disabled = false;
    document.getElementById('formSubmitBtn').disabled = true;
}

function updateExistingRecord() {
    const table = document.getElementById('employeeList').getElementsByTagName('tbody')[0]
    const rowData = table.children[updateRowNumber].children;
    rowData[0].innerHTML = document.getElementById('fullName').value;
    rowData[1].innerHTML = document.getElementById('empCode').value;
    rowData[2].innerHTML = document.getElementById('salary').value;
    rowData[3].innerHTML = document.getElementById('city').value;
    
    updateRowNumber = null;
    document.getElementById('formSubmitBtn').disabled = false;
    document.getElementById('formUpdateBtn').disabled = true;
}

function deleteExistingRecord(td) {
    const selectedRow = td.parentElement.parentElement;
    selectedRow.remove();
}

function testerFunction() {
    alert('Hello!');
}

function getIndex(elem) {
    const parentElemList = Array.from(elem.parentElement.children);
    return parentElemList.indexOf(elem)
}