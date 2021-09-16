import setBookDetails from "./setBook.js";
import { get } from "./getElement.js";
const sectionCenter = get(".section-center");

const displayBooks = async function (url) {
      if (sectionCenter) {
    sectionCenter.classList.add("hide");
    const data = await setBookDetails(url);
    const display = data
      .map((item) => {
        return ` <div class="book-info">
          <a href="single-book.html
          ">
            <article class="book" data-id="${item.selfLink}">
              <img src="${item.image}" alt="" />
            </article>
          </a>
          <div class="book-info__text">
            <p><b>TITLE:</b> <span>${item.title}</span></p>
            <p><b>AUTHOR:</b> <span>${item.authors}</span></p>
          </div>
        </div>`;
      })
      .join("");
    sectionCenter.classList.remove("hide");

    sectionCenter.innerHTML = display;
  };

}
export default displayBooks;
