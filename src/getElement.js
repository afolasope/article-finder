export const get = function (element) {
  const selection = document.querySelector(element);
  if (!selection) return;
  return selection;
};
