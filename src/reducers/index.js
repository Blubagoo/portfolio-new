import { CHANGE_Z_INDEX , SET_DATA , SET_HEADER_VIEW, SET_FIRST_PAGE_LOAD } from "../actions";

const initialState = {
	data: [],
	view: "home",
	zIndex: -99,
	project: {
		projectName: '',
		projectURL: '',
		projectImage: '#',
		projectDescription: '',
		projectType: ''
	},
	headerView: true,
	firstTimeLoading: true,
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
			});
		case SET_HEADER_VIEW:
			return Object.assign({}, state, {
				headerView: action.headerView
			});
		case SET_FIRST_PAGE_LOAD:
			return Object.assign({}, state, {
				isFirstPageLoad: action.isFirstPageLoad
			})
		default:
			return state;
	}
}