const express = require("express");
const store = require("./store.js");
const fs = require("fs");
const router = express.Router();
const actions = require("./actionTypes.js");

const dir = "./test/";

router.get("/", (req, res) => {
	try {
		res.send(store.getState());
	} catch (err) {
		res.status(400).send(err);
	}
});

module.exports = router;
