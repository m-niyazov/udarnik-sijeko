

export const REMOVE_INDEX_WORD = 'REMOVE_INDEX_WORD';
export const ADD_INDEX_WORD = 'ADD_INDEX_WORD';

export const REMOVE_STATE = 'REMOVE_STATE';
export const ADD_NAME = 'ADD_NAME';
export const ADD_STEPS = 'ADD_STEPS';
export const ADD_STEPS_NEXT = 'ADD_STEPS_NEXT';


export const ADD_API_ID = 'ADD_API_ID';
export const ADD_API_ITEM = 'ADD_API_ITEM';
export const ADD_NEXT_WORD = 'ADD_NEXT_WORD';
export const PREV_WORD = 'PREV_WORD';
export const ISLOADING = 'ISLOADING';
export const ADD_WORD = 'ADD_WORD';

export const ADD_STEPS_NEXT_INDEX = 'ADD_STEPS_NEXT_INDEX';
export const UPDATE_STEPS = 'UPDATE_STEPS';



export function removeIndex() {
	return {
		type: REMOVE_INDEX_WORD,
		index: null
	}
}


export function addIndex(index) {
	return {
		type: ADD_INDEX_WORD,
		index: index
	}
}

// export function addWord(word) {
// 	return {
// 		type: ADD_WORD,
// 		word: word
// 	}
// }

export function removeItem() {
	return {
		type: REMOVE_STATE,
		state: undefined
	}
}

export function addName(name) {
	return {
		type: ADD_NAME,
		name: name
	}
}

export function addApiId(id) {
	return {
		type: ADD_API_ID,
		id: id
	}
}

export function isLoading(load) {
	return {
		type: ISLOADING,
		payload: load
	}
}



export function addSteps(steps) {
	return {
		type: ADD_STEPS,
		steps: steps
	}
}


export function addStepsNext(item, num) {
	return {
		type: ADD_STEPS_NEXT,
		item: item,
		num: num
	}
}




export function addStepsNextIndex(index, num) {
	return {
		type: ADD_STEPS_NEXT_INDEX,
		index: parseInt(index),
		num: num
	}
}

export function addApiItem(id, name, count, status, num, question, index ) {
	return {
		type: ADD_API_ITEM,
		item: {
			id: id,
			name: name,
			count: count,
			status: status,
			num: num,
			question: question,
			index: index
		}
	}
}

export function addNextWord(id, question, num, index, url){
	return {
		type: ADD_NEXT_WORD,
		item: {
			id: id,
			question: question,
			num: num,
			index: index,
			redirectUrl: url

		}
	}
}

export function prevWord(num, question, index) {
	return {
		type: PREV_WORD,
		step: {
			num: num,
			question: question,
			index: index
		}
	}
}
