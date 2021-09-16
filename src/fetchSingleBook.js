import fetchBook from "./fetchBooks.js";
import { get } from "./getElement.js";

const singleBook = async function () {
  const url = localStorage.getItem("selfLink");
  const response = await fetchBook(url, false);
  console.log(response);
  const {
    volumeInfo: {
      title,
      authors,
      pageCount,
      publishedDate: date,
      imageLinks: { large: img },
    },
  } = response;
  const author = authors[0];

  return { title, img, author, pageCount, date };
 
};

window.addEventListener("load", async () => {

  const container = get('.single-book')
  const details = await singleBook()
  console.log(details);
  container.innerHTML = `
  <div class="single-book__img">
  <img src='./img/book-small.jpg' alt="image" />
</div>
<div class="single-book__info">
  <article>
      <p><b>Title:</b> <span>${details.title}</span</p>
    <p><b>Author:</b><span>${details.author}</span</p>
    <p><b>Page count:</b><span>${details.pageCount}</span</p>
    <p><b>Publish date</b>:<span >${details.date}</span</p>
    <p><b>Description:</b> <span >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores repellat autem eligendi quae quo esse aliquam consequuntur tenetur voluptas. Quasi quia cumque, doloremque rerum earum impedit sapiente incidunt a esse.</span></p>
  </article>
</div>
  `
  
});

