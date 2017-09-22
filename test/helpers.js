export function scrollTo(x, y) {
  window.scrollX = x;
  window.scrollY = y;
}

export function getBoundingClientRect() {
  let belowThis = false;
  const top = Array.from(document.body.children)
    .filter(element => {
      if (element === this) { belowThis = true; }
      return !belowThis;
    })
    .map(element => window.getComputedStyle(element).height)
    .reduce((sum, value) => sum + parseInt(value), 0);
  return {top: top - window.scrollY};
}
