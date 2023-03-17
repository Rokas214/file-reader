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
		case actions.UPDATE_FILES:
			return state.filter((file) => file.id !== action.payload.id);
		default:
			return state;
	}
}

module.exports = reducer;
