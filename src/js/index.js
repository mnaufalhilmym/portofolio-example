document.addEventListener("DOMContentLoaded", () => {
  const introText = document.getElementById("introductory-text");

  let counter = 1;

  function setIntroTextTransform() {
    const w = window.innerWidth;
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
    setIntroTextTransform();
    
    if (counter < 3) {
      ++counter;
    } else {
      counter = 0;
    }
  }, 3000);

  window.addEventListener("resize", () => {
    setIntroTextTransform();
  });
});
