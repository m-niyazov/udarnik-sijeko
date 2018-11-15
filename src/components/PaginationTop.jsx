import React from 'react';
import {withRouter} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import {store} from "../store/store";
import {addIndex, prevWord} from "../actions/actions";

function PaginationTop(props) {
	function handleCick(e) {
		e.preventDefault();
		let steps = props.steps;
		let num = parseInt(props.number);

		if(steps.length >= props.number){

			steps.map((step) => {
				if(step.num == num){
					store.dispatch(prevWord(num, step.question, step.index));
					store.dispatch(addIndex(step.index));
				}
			});

		}else if(steps.length <= props.number){
			e.preventDefault();
		}

	}

	function mouseOver(e){
		let steps = props.steps;

		if(steps.length < props.number){
				e.currentTarget.style.cursor = 'not-allowed';
		}

	}


	return(
		<React.Fragment>
			{props.steps.length > props.number ?
				<li className={`page-item after-select${props.numStep == Number(props.number) ? '-active' : ''}`}><button className="page-link" key={props.numStep} onClick={handleCick} >{props.number}</button></li>
				:
				<li className={`page-item ${props.numStep == Number(props.number) ? 'active' : ''}`}><button className="page-link" key={props.numStep} onMouseOver={mouseOver} onClick={handleCick} >{props.number}</button></li>
			}
		</React.Fragment>
	)

}

const  mapStateToProps = (store) => {
	return {
		steps: store.reducerApi.steps,

	};
};

export default withRouter(connect(mapStateToProps)(PaginationTop));
