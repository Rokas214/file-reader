const actions = require("./actionTypes.js");
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
			const filteredState = state.filter((item) => {
				if (item.active === false) {
					return item;
				}
			});
			return [filteredState, ...newFiles];
		default:
			return state;
	}
}

module.exports = reducer;
