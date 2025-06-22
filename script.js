let input = document.querySelector("#inp");
let listContainer = document.querySelector("#list-container");
let addBtn = document.querySelector("#addBtn");

let editBtn = listContainer.querySelector("#edit")
//add task
addBtn.addEventListener("click", () => {
    if (input.value.trim() === "") return;
    let li = document.createElement("li");
    li.innerHTML = `
             <span class="task-text">${input.value}</span>
                 <div class="buttons">
                        <button class="edit">✏️</button>
                        <button  class="remove">❌</button>
                </div>`;
    //remove task
    listContainer.appendChild(li);
    let delBtn = li.querySelector(".remove");

    input.value = "";


    delBtn.addEventListener("click", () => {
        li.remove();
    })
    // Edit task
    let editBtn = li.querySelector(".edit");
    let span = li.querySelector("span");
    editBtn.addEventListener("click", () => {
        let newText = prompt("Edit Task ", span.textContent);
        if (newText !== null && newText.trim() !== "") {
            span.textContent = newText;
        }
    })


});

