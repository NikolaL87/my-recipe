import { POST_FILE_UPLOAD_INIT, POST_FILE_UPLOAD_SUCCESS, POST_FILE_UPLOAD_ERROR } from '../actions/types';

const initialState = {
	file: {
		data: [],
		errors: [],
		isFetching: false
	}
};

export const fileUploadReducer = (state = initialState.file, action) => {
	switch (action.type) {
		case POST_FILE_UPLOAD_INIT:
			return { ...state, data: [], errors: [], isFetching: true };
		case POST_FILE_UPLOAD_SUCCESS:
			return { ...state, data: action.file, errors: [], isFetching: false };
		case POST_FILE_UPLOAD_ERROR:
			return { ...state, errors: [], data: [], isFetching: true };
		default:
			return state;
	}
};
