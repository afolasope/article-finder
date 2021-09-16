import { get } from "./getElement.js";
const loading = get(".loading");
export const hideLoading = function (showLoader) {
  if (!showLoader) return;
  loading.classList.add("hide");
};

export const showLoading = function (showLoader) {
  if (!showLoader) return;
  loading.classList.remove("hide");
};
