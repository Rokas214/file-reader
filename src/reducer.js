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
			return [
				{
					id: ++lastId,
					description: action.payload.description,
					active: true,
				},
			];
		// case actions.BUG_RESOLVED:
		// return state.filter((bug) =>
		// 	console.log(bug.description, action.payload.description)
		// );
		// return state.filter(
		// 	(bug) => bug.description === action.payload.description
		// );
		// return state.filter((bug) =>
		// 	console.log(bug.description === action.payload.description)
		// );
		// return state.filter((bug) => bug.id !== action.payload.id);

		// return state.map((bug) =>
		// 	bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
		// );
		default:
			return state;
	}
}

module.exports = reducer;

// state.map((item) => {
// if (item.name === action.payload.description) {
// 	return state;
// 	}
// });

// state.map((item) => {
// 	item.name === action.payload.description
// 		? state
// 		: { ...state, name: action.payload.description, active: true };
// });

// else if (action.type === actions.OLD_FILES) {
// 	return state.map((name) =>
// 		name.name === action.payload.name ? name : { ...name, active: false }
// 	);

// else if (action.type === actions.OLD_FILES) {
// 	const result = [...state];
// 	result.map((res) => {
// 		return res.name === "test4"
// 			? state.filter((item) => item.name === item.name)
// 			: console.log(false);
// 	});

// return [
// 	...state,
// 	{
// 		name: action.payload.description,
// 		active: true,
// 	},
// ];
// state.filter((bug) => bug.id !== action.payload.id);
// if (result.name === "test3") {
// 	console.log(state);
// } else {
// 	console.log(false);
// }

// else if (action.type === actions.OLD_FILES) {
// 	return [
// 		{
// 			name: action.payload.description,
// 			active: true,
// 		},
// 	];
// } else if (action.type === actions.BUG_REMOVED)
// return state.filter(bug => bug.id !== action.payload.id);
