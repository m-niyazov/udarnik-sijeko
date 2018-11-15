import axios from "axios";
import {
	addApiId,
	addApiItem,
	addNextWord,
	removeIndex,
	addSteps,
	addStepsNext,
	isLoading,
	addStepsNextIndex, addIndex
} from "./actions"
import {store} from "../store/store";

export const requestApi = (playerName, gameType, page) => dispatch => {
	axios.post('http://localhost:3000/udarnik.sijeko.ru/api/v1/test', {name: playerName, type: gameType})
		.then(response => response.data)
		.then(initialData => {
			dispatch(addApiId(initialData.id));
			page.history.push(`/${gameType}-mode/${initialData.id}`);

		})

		.catch(error => console.error(error.message));
};


export const getApiItem = (id, page) => dispatch => {
	axios.get(`http://localhost:3000/udarnik.sijeko.ru/api/v1/test/${id}`)
		.then(response => response.data)
		.then(initialData => {
			let variables = [initialData.id, initialData.name, initialData.count,  initialData.open];

			if(initialData.steps){
				let steps = initialData.steps;
				let arr = [];
				for (let i in steps){
					arr.push(steps[i])
				}
				arr.map(step => dispatch(addApiItem(...variables,  step.num, step.question, step.index)));
			}else {
				dispatch(addApiItem(...variables));
				dispatch(isLoading(false));

			}
			dispatch(addSteps(initialData.steps));
			setTimeout(() => store.dispatch(isLoading(false)), 600)

		})
		.catch(error => {console.error(error.message); if(error.message == 'Request failed with status code 404'){page.history.push(`/error/404`);}});

};


export const getNextWord = (id, num, index, steps) => dispatch => {
	axios.put(`http://localhost:3000/udarnik.sijeko.ru/api/v1/test/${id}/step/${num}`, {index: index} )
		.then(response => response.data)
		.then(test =>  {
			dispatch(addStepsNext(test, num));

			steps.map((item) => {
				if(item.num == num + 1){
					if(item.index == null){
						console.log(item);
						dispatch(addNextWord(id, test.question, test.num, test.index, test.testShareUrl));
						dispatch(addStepsNextIndex(index, num - 1 ));
						dispatch(removeIndex());

					}else {
						console.log(item);
						dispatch(addNextWord(id, item.question, item.num, item.index, item.testShareUrl));
						dispatch(addStepsNextIndex(index, num - 1 ));
						dispatch(addIndex(item.index));

					}
				}
			});
			if(test.num === false){
				window.location = test.testShareUrl;
			}
			dispatch(isLoading(false));

		})

		.catch(error => console.error(error.message));

};


