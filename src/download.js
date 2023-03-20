const PDFDocument = require("pdfkit");
const store = require("./store");
const express = require("express");
const router = express.Router();
const actions = require("./actionTypes");
const fs = require("fs");
const { object } = require("joi");
const dir = "./test/";
require("dotenv").config();

// fs.writeFile('test/files', 'This is my text', function (err) {
// 	if (err) throw err;
// 	console.log('Replaced!');
//   });

router.get("/", (req, res) => {
	try {
		const download = require("download");
		const file = "http://localhost:3000/list";
		const filePath = `files`;
		download(file, filePath).then(() => {
			console.log("Download Completed");
		});
		res.send(`File downloaded to your '/${filePath} path`);
	} catch (err) {
		res.status(400).send(err);
	}
});

module.exports = router;

// res.send("File downloaded");
// const result = store.getState();
// const res1 = JSON.stringify(result);
// fs.writeFile("newfile.txt", res1, function (err) {
// 	if (err) throw err;
// 	console.log("File is created successfully.");
// });
