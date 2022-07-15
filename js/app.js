var tbody = document.getElementById("tbody");
var status = document.getElementById("status");
var input = document.getElementById("input");
var resetBtn = document.querySelector(".reset");
var table = document.querySelector(".table");
var image = document.querySelector(".image");
var paragraph = document.querySelector(".p_id");

image.style.display = "block";
table.style.display = "none";
resetBtn.style.display = "none";
indicator = 0;

function addToList() {
  if (input.value == "") {
    paragraph.style.display = "block";
    paragraph.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> אנא הוסף מוצר לרשימת הקניות`;
  } else if (input.value.length > 18) {
    paragraph.style.display = "block";
    paragraph.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> שם המוצר ארוך מדי`;
  } else {
    paragraph.style.display = "none";
    table.style.display = "block";
    tbody.innerHTML += `<tr id="tablerow"><td>${input.value}</td> 
        <td><div class="mid-btn"><button onclick="complete(event)" type="button" class="btn btn-success btn-size2 btn-sm"><i class="fa-solid fa-check"></i> בוצע</button> 
        <button onclick="edit(event)" type="button" class="btn btn-secondary btn-size2 btn-sm"><i class="fa-solid fa-pen-to-square"></i> ערוך</button> 
        <button onclick="deleteRow(event)" type="button" class="btn btn-danger btn-size2 btn-sm"><i class="fa-regular fa-trash-can"></i> מחק</button><div></td></tr></tr>`;
    indicator++;
  }
  input.value = "";
  resetBtn.style.display = "flex";
  image.style.display = "none";

  console.log(indicator);
}

function complete(event) {
  event.path[3].style.backgroundColor = "#99f49e";
  event.path[0].innerHTML = `לא בוצע`;
  event.target.onclick = uncomplete;
  console.log(event);
}

function uncomplete(event) {
  event.path[3].style.backgroundColor = "transparent";
  event.path[0].innerHTML = `<i class="fa-solid fa-check"> </i> בוצע`;
  event.target.onclick = complete;
}

function deleteRow(event) {
  indicator--;
  event.path[3].remove(event.path[2]);

  if (indicator == 0) {
    reset();
  }
}

function edit(event) {
  let edit = prompt("ערוך את המוצר");
  if (edit.length > 18) {
    alert(`שם המוצר ארוך מדי`);
  } else {
    event.path[3].cells[0].innerHTML = edit;
  }
}

function reset() {
  indicator = 0;
  paragraph.style.display = "none";
  tbody.innerHTML = "";
  resetBtn.style.display = "none";
  table.style.display = "none";
  image.style.display = "block";
}
