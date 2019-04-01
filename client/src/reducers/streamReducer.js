import _ from 'lodash';
import {
	CREATE_STREAM,
	FETCH_STREAMS,
	FETCH_STREAM,
	UPDATE_STREAM,
	DELETE_STREAM
} from '../actions/types';


export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case CREATE_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case UPDATE_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case FETCH_STREAMS:
			return { ...state, ..._.mapKeys(action.payload, 'id') };
		case DELETE_STREAM:
			// delete-action payload is the id
			return _.omit(state, action.payload);
		default:
			return state;
	}
};
// left off on video #12
