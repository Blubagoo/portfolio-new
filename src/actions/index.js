
export const CHANGE_Z_INDEX = 'CHANGE_Z_INDEX';
export const changeZIndex = (zIndex) => ({
	type: CHANGE_Z_INDEX,
  zIndex
});

export const SET_DATA = 'SET_DATA';
export const setData = (project) => ({
	type: SET_DATA,
  project
});