export function scrollToAnchor(hash, offset) {
  const id = hash.replace('#', '');
  const element = document.getElementById(id);
  if (element) {
    var position = window.scrollY + element.getBoundingClientRect().top;
    window.scrollTo(0, position - offset);
  }
}

export default function(offset=0) {
  document.addEventListener('click', mouseEvent => {
    const { hash, pathname } = mouseEvent.target;
    if (hash) {
      if (window.location.pathname === pathname) {
        mouseEvent.preventDefault()
        if (window.location.hash === hash) {
          scrollToAnchor(hash, offset);
        }
        else {
          window.location.hash = hash;
        }
      }
    }
  });

  window.onhashchange = () => {
    scrollToAnchor(window.location.hash, offset);
  };

  if (window.location.hash) {
    scrollToAnchor(window.location.hash, offset);
  }
}
