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
    const anchor = mouseEvent.target.hash;
    if (anchor) {
      mouseEvent.preventDefault()
      if (window.location.hash === anchor) {
        scrollToAnchor(anchor, offset);
      }
      else {
        window.location.hash = anchor;
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
