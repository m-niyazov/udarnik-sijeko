import React from 'react';

import GetClickable from "./PaginationTop";
import axios from "axios";
import PropTypes from 'prop-types';

class WordsMain extends  React.Component {
	constructor(props) {
		super(props);

		// this.state = {
		// 	initialData: this.props.initialData,
		// };

		this.getBtn = this.getBtn.bind(this);
		this.handleClickWord = this.handleClickWord.bind(this);
	}



	handleClickWord(e){
		e.currentTarget.style.backgroundColor = 'blue';
	}

	render(){
		let steps = this.props.initialData.steps;
		let arr = [];
		for (let i in steps){
			arr.push(steps[i])
		}

		return(
			<div className="words-p">
				{arr.map(steps =>
					this.getBtn(steps.question)
				)}
			</div>
		)

	}
}

WordsMain.propTypes = {
	initialData: PropTypes.object.isRequired
};
export default WordsMain;
