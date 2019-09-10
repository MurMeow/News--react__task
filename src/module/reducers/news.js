import { ADD_NEWS, REMOVE_NEWS } from '../store/actionType'

export function News(state={
	data: false,
	news: []
},action){
	switch (action.type) {
		case ADD_NEWS : {
			const newState = {
				...state,

				data: true,
				news: [...state.news, action.payload.data]
			};

			return newState
		}

		case REMOVE_NEWS : {
			const newState = {
				...state,
				data: false
			};

			return newState
		}

		default : {
			return state
		}
	}
}
