import { AUTHORIZATION_SUCCESS, AUTHORIZATION_FAIL } from '../store/actionType'

export function Authorization(state={
	authorization: false
},action){
	switch (action.type) {
		case AUTHORIZATION_SUCCESS : {

			const newState = {
				...state,
				authorization: true
			};

			return newState
		}

		case AUTHORIZATION_FAIL : {
			const newState = {
				...state,
				authorization: false
			};

			return newState
		}

		default : {
			return state
		}
	}
}
