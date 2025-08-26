const Themes = {
    LIGHT: {
        class: "light",
        emote: "☀️",
        colors: {
            background: "#f5f5f5",
            primary: "#fff",
            secundary: "#808080",
            foreground: "#000",
            shadow: "rgba(0, 0, 0, 0.1)",
        },
    },
    DARK: {
        class: "dark",
        emote: "🌙",
        colors: {
            background: "#121212",
            primary: "#2f3334",
            secundary: "#599da3",
            foreground: "#f8f8f2",
            shadow: "rgba(255, 255, 255, 0.1)",
        },
    },
    DRACULA: {
        class: "dracula",
        emote: "🧛",
        colors: {
            background: "#282a36",
            primary: "#44475a",
            secundary: "#6272a4",
            foreground: "#f8f8f2",
            shadow: "rgba(255, 255, 255, 0.05)",
        },
    },
};

const ThemeMap = Object.values(Themes).reduce((mapped, theme) => {
    mapped[theme.class] = theme;
    return mapped;
}, {});

let theme = "light";

window.onload = main;
function main() {
    const themeStyle = createThemeStyle();
    document.head.appendChild(themeStyle);

    const themeContainer = document.querySelector("#theme__container");
    Object.values(Themes).forEach((theme, index) => {
        if (index > 0) {
            const hr = document.createElement("hr");
            themeContainer.appendChild(hr);
        }

        const button = createThemeButton(theme);
        themeContainer.appendChild(button);
    });

    changeTheme(Themes.LIGHT.class);
}

function createThemeStyle() {
    const style = document.createElement("style");
    Object.values(Themes).forEach((theme) => {
        style.textContent +=
            [
                `body.${theme.class} {`,
                `    --color-background: ${theme.colors.background};`,
                `    --color-primary: ${theme.colors.primary};`,
                `    --color-secundary: ${theme.colors.secundary};`,
                `    --color-foreground: ${theme.colors.foreground};`,
                `    --color-shadow: ${theme.colors.shadow};`,
                "}",
            ].join("\n") + "\n\n";
    });
    return style;
}

function createThemeButton(theme) {
    const button = document.createElement("button");
    button.classList.add("theme__button");
    button.textContent = theme.emote;
    button.addEventListener("click", () => changeTheme(theme.class));
    return button;
}

function changeTheme(nextClass) {
    const body = document.body;

    Object.values(Themes).forEach((theme) => {
        body.classList.remove(theme.class);
    });

    body.classList.add(nextClass);
    theme = next;
}
