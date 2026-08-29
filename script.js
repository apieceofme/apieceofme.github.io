document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       RITUL'S DIGITAL MUSEUM
       MASTER INTERACTION SCRIPT
       ===================================================== */

    const body = document.body;


    /* =====================================================
       ROOM ROUTES
       ===================================================== */

    const rooms = {
        "#mind": {
            label: "ROOM 01 · THE JOURNAL",
            title: "What's in my mind?",
            intro: "Essays, stories, observations and things I've been thinking about.",
            type: "writing"
        },

        "#work": {
            label: "ROOM 02 · WORK ARCHIVE",
            title: "Things I've made.",
            intro: "Writing, digital work, marketing experiments and projects.",
            type: "work"
        },

        "#ideas": {
            label: "ROOM 03 · UNFINISHED DEPARTMENT",
            title: "Ideas in my mind.",
            intro: "Questions, unfinished concepts and thoughts that haven't become anything yet.",
            type: "ideas"
        },

        "#thoughts": {
            label: "ROOM 04 · MICRO OBSERVATIONS",
            title: "Thought Museum.",
            intro: "Small observations collected from ordinary life.",
            type: "thoughts"
        },

        "#random": {
            label: "ROOM 05 · CURIOSITY CABINET",
            title: "Random information.",
            intro: "Things I find interesting for absolutely no practical reason.",
            type: "random"
        },

        "#about": {
            label: "ROOM 06 · PERSONAL ARCHIVE",
            title: "The Digital Museum of Me.",
            intro: "Objects, memories, influences, curiosities and pieces of a person.",
            type: "about"
        },

        "#contact": {
            label: "THE EXIT DESK",
            title: "Come say hello.",
            intro: "A little corner for messages, collaborations and conversations.",
            type: "contact"
        }
    };


    /* =====================================================
       CONTENT
       ===================================================== */

    const content = {

        writing: [
            {
                number: "001",
                category: "ESSAY · 7 MIN READ",
                title: "The strange comfort of starting over.",
                description: "Maybe beginnings aren't supposed to look impressive."
            },
            {
                number: "002",
                category: "OBSERVATION · 5 MIN READ",
                title: "Why ordinary days are the ones we forget.",
                description: "A small thought about memory and the moments we don't photograph."
            },
            {
                number: "003",
                category: "PERSONAL · 6 MIN READ",
                title: "Things I wish someone had told me earlier.",
                description: "A collection of lessons that arrived later than expected."
            },
            {
                number: "004",
                category: "THOUGHT · 4 MIN READ",
                title: "The internet is becoming too polished.",
                description: "On why imperfect little corners of the internet still matter."
            }
        ],

        work: [
            {
                number: "001",
                category: "CONTENT · WRITING",
                title: "Building useful things with words.",
                description: "Editorial, SEO and B2B/B2C content work."
            },
            {
                number: "002",
                category: "DIGITAL · PERSONAL",
                title: "A website that feels like a place.",
                description: "The experiment that became this digital museum."
            },
            {
                number: "003",
                category: "MARKETING · STRATEGY",
                title: "Making complicated things understandable.",
                description: "Campaigns, research, outreach and digital marketing."
            },
            {
                number: "004",
                category: "EDITORIAL · LONGFORM",
                title: "Technology, people and the spaces between.",
                description: "Long-form writing and research-driven pieces."
            }
        ],

        ideas: [
            {
                number: "IDEA 014",
                title: "What if a website could feel like a room?",
                description: "A website doesn't have to behave like a filing cabinet. It can have atmosphere, corners and things worth discovering."
            },
            {
                number: "IDEA 021",
                title: "A list of things I want to understand before I'm 30.",
                description: "Not achievements. Not a checklist. Just questions worth spending time with."
            },
            {
                number: "IDEA 033",
                title: "Making an archive of ordinary days.",
                description: "A collection of completely ordinary moments — the ones we usually forget."
            },
            {
                number: "IDEA 041",
                title: "Why do we keep things that have no practical use?",
                description: "Old tickets, notes, gifts and tiny objects that somehow contain entire memories."
            },
            {
                number: "IDEA 052",
                title: "A digital place for unfinished thoughts.",
                description: "A place where ideas don't have to become businesses or accomplishments."
            }
        ],

        thoughts: [
            {
                number: "THOUGHT 001",
                title: "Some places become special only after we've left them.",
                description: "Maybe nostalgia isn't really about the place. Maybe it's about who we were there."
            },
            {
                number: "THOUGHT 002",
                title: "We remember the feeling more accurately than the details.",
                description: "A strange thing about memory."
            },
            {
                number: "THOUGHT 003",
                title: "A room can remember a person.",
                description: "Objects stay where they were left. People don't."
            },
            {
                number: "THOUGHT 004",
                title: "Not every quiet day is an unproductive day.",
                description: "Sometimes nothing happening is exactly what was needed."
            }
        ],

        random: [
            {
                number: "FACT 001",
                title: "Octopuses have three hearts.",
                description: "Two pump blood toward the gills and one pumps it around the body."
            },
            {
                number: "FACT 002",
                title: "A cloud can weigh more than a million pounds.",
                description: "Clouds look weightless, but the water contained inside them can be surprisingly heavy."
            },
            {
                number: "FACT 003",
                title: "Bananas are berries. Strawberries aren't.",
                description: "Botany has apparently decided to make fruit unnecessarily confusing."
            },
            {
                number: "FACT 004",
                title: "The smell after rain has a name.",
                description: "Petrichor is the earthy scent associated with rainfall after a period of dry weather."
            }
        ],

        about: [
            {
                number: "OBJECT 001",
                title: "Books I underlined too much.",
                description: "A growing archive of sentences that stayed with me."
            },
            {
                number: "OBJECT 002",
                title: "Things I collect without meaning to.",
                description: "Screenshots, notes, ideas, tabs and strangely specific pieces of information."
            },
            {
                number: "OBJECT 003",
                title: "Things that influence me.",
                description: "People, films, websites, music, writing and tiny moments."
            },
            {
                number: "OBJECT 004",
                title: "Version 01 of me.",
                description: "Still becoming."
            }
        ]

    };


    /* =====================================================
       CREATE ROOM OVERLAY
       ===================================================== */

    function createRoomOverlay() {

        let overlay = document.getElementById("museumRoomOverlay");

        if (overlay) return overlay;

        overlay = document.createElement("div");

        overlay.id = "museumRoomOverlay";

        overlay.innerHTML = `
            <div class="room-overlay-backdrop"></div>

            <div class="room-overlay-panel">

                <button class="room-overlay-close">
                    CLOSE ×
                </button>

                <div class="room-overlay-inner">

                    <div class="room-overlay-label"></div>

                    <h2></h2>

                    <p class="room-overlay-intro"></p>

                    <div class="room-overlay-items"></div>

                </div>

            </div>
        `;

        document.body.appendChild(overlay);

        overlay
            .querySelector(".room-overlay-backdrop")
            .addEventListener("click", closeRoom);

        overlay
            .querySelector(".room-overlay-close")
            .addEventListener("click", closeRoom);

        return overlay;
    }


    /* =====================================================
       OPEN ROOM
       ===================================================== */

    function openRoom(roomId) {

        const room = rooms[roomId];

        if (!room) return;

        const overlay = createRoomOverlay();

        overlay.querySelector(".room-overlay-label")
            .textContent = room.label;

        overlay.querySelector("h2")
            .innerHTML = room.title.replace(
                /(\b(?:mind|made|Ideas|Museum|information|Me|hello)\b)/gi,
                "<em>$1</em>"
            );

        overlay.querySelector(".room-overlay-intro")
            .textContent = room.intro;

        const items =
            content[room.type] || [];

        const container =
            overlay.querySelector(".room-overlay-items");

        container.innerHTML = items.map((item, index) => {

            const isWriting =
                room.type === "writing";

            return `
                <article class="room-content-item">

                    <span class="room-item-number">
                        ${item.number}
                    </span>

                    <div class="room-item-main">

                        <span class="room-item-category">
                            ${item.category || ""}
                        </span>

                        <h3>
                            ${item.title}
                        </h3>

                        <p>
                            ${item.description}
                        </p>

                    </div>

                    ${
                        isWriting
                        ?
                        `<button
                            class="room-item-open"
                            data-article="${index}"
                        >
                            READ ↗
                        </button>`
                        :
                        `<span class="room-item-arrow">↗</span>`
                    }

                </article>
            `;

        }).join("");

        overlay.classList.add("active");

        document.body.classList.add("museum-overlay-open");

        overlay
            .querySelectorAll(".room-item-open")
            .forEach(button => {

                button.addEventListener("click", function () {

                    const index =
                        Number(this.dataset.article);

                    openArticle(index);

                });

            });
    }


    function closeRoom() {

        const overlay =
            document.getElementById("museumRoomOverlay");

        if (!overlay) return;

        overlay.classList.remove("active");

        document.body.classList.remove(
            "museum-overlay-open"
        );
    }


    /* =====================================================
       ARTICLE READER
       ===================================================== */

    function openArticle(index) {

        const article =
            content.writing[index];

        if (!article) return;

        const overlay =
            document.getElementById("museumArticle");

        if (overlay) {
            overlay.remove();
        }

        const articleOverlay =
            document.createElement("div");

        articleOverlay.id = "museumArticle";

        articleOverlay.innerHTML = `

            <div class="article-reader">

                <button class="article-reader-close">
                    CLOSE ×
                </button>

                <div class="article-reader-top">

                    <span>
                        ${article.category}
                    </span>

                    <span>
                        ARTICLE ${String(index + 1).padStart(2, "0")}
                    </span>

                </div>

                <article class="article-body">

                    <h1>
                        ${article.title}
                    </h1>

                    <p class="article-deck">
                        ${article.description}
                    </p>

                    <div class="article-rule"></div>

                    <p>
                        Maybe beginnings feel difficult because
                        we imagine they should look impressive.
                    </p>

                    <p>
                        We picture the dramatic announcement,
                        the perfect plan, the sudden clarity.
                        But most beginnings don't look like that.
                    </p>

                    <h2>
                        Most beginnings are quiet.
                    </h2>

                    <p>
                        They look like opening a blank document.
                        Making one small decision. Trying something
                        without knowing exactly where it will go.
                    </p>

                    <p>
                        There is something strangely comforting
                        about remembering that starting over does
                        not mean starting from nothing.
                    </p>

                    <p>
                        You bring every previous version of yourself
                        with you.
                    </p>

                    <blockquote>
                        Maybe the point isn't to begin perfectly.
                        Maybe the point is simply to begin again.
                    </blockquote>

                    <p>
                        This is a placeholder article for now.
                        The real writing can be replaced whenever
                        you're ready.
                    </p>

                </article>

            </div>

        `;

        document.body.appendChild(articleOverlay);

        document.body.classList.add(
            "museum-overlay-open"
        );

        articleOverlay
            .querySelector(".article-reader-close")
            .addEventListener("click", function () {

                articleOverlay.remove();

                document.body.classList.remove(
                    "museum-overlay-open"
                );

            });
    }


    /* =====================================================
       MAKE ROOM CARDS WORK
       ===================================================== */

    document
        .querySelectorAll(".room-card")
        .forEach(card => {

            const href =
                card.getAttribute("href");

            if (!rooms[href]) return;

            card.addEventListener("click", function (event) {

                event.preventDefault();

                openRoom(href);

            });

        });


    /* =====================================================
       HEADER NAVIGATION
       ===================================================== */

    document
        .querySelectorAll(".desktop-nav a, .mobile-menu a")
        .forEach(link => {

            const href =
                link.getAttribute("href");

            if (!rooms[href]) return;

            link.addEventListener("click", function (event) {

                event.preventDefault();

                closeMobileMenu();

                openRoom(href);

            });

        });


    /* =====================================================
       ENTER THE MUSEUM
       ===================================================== */

    document
        .querySelectorAll(".museum-button")
        .forEach(button => {

            button.addEventListener("click", function (event) {

                event.preventDefault();

                openRoom("#museum");

            });

        });


    /* =====================================================
       IDEAS
       ===================================================== */

    document
        .querySelectorAll(".idea-row")
        .forEach((row, index) => {

            row.addEventListener("click", function () {

                const idea =
                    content.ideas[index];

                if (!idea) return;

                openCustomExhibit(
                    idea.number,
                    "UNFINISHED IDEA",
                    idea.title,
                    idea.description
                );

            });

        });


    /* =====================================================
       WORK ITEMS
       ===================================================== */

    document
        .querySelectorAll(".work-open")
        .forEach((button, index) => {

            button.addEventListener("click", function (event) {

                event.preventDefault();

                const project =
                    content.work[index];

                if (!project) return;

                openCustomExhibit(
                    project.number,
                    project.category,
                    project.title,
                    project.description
                );

            });

        });


    /* =====================================================
       CUSTOM EXHIBIT
       ===================================================== */

    function openCustomExhibit(
        number,
        category,
        title,
        description
    ) {

        const overlay =
            createRoomOverlay();

        overlay.querySelector(".room-overlay-label")
            .textContent =
            number + " · " + category;

        overlay.querySelector("h2")
            .textContent = title;

        overlay.querySelector(".room-overlay-intro")
            .textContent = description;

        overlay.querySelector(".room-overlay-items")
            .innerHTML = `

                <article class="room-content-item exhibit-large">

                    <div class="room-item-main">

                        <span class="room-item-category">
                            CURRENT EXHIBIT
                        </span>

                        <h3>
                            ${title}
                        </h3>

                        <p>
                            ${description}
                        </p>

                        <p>
                            This is part of the ongoing archive.
                            More details, images and material will
                            be added here as the museum grows.
                        </p>

                    </div>

                </article>

            `;

        overlay.classList.add("active");

        document.body.classList.add(
            "museum-overlay-open"
        );
    }


    /* =====================================================
       SEARCH
       ===================================================== */

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


    if (searchOpen && searchOverlay) {

        searchOpen.addEventListener("click", function () {

            searchOverlay.classList.add("active");

            setTimeout(function () {

                if (searchInput) {
                    searchInput.focus();
                }

            }, 150);

        });

    }


    if (searchClose && searchOverlay) {

        searchClose.addEventListener("click", function () {

            searchOverlay.classList.remove("active");

            if (searchInput) {
                searchInput.value = "";
            }

            if (searchResults) {
                searchResults.innerHTML = "";
            }

        });

    }


    const searchable = [

        ...content.writing.map((x, i) => ({
            ...x,
            section: "WRITING",
            action: () => openArticle(i)
        })),

        ...content.work.map((x, i) => ({
            ...x,
            section: "WORK",
            action: () => openCustomExhibit(
                x.number,
                x.category,
                x.title,
                x.description
            )
        })),

        ...content.ideas.map(x => ({
            ...x,
            section: "IDEAS",
            action: () => openCustomExhibit(
                x.number,
                "UNFINISHED IDEA",
                x.title,
                x.description
            )
        })),

        ...content.thoughts.map(x => ({
            ...x,
            section: "THOUGHT MUSEUM",
            action: () => openCustomExhibit(
                x.number,
                "THOUGHT",
                x.title,
                x.description
            )
        })),

        ...content.random.map(x => ({
            ...x,
            section: "RANDOM INFORMATION",
            action: () => openCustomExhibit(
                x.number,
                "CURIOSITY",
                x.title,
                x.description
            )
        }))

    ];


    if (searchInput) {

        searchInput.addEventListener("input", function () {

            const query =
                this.value.trim().toLowerCase();

            if (!searchResults) return;

            if (!query) {

                searchResults.innerHTML = "";

                return;
            }

            const results =
                searchable.filter(item => {

                    return (
                        item.title
                            .toLowerCase()
                            .includes(query) ||

                        item.description
                            .toLowerCase()
                            .includes(query) ||

                        item.section
                            .toLowerCase()
                            .includes(query)
                    );

                });


            if (!results.length) {

                searchResults.innerHTML = `
                    <div class="search-empty">
                        <span>NOTHING FOUND</span>
                        <strong>
                            This exhibit hasn't been
                            collected yet.
                        </strong>
                    </div>
                `;

                return;
            }


            searchResults.innerHTML =
                results.map((item, index) => `

                    <button
                        class="museum-search-result"
                        data-result="${index}"
                    >

                        <span>
                            ${item.section}
                        </span>

                        <strong>
                            ${item.title}
                        </strong>

                        <p>
                            ${item.description}
                        </p>

                        <i>↗</i>

                    </button>

                `).join("");


            searchResults
                .querySelectorAll(".museum-search-result")
                .forEach(button => {

                    button.addEventListener("click", function () {

                        const result =
                            results[
                                Number(
                                    this.dataset.result
                                )
                            ];

                        searchOverlay
                            .classList
                            .remove("active");

                        searchInput.value = "";

                        searchResults.innerHTML = "";

                        result.action();

                    });

                });

        });

    }


    /* =====================================================
       THEME
       ===================================================== */

    const themeToggle =
        document.getElementById("themeToggle");

    if (themeToggle) {

        const saved =
            localStorage.getItem("museum-theme");

        if (saved === "light") {
            document.body.classList.add("light-mode");
        }


        themeToggle.addEventListener("click", function () {

            document.body.classList.toggle(
                "light-mode"
            );

            localStorage.setItem(
                "museum-theme",
                document.body.classList.contains(
                    "light-mode"
                )
                    ? "light"
                    : "dark"
            );

        });

    }


    /* =====================================================
       MOBILE MENU
       ===================================================== */

    const menuButton =
        document.getElementById("menuButton");

    const mobileMenu =
        document.getElementById("mobileMenu");

    const mobileClose =
        document.getElementById("mobileClose");


    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", function () {

            mobileMenu.classList.add("active");

        });

    }


    if (mobileClose && mobileMenu) {

        mobileClose.addEventListener("click", closeMobileMenu);

    }


    function closeMobileMenu() {

        if (!mobileMenu) return;

        mobileMenu.classList.remove("active");

    }


    /* =====================================================
       WORK FILTER
       ===================================================== */

    document
        .querySelectorAll(".filter")
        .forEach(filter => {

            filter.addEventListener("click", function () {

                document
                    .querySelectorAll(".filter")
                    .forEach(f =>
                        f.classList.remove("active")
                    );

                this.classList.add("active");

                const selected =
                    this.dataset.filter;

                document
                    .querySelectorAll(".work-item")
                    .forEach(item => {

                        const category =
                            item.dataset.category;

                        if (
                            selected === "all" ||
                            category === selected
                        ) {

                            item.style.display = "";

                        } else {

                            item.style.display = "none";

                        }

                    });

            });

        });


    /* =====================================================
       ESCAPE
       ===================================================== */

    document.addEventListener("keydown", function (event) {

        if (event.key !== "Escape") return;

        closeRoom();
        closeMobileMenu();

        if (searchOverlay) {
            searchOverlay.classList.remove("active");
        }

        const article =
            document.getElementById("museumArticle");

        if (article) {
            article.remove();
        }

        document.body.classList.remove(
            "museum-overlay-open"
        );

    });

});
