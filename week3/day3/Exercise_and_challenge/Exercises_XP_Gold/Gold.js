// Exercise 1

// 1. عرض القيمة ديال option اللي مختار
const select = document.getElementById("genres");
const output = document.getElementById("output");

// إظهار القيمة مباشرة ملي تحمل الصفحة
output.textContent = "Selected: " + select.value;

// تحديث القيمة ملي يبدل المستخدم الاختيار
select.addEventListener("change", () => {
  output.textContent = "Selected: " + select.value;
});

// 2. نزيد option جديد "Classic"
const newOption = new Option("Classic", "classic");

// 3. نضيفو للـ select
select.appendChild(newOption);

// 4. نخلي "Classic" مختار by default
select.value = "classic";
output.textContent = "Selected: " + select.value;


// Exercise 2

// function removecolor()
function removecolor() {
  const select = document.getElementById("colorSelect");
  select.remove(select.selectedIndex);
}

// نربط الزر بالـ function
document.getElementById("removeBtn").addEventListener("click", removecolor);


// Exercise 3

// 1. Empty array for shopping list
let shoppingList = [];

// 2. Get root div
const root = document.getElementById("root");

// 3. Create form elements
const form = document.createElement("form");
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter item...";

const addBtn = document.createElement("button");
addBtn.textContent = "AddItem";
addBtn.type = "submit"; // باش يتفاعل مع form

// 4. Create ClearAll button
const clearBtn = document.createElement("button");
clearBtn.textContent = "ClearAll";
clearBtn.type = "button";

// 5. Create list display
const list = document.createElement("ul");

// Append elements to form and root
form.appendChild(input);
form.appendChild(addBtn);
root.appendChild(form);
root.appendChild(clearBtn);
root.appendChild(list);

// 6. Function to update DOM with shoppingList
function renderList() {
  list.innerHTML = ""; // مسح اللائحة قبل ما نعاود نرسمها
  shoppingList.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

// 7. addItem function
function addItem(event) {
  event.preventDefault(); // باش مايعيدش تحميل الصفحة
  const value = input.value.trim();
  if (value !== "") {
    shoppingList.push(value);
    input.value = "";
    renderList();
  }
}

// 8. clearAll function
function clearAll() {
  shoppingList = []; // نفرغ المصفوفة
  renderList(); // نفرغ اللائحة فالـ DOM
}

// 9. Event listeners
form.addEventListener("submit", addItem);
clearBtn.addEventListener("click", clearAll);
