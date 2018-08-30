require("ignore-styles");
require("babel-core/register");

const enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
const jsdom = require("jsdom");

enzyme.configure({ adapter: new Adapter() });

const { JSDOM } = jsdom;

const url = "http://localhost";
const { document } = new JSDOM("", { url }).window;
global.document = document;
global.window = document.defaultView;
