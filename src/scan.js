const express = require("express");
const store = require("./store.js");
const fs = require("fs");
const router = express.Router();
const actions = require("./actionTypes.js");

const dir = "./test/";

router.get("/", (req, res) => {
	store.dispatch({
		type: actions.UPDATE_FILES,
		payload: fs.readdirSync(dir).map((file) => ({
			name: file,
			active: true,
		})),
	});
	res.send(store.getState());
});

module.exports = router;
