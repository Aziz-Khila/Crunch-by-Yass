/** Lock body scroll without layout shift when the scrollbar disappears. */
export function lockBodyScroll() {
  const { body } = document;
  if (body.dataset.scrollLocked === "true") return;

  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  const scrollY = window.scrollY;

  body.dataset.scrollLocked = "true";
  body.dataset.scrollY = String(scrollY);
  body.style.position = "fixed";
  body.style.top = `-${scrollY}px`;
  body.style.left = "0";
  body.style.right = "0";
  body.style.width = "100%";

  if (scrollbarWidth > 0) {
    body.style.paddingRight = `${scrollbarWidth}px`;
    document.querySelectorAll<HTMLElement>("[data-scroll-lock-compensate]").forEach((el) => {
      el.style.paddingRight = `${scrollbarWidth}px`;
    });
  }
}

export function unlockBodyScroll() {
  const { body } = document;
  if (body.dataset.scrollLocked !== "true") return;

  const scrollY = Number(body.dataset.scrollY || "0");

  body.style.position = "";
  body.style.top = "";
  body.style.left = "";
  body.style.right = "";
  body.style.width = "";
  body.style.paddingRight = "";
  delete body.dataset.scrollLocked;
  delete body.dataset.scrollY;

  document.querySelectorAll<HTMLElement>("[data-scroll-lock-compensate]").forEach((el) => {
    el.style.paddingRight = "";
  });

  window.scrollTo(0, scrollY);
}
