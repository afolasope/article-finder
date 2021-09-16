import fetchBook from "./fetchBooks.js";
import { get } from "./getElement.js";
import displayBooks from "./displayBooks.js";

const baseUrl = "https://www.googleapis.com/books/v1/volumes?q=";

const form = get(".search-form");
const input = get('[name="book"]');

// function debounce(func, wait = 20, immediate = true) {
//     var timeout;
//     return function () {
//       var context = this,
//         args = arguments;
//       var later = function () {
//         timeout = null;
//         if (!immediate) func.apply(context, args);
//       };
//       var callNow = immediate && !timeout;
//       clearTimeout(timeout);
//       timeout = setTimeout(later, wait);
//       if (callNow) func.apply(context, args);
//     };
//   }

if (form && input) {
  form.addEventListener("keyup", function (e) {
    // e.preventDefault()
    const value = input.value;
    console.log(value);
    if (!value) return;
    const newUrl = `${baseUrl}${value}`;
    // displayBooks(newUrl)
    displayBooks(newUrl);
  });
}
