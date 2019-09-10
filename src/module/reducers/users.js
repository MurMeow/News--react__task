import { ADD_USER, REMOVE_USER } from '../store/actionType'

export function Users(state={
	id:1,
	name: "Admin",
	password: "12345"
},action){
	switch (action.type) {
		case ADD_USER : {

			const newState = {
				...state,
			};

			return newState
		}

		case REMOVE_USER : {
			let newState = state.filter((item)=>item.id!=action.id)
			return [...newState];
		}

		default : {
			return state
		}
	}
}
