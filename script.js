/* =========================================================
   RITUL'S DIGITAL MUSEUM
   INTERACTION + NAVIGATION ENGINE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------------------------------
       ELEMENTS
    ----------------------------------------------------- */

    const body = document.body;

    const searchOpen = document.getElementById("searchOpen");
    const searchClose = document.getElementById("searchClose");
    const searchOverlay = document.getElementById("searchOverlay");
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");

    const themeToggle = document.getElementById("themeToggle");

    const menuButton = document.getElementById("menuButton");
    const mobileMenu = document.getElementById("mobileMenu");
    const mobileClose = document.getElementById("mobileClose");


    /* -----------------------------------------------------
       MOBILE MENU
    ----------------------------------------------------- */

    if (menuButton && mobileMenu) {
        menuButton.addEventListener("click", () => {
            mobileMenu.classList.add("active");
            body.classList.add("menu-open");
        });
    }

    if (mobileClose && mobileMenu) {
        mobileClose.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
            body.classList.remove("menu-open");
        });
    }

    document.querySelectorAll(".mobile-menu a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
            body.classList.remove("menu-open");
        });
    });


    /* -----------------------------------------------------
       SEARCH
    ----------------------------------------------------- */

    if (searchOpen && searchOverlay) {
        searchOpen.addEventListener("click", () => {
            searchOverlay.classList.add("active");

            setTimeout(() => {
                if (searchInput) searchInput.focus();
            }, 200);
        });
    }

    if (searchClose && searchOverlay) {
        searchClose.addEventListener("click", () => {
            searchOverlay.classList.remove("active");

            if (searchInput) {
                searchInput.value = "";
            }

            if (searchResults) {
                searchResults.innerHTML = "";
            }
        });
    }


    /* -----------------------------------------------------
       SEARCH DATA
    ----------------------------------------------------- */

    const searchableContent = [

        {
            title: "The strange comfort of starting over",
            category: "Writing",
            description: "An essay about beginnings, uncertainty and starting again.",
            link: "article.html"
        },

        {
            title: "Building useful things with words",
            category: "Work",
            description: "Editorial, SEO and B2B/B2C content work.",
            link: "#work"
        },

        {
            title: "A website that feels like a place",
            category: "Digital",
            description: "The experiment that eventually became this museum.",
            link: "#work"
        },

        {
            title: "Making complicated things understandable",
            category: "Strategy",
            description: "Marketing, research, outreach and digital experiments.",
            link: "#work"
        },

        {
            title: "Technology, people and the spaces between",
            category: "Writing",
            description: "Long-form writing and research-driven pieces.",
            link: "#work"
        },

        {
            title: "What if a website could feel like a room?",
            category: "Ideas",
            description: "An unfinished thought from the idea archive.",
            link: "#ideas"
        },

        {
            title: "A list of things I want to understand before I'm 30",
            category: "Ideas",
            description: "A growing list of questions worth exploring.",
            link: "#ideas"
        },

        {
            title: "Making an archive of ordinary days",
            category: "Ideas",
            description: "An idea about preserving ordinary moments.",
            link: "#ideas"
        },

        {
            title: "Why do we keep things that have no practical use?",
            category: "Ideas",
            description: "A question about objects, memories and meaning.",
            link: "#ideas"
        },

        {
            title: "Random information",
            category: "Curiosity",
            description: "Small things worth knowing simply because they are interesting.",
            link: "#random"
        },

        {
            title: "The Digital Museum of Me",
            category: "Personal Archive",
            description: "Objects, influences, memories and curiosities.",
            link: "#about"
        }

    ];


    /* -----------------------------------------------------
       SEARCH FUNCTION
    ----------------------------------------------------- */

    function performSearch(query) {

        if (!searchResults) return;

        query = query.trim().toLowerCase();

        if (!query) {
            searchResults.innerHTML = "";
            return;
        }

        const results = searchableContent.filter(item => {

            return (
                item.title.toLowerCase().includes(query) ||
                item.category.toLowerCase().includes(query) ||
                item.description.toLowerCase().includes(query)
            );

        });

        if (results.length === 0) {

            searchResults.innerHTML = `
                <div class="search-empty">
                    <span>NOTHING FOUND</span>
                    <strong>Maybe the thing you're looking for hasn't been collected yet.</strong>
                </div>
            `;

            return;
        }

        searchResults.innerHTML = results.map(item => `

            <a href="${item.link}" class="search-result">

                <span>${item.category}</span>

                <strong>${item.title}</strong>

                <p>${item.description}</p>

                <i>↗</i>

            </a>

        `).join("");

        document.querySelectorAll(".search-result").forEach(result => {

            result.addEventListener("click", () => {

                if (searchOverlay) {
                    searchOverlay.classList.remove("active");
                }

            });

        });

    }

    if (searchInput) {
        searchInput.addEventListener("input", () => {
            performSearch(searchInput.value);
        });
    }


    /* -----------------------------------------------------
       DARK / LIGHT MODE
    ----------------------------------------------------- */

    const savedTheme = localStorage.getItem("museum-theme");

    if (savedTheme === "light") {
        body.classList.add("light-mode");
    }

    if (themeToggle) {

        themeToggle.addEventListener("click", () => {

            body.classList.toggle("light-mode");

            const isLight =
                body.classList.contains("light-mode");

            localStorage.setItem(
                "museum-theme",
                isLight ? "light" : "dark"
            );

        });

    }


    /* -----------------------------------------------------
       WORK FILTER
    ----------------------------------------------------- */

    const filters = document.querySelectorAll(".filter");
    const workItems = document.querySelectorAll(".work-item");

    filters.forEach(filter => {

        filter.addEventListener("click", () => {

            filters.forEach(item => {
                item.classList.remove("active");
            });

            filter.classList.add("active");

            const selected =
                filter.dataset.filter;

            workItems.forEach(item => {

                const category =
                    item.dataset.category;

                if (
                    selected === "all" ||
                    category === selected
                ) {

                    item.style.display = "";

                    setTimeout(() => {
                        item.classList.remove("filtered-out");
                    }, 10);

                } else {

                    item.classList.add("filtered-out");

                    setTimeout(() => {
                        item.style.display = "none";
                    }, 250);

                }

            });

        });

    });


    /* -----------------------------------------------------
       IDEA INTERACTIONS
    ----------------------------------------------------- */

    const ideas = document.querySelectorAll(".idea-row");

    const ideaDetails = [

        {
            title: "What if a website could feel like a room?",
            text: "A digital space doesn't have to behave like a filing cabinet. It can have atmosphere, objects, corners, discoveries and places where you simply want to linger."
        },

        {
            title: "A list of things I want to understand before I'm 30.",
            text: "Not achievements. Not a checklist. Just questions about people, work, creativity, money, relationships, the world and myself."
        },

        {
            title: "Making an archive of ordinary days.",
            text: "A collection of completely ordinary moments. The kind of things we usually forget because nothing dramatic happened."
        },

        {
            title: "Why do we keep things that have no practical use?",
            text: "Old tickets. Notes. Broken objects. Screenshots. Gifts. Tiny things that somehow become containers for entire memories."
        },

        {
            title: "Designing a digital place for unfinished thoughts.",
            text: "A place where ideas don't have to become businesses, projects or accomplishments. They can simply remain ideas."
        }

    ];


    ideas.forEach((idea, index) => {

        idea.addEventListener("click", () => {

            const detail = ideaDetails[index];

            if (!detail) return;

            openMuseumModal(
                "UNFINISHED IDEA",
                detail.title,
                detail.text
            );

        });

    });


    /* -----------------------------------------------------
       WORK ITEMS
    ----------------------------------------------------- */

    const workLinks =
        document.querySelectorAll(".work-open");

    const workDetails = [

        {
            category: "CONTENT · WRITING",
            title: "Building useful things with words.",
            text: "A collection of editorial, SEO and B2B/B2C content work. This section is intentionally prepared as a portfolio placeholder and can later contain individual projects, published pieces, campaign work and selected writing."
        },

        {
            category: "DIGITAL · PERSONAL",
            title: "A website that feels like a place.",
            text: "This museum itself. A personal experiment in making an online portfolio feel less like a résumé and more like somewhere you can actually explore."
        },

        {
            category: "MARKETING · STRATEGY",
            title: "Making complicated things understandable.",
            text: "Campaigns, research, outreach and digital marketing experiments. Individual projects can be added here later."
        },

        {
            category: "EDITORIAL · LONGFORM",
            title: "Technology, people and the spaces between.",
            text: "Selected long-form writing and research-driven pieces. This is a placeholder for future published work."
        }

    ];


    workLinks.forEach((link, index) => {

        link.addEventListener("click", event => {

            event.preventDefault();

            const project = workDetails[index];

            if (!project) return;

            openMuseumModal(
                project.category,
                project.title,
                project.text
            );

        });

    });


    /* -----------------------------------------------------
       SMOOTH INTERNAL NAVIGATION
    ----------------------------------------------------- */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {

                event.preventDefault();
                return;

            }

            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            history.replaceState(
                null,
                "",
                targetId
            );

        });

    });


    /* -----------------------------------------------------
       SCROLL REVEAL
    ----------------------------------------------------- */

    const revealElements =
        document.querySelectorAll(
            ".room-card, .work-item, .idea-row, .featured-layout"
        );

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "is-visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

    revealElements.forEach(element => {
        observer.observe(element);
    });


    /* -----------------------------------------------------
       MUSEUM MODAL
    ----------------------------------------------------- */

    function createModal() {

        let modal =
            document.getElementById("museumModal");

        if (modal) return modal;

        modal = document.createElement("div");

        modal.id = "museumModal";

        modal.innerHTML = `

            <div class="museum-modal-backdrop"></div>

            <div class="museum-modal">

                <button
                    class="museum-modal-close"
                    aria-label="Close"
                >
                    CLOSE ×
                </button>

                <div class="museum-modal-content">

                    <span
                        class="museum-modal-category"
                        id="modalCategory">
                    </span>

                    <h2 id="modalTitle"></h2>

                    <p id="modalText"></p>

                    <div class="modal-bottom">
                        RITUL'S DIGITAL MUSEUM
                        <span>EXHIBIT / ONGOING</span>
                    </div>

                </div>

            </div>

        `;

        document.body.appendChild(modal);

        modal
            .querySelector(".museum-modal-backdrop")
            .addEventListener("click", closeModal);

        modal
            .querySelector(".museum-modal-close")
            .addEventListener("click", closeModal);

        return modal;

    }


    function openMuseumModal(category, title, text) {

        const modal = createModal();

        document.getElementById("modalCategory")
            .textContent = category;

        document.getElementById("modalTitle")
            .textContent = title;

        document.getElementById("modalText")
            .textContent = text;

        modal.classList.add("active");

        body.classList.add("modal-open");

    }


    function closeModal() {

        const modal =
            document.getElementById("museumModal");

        if (!modal) return;

        modal.classList.remove("active");

        body.classList.remove("modal-open");

    }


    /* -----------------------------------------------------
       ESCAPE KEY
    ----------------------------------------------------- */

    document.addEventListener("keydown", event => {

        if (event.key !== "Escape") return;

        if (searchOverlay) {
            searchOverlay.classList.remove("active");
        }

        if (mobileMenu) {
            mobileMenu.classList.remove("active");
        }

        closeModal();

        body.classList.remove("menu-open");

    });


    /* -----------------------------------------------------
       ARTICLE LINK
    ----------------------------------------------------- */

    const articleLink =
        document.querySelector('a[href="article.html"]');

    if (articleLink) {

        articleLink.addEventListener("click", event => {

            /*
             * If article.html exists, allow normal navigation.
             * This keeps the current featured article working.
             */

        });

    }


    /* -----------------------------------------------------
       BACK TO TOP
    ----------------------------------------------------- */

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {
            body.classList.add("has-scrolled");
        } else {
            body.classList.remove("has-scrolled");
        }

    });


});

