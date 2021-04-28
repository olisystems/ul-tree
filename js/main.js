const data = {
  Parent: {
    img: "father.png",
    name: "Jan Doe",
    age: "50",
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
  }
};

// get items in the object
const getItems = (items) => {
  for (const item in items) {
    markupArray.push(`<li> ${item}`);
    // fetch the parent object
    let details = items[item];
    getDetails(details);
    // push the closing tag for parent
    markupArray.push("</li>");
  }
};

// get details
const getDetails = (details) => {
  // iterate over the detail items of object
  for (const detail in details) {
    // fetch the value of each item

    if (detail == "img") {
      markupArray.push(
        `<img src="./img/${details[detail]}" alt="${details[detail]}">`
      );
    } else {
      markupArray.push(`<span> ${details[detail]} </span>`);
    }
  }
};

// call the function on page load
window.onload = () => {
  createList(data);
  markupArray.push("</ul>");
  console.log(markupArray);
  $("#list").html(markupArray.join(""));
};
