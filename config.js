import { configure } from "@storybook/polymer";
import "@storybook/addon-knobs";
import "@storybook/addon-storysource/register";
import "@webcomponents/webcomponentsjs/webcomponents-loader.js";
import "@vlocity-cme-sdk/digitalcommerce-sdk";
import "../node_modules/mathjs/dist/math";
import "../styles/newport-design-system.min.css"
// automatically import all files ending in *.stories.js
const req = require.context("../src/stories", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
