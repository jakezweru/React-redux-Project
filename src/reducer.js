import {
	CHANGE_SEARCH_FIELD,
	SEARCH_ROBOT_PENDING,
	SEARCH_ROBOT_SUCCESS,
	SEARCH_ROBOT_FAILED
} from './constant.js';

const initialState = {
	searchField: ''
}

export const searchRobot = (state=initialState, action={}) => {
	switch(action.type) {
		case CHANGE_SEARCH_FIELD:
		return Object.assign({}, state, {searchField: action.payload});
		default: 
		return state;


	}
}
const initialStateRobot = {
	isPending: false,
	robots:[],
	error:''
}

export const setRobot = (state = initialStateRobot, action = {}) => {
	switch (action.type) {
		case SEARCH_ROBOT_PENDING:
		return Object.assign({},state, {isPending:true});
		case SEARCH_ROBOT_SUCCESS:
		return Object.assign({}, state, {robots: action.payload, isPending:false})
		case SEARCH_ROBOT_FAILED:
		return Object.assign({}, state, {error:action.payload, isPending:false})
		default:
		return state;
	}

} 