const actions = require("./actionTypes.js");
let lastId = 0;
function reducer(state = [], action) {
	switch (action.type) {
		case actions.ADD_FILES:
			return [
				...state,
				{
					id: ++lastId,
					description: action.payload.description,
					active: true,
				},
			];
		case actions.CLEAN_STATE:
			return (state = []);
		case actions.UPDATE_FILES:
			return [
				...state,
				{
					id: ++lastId,
					description: action.payload.description,
					active: true,
				},
			];
		// return state.filter((file) => file.description !== action.payload.name);
		// case actions.UPDATE_FILES:
		// 	return state.map((file) =>
		// 		file.name !== action.payload.name ? file : { ...file, active: false }
		// 	);
		default:
			return state;
	}
}

module.exports = reducer;
