import { get } from "./src/getElement.js";
import "./src/serchForm.js";
import displayBooks from "./src/displayBooks.js";
const URL = "https://www.googleapis.com/books/v1/volumes?q=i";

window.addEventListener("load", async () => {
    const sectionCenter = get(".section-center");
    const container = get('.single-book__info')
  if (sectionCenter) {
    sectionCenter.addEventListener("click", async function (e) {
    //   e.preventDefault();
        const id = e.target.parentElement.dataset.id;
        console.log(id);
        localStorage.setItem("selfLink", id);
    });
  }

  await displayBooks(URL);
});

