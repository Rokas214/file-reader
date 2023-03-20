const express = require("express");
const store = require("./store.js");
const router = express.Router();

router.get("/", (req, res) => {
	try {
		res.send(store.getState());
	} catch (err) {
		res.status(400).send(err);
	}
});

module.exports = router;
