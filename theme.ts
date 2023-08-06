import { buildLegacyTheme } from "sanity"

const props = {
    "--myWhite": "#fff",
    "--myBlack": "#1a1a1a",
    "--blog-brand": "#3ca0a0",
    "--myRed": "#db4437",
    "--myYellow": "#f4b400",
    "--myGreen": "#0f9d58",
};

export const myTheme = buildLegacyTheme({
    "--black": props["--myBlack"],
    "--white": props["--myWhite"],

    "--gray": "#666",
    "--gray-base": "#333",

    "--component-bg": props["--myBlack"],
    "--component-text-color": "#fff",

    "--brand-primary": props["--blog-brand"],

    "--default-button-color": "#666",
    "--default-button-primary-color": props["--blog-brand"],
    "--default-button-success-color": props["--myGreen"],
    "--default-button-danger-color": props["--myRed"],
    "--default-button-warning-color": props["--myYellow"],

    "--state-info-color": props["--blog-brand"],
    "--state-success-color": props["--myGreen"],
    "--state-warning-color": props["--myYellow"],
    "--state-danger-color": props["--myRed"],


    "--main-navigation-color": props["--myBlack"],
    "--main-navigation-color--inverted": props["--myWhite"],

    "--focus-color": props["--blog-brand"],
    

})