// import { argbFromHex, themeFromSourceColor, applyTheme, MaterialDynamicColors } from "@material/material-color-utilities";

// // Get the theme from a hex color
// const theme = themeFromSourceColor(argbFromHex("#ff9800"), [{
//     name: "custom-1",
//     value: argbFromHex("#ff9800"),
//     blend: true,
// }]);

// applyTheme(theme, { target: document.documentElement, dark: true });

// console.log(MaterialDynamicColors.surfaceDim)

// import "@material/web/all.js";

import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");
