const express = require("express");
const app = express();
const fs = require("fs");
require("dotenv").config();
app.use(express.json());

const { list, scan, download, store, actions } = require("./src");

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
