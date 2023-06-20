// todo: Add item
// todo: remove
// todo: clear
// todo: filter
// todo: add localStorage
// todo: click on an item to put into "edit mode"
// todo: update
// todo: Deploy to Netlify

const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const allRemoveItem = document.querySelectorAll(".remove-item");
// const itemForm = document.getElementById("item-form");

function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  // Validate Input
  if (newItem === "") {
    alert("Please add an item");
    return;
  }
  //   console.log("success");
  //* Create List Item
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));
  const button = createButton("remove-item btn-link text-red");
  li.appendChild(button);
  itemList.appendChild(li);

  itemInput.value = "";
  //   console.log(li);
}

function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;
  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}

function removeItem(e) {
  console.log(e.target);
  console.log(itemList);
  console.log(allRemoveItem);
}

//* 这里的 e.target 已经显示了新添加的项目名称了
// *这里的itemList 已经显示了新添加的子元素了
// todo: 这里我有点不明白？那个 allRemoveItem 不应该是五个吗？ 为什么只有四个？

// * Event Listeners
itemForm.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);

//
