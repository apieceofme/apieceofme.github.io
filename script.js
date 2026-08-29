const body = document.body;

const theme = document.getElementById("theme");

const facts = [

  [
    "Honey never really spoils.",
    "Archaeologists have found edible honey in ancient Egyptian tombs."
  ],

  [
    "Bananas are berries, but strawberries aren't.",
    "Botanically, berries are fruits that develop from one flower with one ovary."
  ],

  [
    "Octopuses have three hearts.",
    "Two pump blood to the gills and one pumps it around the body."
  ],

  [
    "A day on Venus is longer than its year.",
    "Venus takes about 243 Earth days to rotate but about 225 to orbit the Sun."
  ],

  [
    "Oxford University is older than the Aztec Empire.",
    "Teaching at Oxford dates back to at least the late 11th century."
  ]

];


let factIndex = 0;


document
  .getElementById("shuffle")
  .addEventListener("click", () => {

    factIndex++;

    if (factIndex >= facts.length) {
      factIndex = 0;
    }

    document.getElementById("fact").textContent =
      facts[factIndex][0];

    document.getElementById("factNote").textContent =
      facts[factIndex][1];

  });



/* DARK / LIGHT MODE */

theme.addEventListener("click", () => {

  body.classList.toggle("light");

  theme.textContent =
    body.classList.contains("light")
      ? "●"
      : "◐";

  localStorage.setItem(
    "museumTheme",
    body.classList.contains("light")
      ? "light"
      : "dark"
  );

});


/* REMEMBER THEME */

if (
  localStorage.getItem("museumTheme") === "light"
) {

  body.classList.add("light");

  theme.textContent = "●";

}



/* SMOOTH MOUSE EFFECT */

const dot = document.querySelector(".cursor-dot");

if (
  dot &&
  window.matchMedia("(pointer:fine)").matches
) {

  document.addEventListener("mousemove", (event) => {

    dot.style.transform =
      `translate(${event.clientX - 4}px, ${event.clientY - 4}px)`;

  });

}
