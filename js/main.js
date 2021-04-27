const data = {
  Parent: {
    Child1: "Child 1",
    Child2: {Child21: "Child 21", Child22: "Child 22"},
    Child3: [
      "Child 31",
      "Child 32",
      { Child33: "Sub Child" },
      { Child4: ["Child 41", "Child 42", { Child43: "Sub Child" }] },
    ],
  },
};

// array to hold HTML tags
let markupArray = ["<ul>"];

// evaluate expressions
const createList = (items) => {
  switch ($.type(items)) {
    case "object":
      getItems(items);
      break;
    case "string":
      markupArray.push(`<li> <span> ${items} </span> </li>`);
      break;
    case "array":
      items.forEach((item) => {
        createList(item);
      });
      break;
  }
};

// get items in the object
const getItems = (items) => {
  for (const item in items) {
    // push li tags for parent
    // with nested opening ul tag for children
    markupArray.push(`<li> <a> ${item} </a> <ul>`);
    // evaluate expression for children
    createList(items[item]);
    // push closing tage
    markupArray.push("</ul></li>");
  }
};

// call the function on page load
window.onload = () => {
  createList(data);
  markupArray.push("</ul>");
  $("#list").html(markupArray.join(""));
};
