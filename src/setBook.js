import fetchBook from "./fetchBooks.js";

const setBookDetails = async function (url) {
  const data = await fetchBook(url);
  const info = await data.items;
  const bookData = info.map((item) => {
    const { id } = item;
    const {
      volumeInfo: {
        imageLinks: { smallThumbnail: image },
      },
    } = item;
    const { selfLink } = item;
    const {
      volumeInfo: { title },
    } = item;
    let {
      volumeInfo: { authors },
    } = item;
    if (authors === undefined) {
      authors = ["Unknown"];
    }
    authors = authors[0];
    return {
      id,
      image,
      selfLink,
      title,
      authors,
    };
  });
  return bookData;
};

export default setBookDetails;
