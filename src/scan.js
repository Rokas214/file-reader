const express = require("express");
const store = require("./store.js");
const fs = require("fs");
const router = express.Router();
const actions = require("./actionTypes.js");

const dir = "./test/";

router.get("/", (req, res) => {
	fs.readdir(dir, (err, files) => {
		if (err) {
			throw err;
		}

		store.dispatch({
			type: actions.CLEAN_STATE,
		});

		files.forEach((file) => {
			store.dispatch({
				type: actions.ADD_FILES,
				payload: {
					description: file,
				},
			});
		});
		// for (let i = 0; i < files.length; i++) {
		// 	store.dispatch({
		// 		type: actions.UPDATE_FILES,
		// 		payload: {
		// 			name: files,
		// 		},
		// 	});
		// }
		res.send(store.getState());
	});
});

module.exports = router;
