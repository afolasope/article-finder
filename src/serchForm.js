import fetchBook from "./fetchBooks.js";
import { get } from "./getElement.js";
import displayBooks from "./displayBooks.js";

const URL = "https://www.googleapis.com/books/v1/volumes?q=i";
const baseUrl = "https://www.googleapis.com/books/v1/volumes?q=";

const form = get(".search-form");
const input = get('[name="book"]');

const debounce = (func, delay) => {
  let debounceTimer
  return function() {
      const context = this
      const args = arguments
          clearTimeout(debounceTimer)
              debounceTimer
          = setTimeout(() => func.apply(context, args), delay)
  }
}

if (form && input) {
  form.addEventListener("keyup", function (e) {
    // e.preventDefault()
    const value = input.value;
    console.log(value);
    if (!value) {
      displayBooks(URL)
    };
    const newUrl = `${baseUrl}${value}`;
    // displayBooks(newUrl)
    debounce(displayBooks(newUrl),4000);
  });
}
