const data = {
  Parent: {
    img: "father.png",
    name: "Jan Doe",
    age: "50",
    children: [
      {
        child: {
          img: "child_1.png",
          name: "child 1",
          age: "25",
        },
      },
      {
        child: {
          img: "child_2.png",
          name: "child 2",
          age: "22",
          children: [
            {
              grandChild: {
                img: "child_3.png",
                name: "grand child 1",
                age: "12",
              },
            },
          ],
        },
      },
      {
        child: {
          img: "child_4.png",
          name: "child 3",
          age: "16",
          children: [
            {
              grandChild: {
                img: "child_5.png",
                name: "grand child 1",
                age: "18",
                children: [
                  {
                    grandgrandChild: {
                      img: "child_6.png",
                      name: "grand grand child 1",
                      age: "13",
                    },
                  },
                  {
                    grandgrandChild: {
                      img: "child_7.png",
                      name: "grand grand child 1",
                      age: "10",
                    },
                  },
                ],
              },
            },
          ],
        },
      },
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
  }
};

// get items in the object
const getItems = (items) => {
  for (const item in items) {
    markupArray.push(`<li> <div class="test"><span>${item}</span>`);
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
    } else if (detail == "children") {
      markupArray.push("</div><ul>");
      details[detail].forEach((element) => {
        getItems(element);
      });

      markupArray.push("</ul>");
    } else {
      markupArray.push(`<span> ${details[detail]} </span>`);
    }
  }
};

// call the function on page load
window.onload = () => {
  createList(data);
  markupArray.push("</ul>");
  $("#list").html(markupArray.join(""));
};
