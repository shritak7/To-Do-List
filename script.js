const form = document.querySelector("form");
const addBtn = document.querySelector("#addBtn");
const nothing = document.querySelector("#nothing");
const toDoContainer = document.querySelector("#todo");
const startedContainer = document.querySelector("#started");
const completeContainer = document.querySelector("#completed");
const todoshow = document.querySelector("#todoshow");
const compshow = document.querySelector("#compshow");
const todohigh = document.querySelector("#todohigh");
const starthigh = document.querySelector("#starthigh");
const comphigh = document.querySelector("#comphigh");

let todoCount = 0;
let startCount = 0;
let compCount = 0;
let todoHighCount = 0;
let startHighCount = 0;
let compHighCount = 0;

function addTask(event) {
  nothing.classList.add("disp");
  let card = document.createElement("div");
  card.setAttribute("class", "card");
  card.innerHTML = `
        <div class="body">
            <div>
                <input type="checkbox" id="textname">
                <label for="textname">${event.name}</label>
            </div>
            <div style="display:flex; gap:12px;">
                <i class="fa fa-pencil edit-btn" onclick="onEditClick(event)"></i>
                <i class="fa fas fa-trash-alt" onclick="onDeleteClick(event)"></i>
            </div>
        </div>
        <div id="card-foot">
            <p>Date: ${event.dateOfissue}</p>
            <p>Type: ${event.type}</p>
            <p>Type: ${event.taskType}</p>
        </div>
`;

  if (event.taskType === "To-Do") {
    if (event.type === "high") {
      todoHighCount++;
    }

    toDoContainer.appendChild(card);
    todoCount++;
    todoshow.innerText = todoCount;
    todohigh.innerText = todoHighCount;
  }
  if (event.taskType === "Started") {
    if (event.type === "high") {
      startHighCount++;
    }

    startedContainer.appendChild(card);
    startCount++;
    startedshow.innerText = startCount;
    starthigh.innerText = startHighCount;
  }
  if (event.taskType === "Completed") {
    if (event.type === "high") {
      compHighCount++;
    }

    completeContainer.appendChild(card);
    compCount++;
    compshow.innerText = compCount;
    comphigh.innerText = compHighCount;
  }
  filterTasks();
}

function onFormSubmit(event) {
  event.preventDefault();
  let data = {
    name: form.text.value,
    dateOfissue: form.dateofissue.value,
    type: form.priority.value,
    taskType: form.tasktype.value,
  };

  if (editOptions.isEdit) {
    editTask(data);
  } else {
    addTask(data);
  }
  form.reset();
  console.log(data);
}

form.addEventListener("submit", onFormSubmit);
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", filterTasks);

function filterTasks() {
  const searchQuery = searchInput.value.toLowerCase();

  const allTasks = document.querySelectorAll(".card");
  allTasks.forEach((task) => {
    const taskName = task.querySelector("label").innerText.toLowerCase();
    task.style.display = taskName.includes(searchQuery) ? "flex" : "none";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];
  document.getElementById("dateofissue").value = formattedDate;
});