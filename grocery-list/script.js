const input = document.querySelector(".input");
const submitBtn = document.querySelector(".submit-btn");
const form = document.querySelector(".form");
const items = document.querySelector(".items");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputVal = input.value;
  addItem(inputVal);
  input.value = "";
});

const addItem = (value) => {
  const item = document.createElement("div");
  item.classList.add("item");

  const name = document.createElement("p");
  name.textContent = value;

  const delBtn = document.createElement("button");
  delBtn.textContent = "delete";
  delBtn.classList.add("del-btn");

  const updateBtn = document.createElement("button");
  updateBtn.textContent = "update";
  updateBtn.classList.add("update");

  delBtn.addEventListener("click", () => {
    item.remove();
  });
  updateBtn.addEventListener("click", () => {
    const newText = prompt("Enter new text:", name.textContent);
    if (newText !== null) {
      name.textContent = newText;
    }
  });
  item.appendChild(name);
  item.appendChild(delBtn);
  item.appendChild(updateBtn);
  items.appendChild(item);
};
