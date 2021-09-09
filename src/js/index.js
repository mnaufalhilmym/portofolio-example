document.addEventListener("DOMContentLoaded", () => {
  const introText = document.getElementById("introductory-text");

  let counter = 1;
  let w;

  function setIntroTextTransform() {
    let size;

    if (w >= 1280) {
      size = counter * 2.5;
    } else if (w >= 1024) {
      size = counter * 2.25;
    } else if (w >= 768) {
      size = counter * 1.75;
    } else if (w >= 640) {
      size = counter * 1.25;
    } else {
      size = counter;
    }

    introText.style.transform = `translateY(-${size}rem)`;
  }

  setInterval(() => {
    w = window.innerWidth;
    setIntroTextTransform();
    
    if (counter < 3) {
      ++counter;
    } else {
      counter = 0;
    }
  }, 3000);

  window.addEventListener("resize", () => {
    const newW = window.innerWidth;

    if (newW >= 1280 && w >= 1280) return;
    if (newW <= 1280 && newW >= 768 && w <= 1280 && newW >= 768) return;
    if (newW <= 768 && newW >= 640 && w <= 768 && w >= 640) return;
    if (newW <= 640 && w <= 640) return;

    w = newW;
    setIntroTextTransform();
  });
});
