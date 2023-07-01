const taskContainer = document.querySelector(".task_container");
const globalStore = []; //  This is array of object

const generateNewCard = (taskData) => `
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

const loadInitialCardData = () => {
  // 1. Local storage to get Listis card data
  const getCardData = localStorage.getItem("Listis");

  // 2. Convert to normal object - Inverse of stringify -> parse {key,value}
  const { cards } = JSON.parse(getCardData);

  // 3. Loop over the array of task objects to create HTML cards and then inject them into the DOM
  cards.map((cardObject) => {
    // For each cardObject, this code will run
    taskContainer.insertAdjacentHTML("beforeend", generateNewCard(cardObject));

    // 4. Update our global store
    globalStore.push(cardObject);
  });
};

const saveChanges = () => {
  const taskData = {
    id: `${Date.now()}`,
    imageUrl: document.getElementById("imageurl").value,
    taskTitle: document.getElementById("tasktitle").value,
    taskType: document.getElementById("tasktype").value,
    taskDescription: document.getElementById("taskdescription").value,
  };

  // Push new card next to the previous element
  taskContainer.insertAdjacentHTML("beforeend", generateNewCard(taskData));

  // Update our global store
  globalStore.push(taskData);

  // Save the updated card data to localStorage
  localStorage.setItem("Listis", JSON.stringify({ cards: globalStore }));
};

// Not same with id imageurl
// Document is the parent of html
// Not same with id imageurl with key
// Key value pairs -> ID should unique
// ${DYNAMIC CHANGE OF DATA} -> Dynamic render of data/value
// Date.now() -> UNIQUE ID
// BACKTICK` -> Safe side to use, no logic
// ${ -> MEANS ITS VALUE CHANGES TOO FREQUENTLY NOTHING ELSE}

// Click saveChanges -> This code(html) wil be changed
// id=${taskData.id} -> Not using here Later needed
// Backtick for multiline html codes -> No braces should there

//  Unique id -> Listis -> Without this other local can may appear to my site or local
//  ashikur this is the key, and json take always key value pair

//   const numbers = [4, 9, 16, 25];
// document.getElementById("demo").innerHTML = numbers.map(Math.sqrt);
// Within map cardObject, opeatation on cards not from generateNewCard

  //  const { cards } = JSON.parse(getCardData);
  // -> Alternative
  // const parsedCardData = JSON.parse(getCardData);
  // Use empty array as default if cards is undefined -> The optional chaining operator (?.)
  // const cards = parsedCardData?.cards || [];


