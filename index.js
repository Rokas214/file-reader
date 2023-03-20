const express = require("express");
const app = express();
const fs = require("fs");
const list = require("./src/list");
const scan = require("./src/scan");
const download = require("./src/download");
const store = require("./src/store");
const actions = require("./src/actionTypes");
require("dotenv").config();

app.use(express.json());
app.use("/list", list);
app.use("/scan", scan);
app.use("/download-state", download);

const dir = process.env.DIR;
const port = process.env.PORT;

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

app.listen(port, () => console.log(`Server is running on ${port} `));
