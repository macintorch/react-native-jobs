import _ from 'lodash';
import {
	LIKE_JOB
} from '../actions/types';

export default function(state = [], action) {
	switch (action.type) {
		case LIKE_JOB:
			// to avoid saving duplicate job
			return _.uniqBy([
				action.payload, ...state
				],'jobkey');
		default:
		return state;
	}
}