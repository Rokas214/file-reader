const express = require("express");
const app = express();

const list = require("./src/list");
const scan = require("./src/scan");

app.use(express.json());
app.use("/list", list);
app.use("/scan", scan);

app.get("/", (req, res) => {
	res.send("hello");
});

app.listen(3000);
