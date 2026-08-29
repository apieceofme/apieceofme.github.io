// A Piece of Me
// Small interactions for the portfolio


const notes = document.querySelectorAll(".floating-note");


let angle = 0;


function floatNotes() {

  angle += 0.008;

  notes.forEach((note, index) => {

    const movement =
      Math.sin(angle + index * 2) * 5;

    note.style.transform =
      `translateY(${movement}px)`;

  });

  requestAnimationFrame(floatNotes);

}


floatNotes();


// Mobile navigation


const menuButton =
  document.querySelector(".menu-button");

const navigation =
  document.querySelector(".navigation");


menuButton.addEventListener("click", () => {

  const open =
    navigation.classList.toggle("mobile-open");

  menuButton.setAttribute(
    "aria-expanded",
    open
  );

});
