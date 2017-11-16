import { AsyncStorage } from 'react-native';

import {
	FACEBOOK_LOGIN_SUCCESS
} from './types';

// How to use AsyncStorage
// AsyncStorage.setItem('fb_token', token);
// AsyncStorage.getItem('fb_token');

// using async await with redux thunk

export const facebookLogin = () => async dispatch => {
	let token = await AsyncStorage.getItem('fb_token');
	if (token) {
		// Dispatch an action saying FB login is done
	} else {
		// Startup FB Login process
	}
};