import { GET_FILE_INIT, GET_FILE_SUCCESS, GET_FILE_FAIL } from '../actions/types';

const initialState = {
	images: {
		data: [],
		errors: [],
		isFetching: false
	}
};

export const fileUploadReducer = (state = initialState.images, action) => {
	switch (action.type) {
		case GET_FILE_INIT:
			return { ...state, data: [], errors: [], isFetching: true };
		case GET_FILE_SUCCESS:
			return { ...state, data: action.images, errors: [], isFetching: false };
		case GET_FILE_FAIL:
			return { ...state, errors: [], data: [], isFetching: true };
		default:
			return state;
	}
};
