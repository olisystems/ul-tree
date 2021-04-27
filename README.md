# Nested UL - Tree View | Part 1

## Nested UI from JSON data and Tree view with pure CSS3

### 1. Creating Nested UI from JSON data

We will start with a simple data structure and then gradually move to the complex data structure. Let's consider the following simple data structure with a `Parent` and one `Child`:

```js
const data = {
  Parent: "Childa",
};
```

The `HTML` markup to create `UI` will look like the below snippet. For the sake of styling, we will use `span` elements nested inside each `li`.

```html
<ul>
  <li>Parent
    <ul>
      <li> <span> Child </span> </li>
    </ul>
  </li>
</ul>
```

Let's write some JavaScript code to create `HTML` the markup for the above data. We assume that there could be three data types in the data:

- Object
- String
- Array

In order to evaluate the above expressions, we will be using a [switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) statement with [jQuery](https://jquery.com/). We will use `$.type` to evaluate three cases, a mockup of the function is:

```js
const createList = (items) => {
  switch ($.type(items)) {
    case "object":
      console.log(items);
      break;
    case "string":
      console.log(items);
      break;
    case "array":
      console.log(items);
      break;
  }
}
```

We will start by calling `thecreateList` function. As we are dealing with the `JSON` data, we fall into the first case that is the `object` . So in this case, we will write another function `getItems` to iterate over the items of the object. As we know that there in our data object, there is only one item `Parent:'Child'` , so the function will return only one item `Parent`. The function will create a `li` parent item with nested `ul` for its children.

1. create `li` for the `Parent` with an opening `ul` tag for the children.
2. call the `createList` function for the value of `Parent` ( `Child` in this case).
3. as `Parent` is a string , we will fall under the string expression of `createList` the function that will just add the `li` tags for `Child`.
4. at the end of the iteration, we will push the closing tags.

```js
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
```

Our modified `createList` function will become:

```js
// evaluate expressions
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
      console.log(items);
      break;
  }
};
```

Next, we will create the main function to call the `createList` function and add a closing `</ul>` tag to the `markupArray`. Inside the main function, we will make use of the regular [Array.join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) function which will convert an array to a string. Let's create a div element `<div id="list"></div>` and set the contents to the concatenated string using the jQuery [html](https://api.jquery.com/html/) method.

```js
// call the function on page load
window.onload = () => {
  createList(data);
  markupArray.push("</ul>");
  $("#list").html(markupArray.join(""));
};
```

Summarily, we passed the data to the `createList` expression evaluation function that will call the `getItems` function as the data is of type `object`. The `getItems` function will iterate over the items of data and create a `li` for parent item and a nested `ul` list for the children. We will then pass each child to the evaluation function to check the type of children. At this point, the child is a string so we just add a `li` to the children `ul`.
