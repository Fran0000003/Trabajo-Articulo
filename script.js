const mainButton = document.getElementById("main-button");
const languageButton = document.getElementById("language-button");

const translations = {
    en: {
        pageHeading: "Everything about Insomniac's new game",
        articleHeading: "Marvel's Wolverine",
        introParagraph: "After a stellar debut with Spider-Man and a sequel that, against all odds, managed to expand on that idea even further, Insomniac Games is changing its lead superhero and hanging up the webs to embrace its wilder side. James Howlett makes a powerful entrance on PlayStation 5 in a game that showcases many of the lessons learned from our favorite friendly neighborhood hero, while taking a chance on a deeper, much bloodier story.",
        storyParagraph: "It all begins when Logan returns to Team X, where he once again works with Essex, who serves as the team's captain, and his former teammates: Walter, Sabretooth, and Mystique. Jean Grey enters the picture with a group of mutants in need of shelter, and the story branches out from Logan's encounter with Grey herself. If you know the history of Wolverine and Jean Grey in the comics, you can probably guess where this is going. Insomniac explores Wolverine in a particularly interesting way and isn't afraid to show Logan as a man who's scared. Not of the Hand or the hunters, but of the blank spaces in his own past. As the story unfolds, we'll gradually uncover those mysteries, leading to a major revelation at the end.",
        gameplayParagraph: "After two open-world games, Insomniac has taken a more focused approach, even though Logan travels to different countries. The studio opts for a more classic level design, with replayable, more linear maps where we move straight toward the next objective. Some sections open up a little, like Seattle in The Last of Us Part II, but that's not the norm.",
        sideContentParagraph: "Most of Wolverine's side content is packed into the nightmare doors. In many levels, we'll find a mysterious door that takes us back to a dreamlike version of Logan's cabin. Inside, there's a small combat challenge, a time trial, or a wave-based mode with roguelite elements. The last one is the most interesting: waves of enemies appear, and we can unlock different perks for Logan. You can finish the challenge in about a minute, but earning the gold medal and its reward will take some effort, since the combat difficulty is quite high. Completing these challenges unlocks a memory from Logan's past; collect them all, and you'll see a cutscene that's important to the game's overall story.",
        sourceLabel: "Source used for this article:",
        sourceLink: "Wolverine",
        languageButton: "Español",
        themeButton: "Switch to light mode"
    },
    es: {
        pageHeading: "Todo sobre el nuevo juego de Insomniac",
        articleHeading: "Marvel: Lobezno",
        introParagraph: "Después de un debut estelar con Spider-Man y una secuela que contra todo pronóstico consiguió expandir todavía más aquella idea, Insomniac Games cambia de superhéroe titular y cuelga las telarañas para abrazar su lado más salvaje. James Howlett entra con fuerza en PlayStation 5, con un juego que exhibe muchas de las lecciones aprendidas de nuestro querido amigo y vecino, pero se arriesga a contar una historia más profunda y mucho, mucho más sangrienta.",
        storyParagraph: "Todo empieza cuando Logan regresa al Equipo X, donde vuelve a colaborar con Essex, que actúa como capitán del equipo, y con sus excompañeros: Walter, Dientes de Sable y Mística. En esa ecuación aparece Jean Grey, con un grupo de mutantes que necesita asilo, y la historia se ramifica a partir del encuentro entre Logan y la propia Grey. Si conoces la historia de Lobezno y Jean Grey en los cómics, ya te puedes imaginar por dónde van los tiros. En este juego Insomniac explora a Lobezno de una manera bastante interesante, y no titubea al mostrar a un Logan asustado. No de La Mano o de los acechadores, sino de los espacios en blanco de su propio pasado. A lo largo de la historia iremos despejando poco a poco esas incógnitas, hasta llegar a una gran revelación final.",
        gameplayParagraph: "Insomniac llevaba dos juegos apostando por el formato de mundo abierto, pero ahora, a pesar de que Logan viaja a diferentes países, su aventura está mucho más contenida. El estudio apuesta por una distribución de niveles más clásica, con mapas rejugables y más lineales en los que avanzamos en línea recta hasta el siguiente objetivo. Hay fases en las que el concepto se abre un poco más, como pasaba con Seattle en The Last of Us: Parte 2, pero no es lo habitual.",
        sideContentParagraph: "El contenido secundario de Lobezno se concentra prácticamente todo en las puertas de pesadilla. En muchos niveles encontraremos una misteriosa puerta que nos lleva de vuelta a una versión onírica de la cabaña de Logan. Dentro nos espera un pequeño desafío de combate, una prueba contrarreloj o un modo de oleadas con planteamiento roguelite. El más interesante es este último: irán apareciendo oleadas de enemigos y podremos desbloquear diferentes ventajas para Logan. La prueba puede superarse en un minuto, pero conseguir la medalla de oro y su recompensa exigirá esfuerzo, porque la dificultad de combate en este modo es bastante alta. Al superar estas pruebas desbloquearás un recuerdo del pasado de Logan; al reunirlos todos, podrás ver una cinemática importante para la trama global del juego.",
        sourceLabel: "Fuente usada para realizar este artículo:",
        sourceLink: "Lobezno",
        languageButton: "English",
        themeButton: "Cambiar a modo claro"
    }
};

mainButton.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    mainButton.setAttribute("aria-pressed", String(isDark));
    mainButton.textContent = isDark
        ? translations[document.documentElement.lang].themeButton
        : document.documentElement.lang === "en" ? "Switch to dark mode" : "Cambiar a modo oscuro";
});

languageButton.addEventListener("click", () => {
    const language = document.documentElement.lang === "es" ? "en" : "es";
    const content = translations[language];

    document.documentElement.lang = language;
    document.getElementById("page-heading").textContent = content.pageHeading;
    document.getElementById("article-heading").textContent = content.articleHeading;
    document.getElementById("intro-paragraph").textContent = content.introParagraph;
    document.getElementById("story-paragraph").textContent = content.storyParagraph;
    document.getElementById("gameplay-paragraph").textContent = content.gameplayParagraph;
    document.getElementById("side-content-paragraph").textContent = content.sideContentParagraph;
    document.getElementById("source-label").textContent = content.sourceLabel;
    document.getElementById("source-link").textContent = content.sourceLink;
    languageButton.textContent = content.languageButton;
    languageButton.setAttribute("aria-pressed", String(language === "en"));
    mainButton.textContent = document.body.classList.contains("dark-theme")
        ? content.themeButton
        : language === "en" ? "Switch to dark mode" : "Cambiar a modo oscuro";
});