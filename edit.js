let editOptions = {
    isEdit: false,
    elem: null,
  };
  
  function preFillForm(obj) {
    form.text.value = obj.name;
    form.dateofissue.value = obj.dateOfissue;
    form.priority.value = obj.type;
    form.tasktype.value = obj.taskType;
  }
  
  function onEditClick(event) {
    const card = event.currentTarget.closest(".card");
    if (!card) return;
  
    const index = Array.from(card.parentNode.children).indexOf(card);
  
    const taskData = {
      name: card.querySelector("label").innerText,
      dateOfissue: card
        .querySelector("#card-foot p:nth-child(1)")
        .innerText.slice(6),
      type: card.querySelector("#card-foot p:nth-child(2)").innerText.slice(6),
      taskType: card
        .querySelector("#card-foot p:nth-child(3)")
        .innerText.slice(6),
    };
  
    preFillForm(taskData);
  
    editOptions = {
      isEdit: true,
      elem: card,
      index: index,
    };
  
    document.getElementById(
      "addBtn"
    ).innerHTML = `Save <i class="fa fas fa-check-circle"></i>`;
  }
  
  function editTask(data) {
    editOptions.elem.querySelector("label").innerText = data.name;
    editOptions.elem.querySelector(
      "#card-foot p:nth-child(1)"
    ).innerText = `Date: ${data.dateOfissue}`;
    editOptions.elem.querySelector(
      "#card-foot p:nth-child(2)"
    ).innerText = `Type: ${data.type}`;
    editOptions.elem.querySelector(
      "#card-foot p:nth-child(3)"
    ).innerText = `Task Type: ${data.taskType}`;
  
    editOptions = {
      isEdit: false,
      elem: null,
      index: null,
    };
  
    document.getElementById(
      "addBtn"
    ).innerHTML = `Add <img src="assets/plus.svg" alt="no-img">`;
  }
  
  function onDeleteClick(event) {
    const card = event.currentTarget.closest(".card");
    if (!card) return;
  
    const index = Array.from(card.parentNode.children).indexOf(card);
  
    card.remove();
  }