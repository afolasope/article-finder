import "./toggleLoading.js";
import { hideLoading, showLoading } from "./toggleLoading.js";
const fetchBook = async function (url, showLoader = true) {
  try {
    showLoading(showLoader);
    const response = await (await fetch(url)).json();
    hideLoading(showLoader);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export default fetchBook;
