/** Lock body scroll without layout shift when the scrollbar disappears. */
export function lockBodyScroll() {
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  const { body } = document;
  const html = document.documentElement;

  body.dataset.scrollLocked = "true";
  body.style.overflow = "hidden";
  html.style.overflow = "hidden";

  if (scrollbarWidth > 0) {
    body.style.paddingRight = `${scrollbarWidth}px`;
    // Keep sticky header aligned too
    document.querySelectorAll<HTMLElement>("[data-scroll-lock-compensate]").forEach((el) => {
      el.style.paddingRight = `${scrollbarWidth}px`;
    });
  }
}

export function unlockBodyScroll() {
  const { body } = document;
  const html = document.documentElement;

  body.style.overflow = "";
  html.style.overflow = "";
  body.style.paddingRight = "";
  delete body.dataset.scrollLocked;

  document.querySelectorAll<HTMLElement>("[data-scroll-lock-compensate]").forEach((el) => {
    el.style.paddingRight = "";
  });
}
