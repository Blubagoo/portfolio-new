

const initialState = {
	data: [],
}


export const appReducer = (state = initialState, action) => {
	console.log('reducing this action type', action.type, state);
	switch(action.type) {
		default:
			return state
	}
}