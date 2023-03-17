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

		files.forEach((file) => {
			store.dispatch({
				type: actions.ADD_FILES,
				payload: {
					description: file,
				},
			});
		});

		// store.dispatch({
		// 	type: actions.BUG_RESOLVED,
		// 	payload: {
		// 		description: files,
		// 	},
		// });

		// for (let i = 0; i < files.length; i++) {
		// 	files.forEach((file) => {
		// 		store.dispatch({
		// 			type: actions.BUG_RESOLVED,
		// 			payload: {
		// 				description: files[i],
		// 			},
		// 		});
		// 	});
		// }

		// for (let i = 0; i < files.length; i++) {
		// 	store.dispatch({
		// 		type: actions.BUG_RESOLVED,
		// 		payload: {
		// 			description: "lopas",
		// 			resolved: false,
		// 		},
		// 	});
		// 	console.log(files[i]);
		// }

		// for (let i = 0; i < files.length; i++) {
		// 	store.dispatch({
		// 		type: actions.BUG_RESOLVED,
		// 		payload: {
		// 			description: files[i],
		// 		},
		// 	});
		// }

		res.send(store.getState());
	});
});

module.exports = router;

// store.dispatch({
// 	type: actions.BUG_ADDED,
// 	payload: {
// 		description: "bug1",
// 	},
// });

// store.dispatch({
// 	type: actions.BUG_RESOLVED,
// 	payload: {
// 		description: "bug2",
// 	},
// });
// // store.dispatch(bugAdded("bug 12"));
// // store.dispatch(bugResolved(2));
// res.send(store.getState());