const facts = [
    {
        fact: "Honey never really spoils.",
        explanation: "Archaeologists have found edible honey in ancient Egyptian tombs."
    },
    {
        fact: "Octopuses have three hearts.",
        explanation: "Two hearts pump blood to the gills, while the third pumps it to the rest of the body."
    },
    {
        fact: "Bananas are berries, but strawberries aren't.",
        explanation: "Botanically, bananas meet the definition of a berry, while strawberries are accessory fruits."
    },
    {
        fact: "A day on Venus is longer than its year.",
        explanation: "Venus takes about 243 Earth days to rotate once but only about 225 Earth days to orbit the Sun."
    },
    {
        fact: "Wombat poop is cube-shaped.",
        explanation: "Wombats produce cube-shaped droppings, which helps prevent them from rolling away."
    },
    {
        fact: "Your brain uses about 20% of your body's energy.",
        explanation: "Even though the brain makes up only a small portion of body weight, it has a remarkably high energy demand."
    },
    {
        fact: "Sharks are older than trees.",
        explanation: "Sharks have existed for hundreds of millions of years, appearing long before the first trees evolved."
    },
    {
        fact: "There are more possible chess games than atoms in the observable universe.",
        explanation: "The number of possible chess games is astronomically large, estimated to exceed 10^120."
    },
    {
        fact: "A group of flamingos is called a flamboyance.",
        explanation: "The wonderfully dramatic collective noun for flamingos is a flamboyance."
    },
    {
        fact: "Cleopatra lived closer to the Moon landing than to the construction of the Great Pyramid.",
        explanation: "Cleopatra lived around 2,500 years after the Great Pyramid was built and about 2,000 years before the Moon landing."
    }
];

const randomButton = document.getElementById("randomButton");
const randomFact = document.getElementById("randomFact");
const randomExplanation = document.getElementById("randomExplanation");

if (randomButton && randomFact && randomExplanation) {
    randomButton.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * facts.length);
        const selectedFact = facts[randomIndex];

        randomFact.textContent = selectedFact.fact;
        randomExplanation.textContent = selectedFact.explanation;
    });
}
