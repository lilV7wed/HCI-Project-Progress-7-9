var reservation = document.querySelector(".resv");

var resvBtn = document.querySelector("#resvBtn");

var resvClose = document.querySelector("#resvClose");

if (resvBtn) {
  resvBtn.addEventListener("click", function () {
    reservation.style.visibility = "visible";
  });
}
if (resvClose) {
  resvClose.addEventListener("click", function () {
    reservation.style.visibility = "hidden";
  });
}
// if (reservation) {
//   reservation.addEventListener('click', function() {
//       reservation.style.visibility = "hidden";
//   });
// }

(function () {
  const ITEMS = ["Pants", "Shirt", "Dress", "Doll", "Bed Sheet", "Bed Cover"];
  const rowsContainer = document.getElementById("rowsContainer");
  const orderForm = document.getElementById("orderForm");

  // Create a row element. Optionally pass selected item and qty.
  function createRow(selected = "", qty = 1) {
    const row = document.createElement("div");
    row.className = "row";

    // build select HTML
    const select = document.createElement("select");
    select.className = "inputItem";
    select.name = "item[]";
    select.required = true;
    ITEMS.forEach((opt) => {
      const o = document.createElement("option");
      o.value = opt;
      o.textContent = opt;
      select.appendChild(o);
    });
    if (selected) select.value = selected;

    // qty input
    const qtyInput = document.createElement("input");
    qtyInput.className = "qtyInput";
    qtyInput.type = "number";
    qtyInput.name = "qty[]";
    qtyInput.min = "1";
    qtyInput.value = String(qty);
    qtyInput.required = true;
    qtyInput.style.width = "70px";

    // buttons container
    const controls = document.createElement("div");
    controls.className = "controls";

    const addBtn = document.createElement("button");
    addBtn.type = "button";
    addBtn.className = "add";
    addBtn.title = "Add a new row below";
    addBtn.textContent = "+";

    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.className = "remove";
    removeBtn.title = "Remove this row";
    removeBtn.textContent = "−";

    controls.appendChild(addBtn);
    controls.appendChild(removeBtn);

    row.appendChild(select);
    row.appendChild(qtyInput);
    row.appendChild(controls);

    // Add event listeners

    // Insert a new row *below this row*
    addBtn.addEventListener("click", () => {
      const newRow = createRow(); // empty default row
      // insert after current row
      row.after(newRow);
      // optionally focus the new select
      newRow.querySelector("select").focus();
    });

    // Remove this row. If it's the only row, clear its values instead of removing.
    removeBtn.addEventListener("click", () => {
      if (rowsContainer.children.length > 1) {
        row.remove();
      } else {
        // keep at least one row visible; just reset it
        select.value = ITEMS[0];
        qtyInput.value = 1;
        select.focus();
      }
    });

    return row;
  }

  // initialize with one row
  rowsContainer.appendChild(createRow());

  // handle form submit: collect arrays and print them
  orderForm.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const formData = new FormData(orderForm);
    const items = formData.getAll("item[]");
    const qtys = formData.getAll("qty[]");

    // pair them up
    const order = items
      .map((it, i) => ({ item: it, qty: Number(qtys[i] || 0) }))
      .filter((r) => r.item && r.qty > 0);

    console.log("Order payload:", order);
    alert("Your Order Has Been Sent!");

    // if you want to send to server:
    // fetch('/submit', { method:'POST', body: new URLSearchParams(formData) })
  });
})();

function myFunction() {
  const x = document.getElementById("myDate");
  let defaultVal = x.defaultValue;
  let currentVal = x.value;

  if (defaultVal == currentVal) {
    document.getElementById("demo").innerHTML =
      "Default value and current value is the same: " +
      x.defaultValue +
      " and " +
      x.value +
      "<br>Change the value of the date field to see the difference!";
  } else {
    document.getElementById("demo").innerHTML =
      "The default value was: " +
      defaultVal +
      "<br>The new, current value is: " +
      currentVal;
  }
}
