const taskContainer = document.querySelector(".task_container");

const saveChanges = () => {

  const taskData = {
    id: `${Date.now()}`,
    imageUrl: document.getElementById("imageurl").value,
    taskTitle: document.getElementById("tasktitle").value,
    taskType: document.getElementById("tasktype").value,
    taskDescription: document.getElementById("taskdescription").value,
  };
  
  const newCard = `
<!-- 2nd column -->
<div class="col col-sm-12 col-md-6 col-lg-4 h-100" id=${taskData.id} >
  <div class="card">
    <div class="card-header d-flex justify-content-end gap-2">
      <button type="button" class="btn btn-success"><i class="fa-solid fa-pen-to-square fa-shake" style="color: #000000;"></i></button>
      <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash fa-bounce" style="color: #000000;"></i></button>
    </div>
    <div class="card-body">
      <img
        class="card-img-top custom-image"
        src=${taskData.imageUrl}
        alt="..."
      />
      <h5 class="card-title mt-3 fw-bolder text-primary">${taskData.taskTitle}</h5>
      <p class="card-text">
        ${taskData.taskDescription}
      </p>
      <a href="#" class="btn btn-primary"> ${taskData.taskType}</a>
    </div>
  </div>
</div>
`;
  
  taskContainer.insertAdjacentHTML("beforeend", newCard);

};
