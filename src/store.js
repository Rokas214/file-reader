const { legacy_createStore } = require("redux");
const reducer = require("./reducer.js");

const store = legacy_createStore(reducer);

module.exports = store;
