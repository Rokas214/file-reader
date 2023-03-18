const actions = require("./actionTypes.js");
function reducer(state = [], action) {
	switch (action.type) {
		case actions.ADD_FILES:
			return [...state, ...action.payload];
		case actions.UPDATE_FILES:
			const newFiles = action.payload;

			state = state.map((currentFile) => {
				const isFilePresent = newFiles.some(
					(newFile) => newFile.filename === currentFile.filename
				);
				if (isFilePresent) {
					return action.payload;
				}
				return {
					...currentFile,
					active: false,
				};
			});

			return [...state, ...newFiles];
		default:
			return state;
	}
}

module.exports = reducer;
