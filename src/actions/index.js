
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
export const SET_HEADER_VIEW = 'SET_HEADER_VIEW';
export const setHeaderView = (elClass) => ({
	type: SET_HEADER_VIEW,
  headerView: elClass
});
export const SET_FIRST_PAGE_LOAD = 'SET_FIRST_PAGE_LOAD';
export const setFirstPageLoad = (boolean) => ({
	type: SET_FIRST_PAGE_LOAD,
  firstTimeLoad: boolean
});