const express = require("express");
const app = express();
const fs = require("fs");

const list = require("./src/list");
const scan = require("./src/scan");
const store = require("./src/store");
const actions = require("./src/actionTypes");

app.use(express.json());
app.use("/list", list);
app.use("/scan", scan);

const dir = "./test/";

app.get("/", (req, res) => {
	res.send("Files scaned...");
});
store.dispatch({
	type: actions.ADD_FILES,
	payload: fs.readdirSync(dir).map((file) => ({
		name: file,
		active: true,
	})),
});

app.listen(3000);
