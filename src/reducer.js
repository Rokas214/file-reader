const actions = require("./actionTypes.js");
const PDFDocument = require("pdfkit");
function reducer(state = [], action) {
	switch (action.type) {
		case actions.ADD_FILES:
			return [...state, ...action.payload];
		case actions.UPDATE_FILES:
			const newFiles = action.payload;

			state = state.map((currentFile) => {
				const isFilePresent = newFiles.some(
					(newFile) => newFile.name === currentFile.name
				);

				if (isFilePresent) {
					return {
						...currentFile,
						active: true,
					};
				}
				return {
					...currentFile,
					active: false,
				};
			});

			const filteredState = state.filter((item) => !item.active);
			return [...filteredState, ...newFiles];
		case actions.DOWNLOAD:
			const doc = new PDFDocument();
			doc.text(state, 100, 300).font("Times-Roman", 13);
			doc.end();
			writeHead(200, {
				"Content-Type": "application/pdf",
			});
		default:
			return state;
	}
}

module.exports = reducer;
