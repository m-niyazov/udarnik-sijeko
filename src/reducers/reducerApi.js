import {ADD_API_ID, ADD_API_ITEM, ADD_NEXT_WORD, ADD_STEPS_NEXT_INDEX, ADD_NAME, ADD_INDEX_WORD, REMOVE_INDEX_WORD, ADD_STEPS, PREV_WORD, ADD_STEPS_NEXT, ISLOADING,} from '../actions/actions';
const initialState = {
	initialData: {},
	isLoading: true
};





export default function reducerApi(state = initialState, action) {
	switch(action.type){
		case ISLOADING:
			return {...state, isLoading: action.payload};
		case ADD_NAME:
			return {...state, name: action.name};

		case ADD_API_ID:
			return {...state, id: action.id};

		case ADD_API_ITEM:
			return {...state, initialData: action.item};

		case ADD_STEPS:
			return {...state, steps: [...action.steps]};

		case ADD_STEPS_NEXT:
			return {...state, ...state.steps[action.num] = {...state.steps[action.num], ...action.item}};

		case ADD_STEPS_NEXT_INDEX:
			return {...state, ...state.steps[action.num] = {...state.steps[action.num], index: action.index} };

		case ADD_NEXT_WORD:
			return Object.assign({}, state, {
				initialData:{...state.initialData, ...action.item }
			});

		case PREV_WORD:
			return Object.assign({}, state, {
				initialData:{...state.initialData, ...action.step }
			});

		case ADD_INDEX_WORD:
			return {...state,  index: action.index};

		case REMOVE_INDEX_WORD:
			return {...state,  index: action.index};

		default:
			return state;

	}
}





