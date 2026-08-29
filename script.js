/* =========================================
   RITUL'S DIGITAL MUSEUM
========================================= */


/* =========================================
   DARK / LIGHT MODE
========================================= */

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("museumTheme");

if (savedTheme === "light") {

    document.body.classList.add("light");

    themeToggle.textContent = "●";

}


themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("light");

    const isLight =
        document.body.classList.contains("light");

    themeToggle.textContent =
        isLight ? "●" : "◐";

    localStorage.setItem(
        "museumTheme",
        isLight ? "light" : "dark"
    );

});


/* =========================================
   MOBILE MENU
========================================= */

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");

const mobileClose =
    document.getElementById("mobileClose");


menuButton.addEventListener("click", function () {

    mobileMenu.classList.add("open");

});


mobileClose.addEventListener("click", function () {

    mobileMenu.classList.remove("open");

});


document
    .querySelectorAll(".mobile-menu a")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            mobileMenu.classList.remove("open");

        });

    });


/* =========================================
   SEARCH
========================================= */

const searchOpen =
    document.getElementById("searchOpen");

const searchClose =
    document.getElementById("searchClose");

const searchOverlay =
    document.getElementById("searchOverlay");

const searchInput =
    document.getElementById("searchInput");

const searchResults =
    document.getElementById("searchResults");


const searchableContent = [

    {
        title: "What's in my mind?",
        category: "WRITING",
        url: "#mind"
    },

    {
        title: "The strange comfort of starting over.",
        category: "ESSAY",
        url: "article.html"
    },

    {
        title: "Things I've made.",
        category: "WORK",
        url: "#work"
    },

    {
        title: "Ideas in my mind.",
        category: "IDEAS",
        url: "#ideas"
    },

    {
        title: "Thought Museum.",
        category: "THOUGHTS",
        url: "#thoughts"
    },

    {
        title: "Artwork and visual archive.",
        category: "ART",
        url: "#art"
    },

    {
        title: "Random information.",
        category: "CURIOSITY",
        url: "#random"
    },

    {
        title: "The Digital Museum of Me.",
        category: "ABOUT",
        url: "#about"
    },

    {
        title: "Newsletter.",
        category: "MAIL ROOM",
        url: "#"
    }

];


searchOpen.addEventListener("click", function () {

    searchOverlay.classList.add("open");

    setTimeout(function () {

        searchInput.focus();

    }, 100);

});


searchClose.addEventListener("click", function () {

    searchOverlay.classList.remove("open");

    searchInput.value = "";

    searchResults.innerHTML = "";

});


searchInput.addEventListener("input", function () {

    const query =
        searchInput.value
            .toLowerCase()
            .trim();


    if (!query) {

        searchResults.innerHTML = "";

        return;

    }


    const results =
        searchableContent.filter(function (item) {

            return (
                item.title
                    .toLowerCase()
                    .includes(query)
                ||
                item.category
                    .toLowerCase()
                    .includes(query)
            );

        });


    if (results.length === 0) {

        searchResults.innerHTML =
            "<p style='color:#888;font-family:DM Mono,monospace;font-size:10px;'>NOTHING FOUND. THE MUSEUM IS STILL COLLECTING.</p>";

        return;

    }


    searchResults.innerHTML =
        results.map(function (item) {

            return `
                <a href="${item.url}" class="search-result">
                    <strong>${item.title}</strong>
                    <small>${item.category} ↗</small>
                </a>
            `;

        }).join("");

});


/* =========================================
   WORK FILTER
========================================= */

const filters =
    document.querySelectorAll(".filter");

const workItems =
    document.querySelectorAll(".work-item");


filters.forEach(function (filter) {

    filter.addEventListener("click", function () {

        filters.forEach(function (button) {

            button.classList.remove("active");

        });

        filter.classList.add("active");


        const selected =
            filter.dataset.filter;


        workItems.forEach(function (item) {

            const category =
                item.dataset.category;


            if (
                selected === "all"
                ||
                category === selected
            ) {

                item.style.display = "grid";

            } else {

                item.style.display = "none";

            }

        });

    });

});


/* =========================================
   THOUGHT SHUFFLE
========================================= */

const shuffleThought =
    document.getElementById("shuffleThought");

const hiddenThoughts =
    document.querySelectorAll(".hidden-thought");


shuffleThought.addEventListener("click", function () {

    hiddenThoughts.forEach(function (thought) {

        if (
            thought.style.display === "block"
        ) {

            thought.style.display = "none";

        } else {

            thought.style.display = "block";

        }

    });


    shuffleThought.textContent =
        "COLLECTION UPDATED ↻";

});


/* =========================================
   RANDOM INFORMATION
========================================= */

const facts = [

    {
        title: "Honey never really spoils.",
        text: "Archaeologists have found edible honey in ancient Egyptian tombs."
    },

    {
        title: "Bananas are berries.",
        text: "Botanically speaking, bananas qualify as berries while strawberries do not."
    },

    {
        title: "Octopuses have three hearts.",
        text: "Two hearts pump blood toward the gills while another pumps it around the body."
    },

    {
        title: "A day on Venus is longer than its year.",
        text: "Venus takes roughly 243 Earth days to rotate but only about 225 Earth days to orbit the Sun."
    },

    {
        title: "Oxford is older than the Aztec Empire.",
        text: "Teaching at Oxford dates back to at least the late 11th century."
    },

    {
        title: "The Eiffel Tower changes size.",
        text: "Thermal expansion makes the iron structure expand and contract as temperatures change."
    },

    {
        title: "A group of flamingos is called a flamboyance.",
        text: "The wonderfully dramatic collective noun is one of the more memorable names in English."
    }

];


let currentFact = 0;


const randomFact =
    document.getElementById("randomFact");

const randomExplanation =
    document.getElementById("randomExplanation");

const randomButton =
    document.getElementById("randomButton");


randomButton.addEventListener("click", function () {

    currentFact++;

    if (currentFact >= facts.length) {

        currentFact = 0;

    }


    randomFact.textContent =
        facts[currentFact].title;

    randomExplanation.textContent =
        facts[currentFact].text;

});


/* =========================================
   NEWSLETTER PLACEHOLDER
========================================= */

const newsletterForm =
    document.getElementById("newsletterForm");

const newsletterMessage =
    document.getElementById("newsletterMessage");


newsletterForm.addEventListener("submit", function (event) {

    event.preventDefault();

    newsletterMessage.textContent =
        "You're on the imaginary list for now. Connect this form to your newsletter service when you're ready.";

});


/* =========================================
   CLOSE SEARCH WITH ESCAPE
========================================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        searchOverlay.classList.remove("open");

        mobileMenu.classList.remove("open");

    }

});


/* =========================================
   SUBTLE REVEAL ANIMATIONS
========================================= */

const revealElements =
    document.querySelectorAll(
        ".room-card, .work-item, .thought-card, .art-card, .idea-row"
    );


const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.08
        }

    );


revealElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(20px)";

    element.style.transition =
        "opacity .7s ease, transform .7s ease";

    revealObserver.observe(element);

});
