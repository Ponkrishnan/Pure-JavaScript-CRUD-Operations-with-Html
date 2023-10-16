var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["Department"] = document.getElementById("Department").value;
    formData["Section"] = document.getElementById("Section").value;
    formData["SrtRoll"] = document.getElementById("SrtRoll").value;
    formData["EndRoll"] = document.getElementById("EndRoll").value;
    return formData;

    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Department;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Section;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.SrtRoll;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.EndRoll;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a><br>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("Department").value = "";
    document.getElementById("Section").value = "";
    document.getElementById("SrtRoll").value = "";
    document.getElementById("EndRoll").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Department").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Section").value = selectedRow.cells[1].innerHTML;
    document.getElementById("SrtRoll").value = selectedRow.cells[2].innerHTML;
    document.getElementById("EndRoll").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Department;
    selectedRow.cells[1].innerHTML = formData.Section;
    selectedRow.cells[2].innerHTML = formData.SrtRoll;
    selectedRow.cells[3].innerHTML = formData.EndRoll;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("Department").value == "") {
        isValid = false;
        document.getElementById("DepartmentValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("DepartmentValidationError").classList.contains("hide"))
            document.getElementById("DepartmentValidationError").classList.add("hide");
    }
    return isValid;
}