import { CHANGE_Z_INDEX , SET_DATA } from "../actions";

const initialState = {
	data: [],
	view: "home",
	zIndex: -99,
}


export const appReducer = (state = initialState, action) => {
	console.log("reducing this action type", action.type, state);
	switch(action.type) {
		case CHANGE_Z_INDEX:
			return Object.assign({}, state, {
				zIndex: action.zIndex,
			});
		case SET_DATA:
			return Object.assign({}, state, {
				project: action.project
			})
		default:
			return state;
	}
}