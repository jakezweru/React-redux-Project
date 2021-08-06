import {
	CHANGE_SEARCH_FIELD,
	SEARCH_ROBOT_PENDING,
	SEARCH_ROBOT_SUCCESS,
	SEARCH_ROBOT_FAILED
} from './constant.js';

export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload:text
})

export const requestRobot = () => (dispatch) => {
	dispatch({type: SEARCH_ROBOT_PENDING })
	fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatch({type:SEARCH_ROBOT_SUCCESS, payload:data}))
    .catch(error => dispatch({type:SEARCH_ROBOT_FAILED, payload:error}))
}