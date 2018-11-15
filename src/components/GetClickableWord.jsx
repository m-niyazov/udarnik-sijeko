import React from 'react';
import {withRouter} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import reducerApi from "../reducers/reducerApi";

function GetClickableWord(props) {

	function handleClickWord(e){
		props.index(e.currentTarget.dataset.index, e.target);
		// e.currentTarget.classList.add('active-word')
		// let currentElem = e.currentTarget;
		// currentElem.classList.add('active-letter');
		// let btns = Array.from(document.querySelectorAll('.letter-clicable'));
		//
		// btns.map( item =>
		// 	if(item !== currentElem){
		// 		item.classList.remove('active-letter');
		// 	}
		// });
	}

	function getBtn(word, index) {
		let letters = word.toLowerCase().split('');
		let result = [];

		for (let i in letters) {
			if (!letters.hasOwnProperty(i)) {
				continue;
			}

			let letter = letters[i];
			switch (letter) {
				// Все гласные буквы
				case 'а': case 'е':
				case 'ё': case 'и':
				case 'о': case 'у':
				case 'ы': case 'э':
				case 'ю': case 'я':
				if(index != null ){
					result.push(
						<span  key={letters.length + i + letter} className='letter-clicable'>
						{index  == i ? 	<input  defaultChecked onChange={handleClickWord} className="word-active"  type="radio" data-index={i} name="dva"/> : 	<input  onChange={handleClickWord} className="word-active"  type="radio" data-index={i} name="dva"/>}
							<label className="label"  >{letter}</label>
					</span>

					);}else {
					result.push(
						<span  key={letters.length + i + letter} className='letter-clicable'>
						<input  onChange={handleClickWord} className="word-active"  type="radio" data-index={i} name="dva"/>
						<label className="label"  >{letter}</label>
					</span>

					);
				}

				break;
				// Остальные буквы
				default:
					result.push(<span key={i} className="no-clickable">{letter}</span>);
					break;
			}
		}
		return result;
	}
	return(
		<React.Fragment>
			{props.steps.map(((step =>
				step.num == props.initialData.num ? getBtn(step.question, step.index) : null
			)))}
		</React.Fragment>
	)

}
const  mapStateToProps = (store) => {
	return {
		steps: store.reducerApi.steps,
		initialData: store.reducerApi.initialData
	};
};

export default withRouter(connect(mapStateToProps)(GetClickableWord));
