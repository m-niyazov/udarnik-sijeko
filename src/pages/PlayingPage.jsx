import React from 'react';
import { getApiItem, getNextWord} from '../actions/actionsApi';
import {addIndex, prevWord,} from '../actions/actions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {store} from "../store/store";
import ModeContent from "../components/ModeContent";
import Preloader from "../components/Preloader";
import {withRouter} from "react-router-dom";
import connect from "react-redux/es/connect/connect";

class PlayingPage extends  React.Component  {
	constructor(props){
		super(props);

		this.nextWord = this.nextWord.bind(this);
		this.prevWord = this.prevWord.bind(this);
	}

	onChangeGetIndex = (value) => {
		store.dispatch(addIndex(value));
	};

	componentDidMount(){
		store.dispatch(getApiItem(this.props.match.params.id, this.props));
	}


	nextWord(){
		let steps = this.props.steps;
		let {id, num} = this.props.initialData;
		let {index} = this.props;
		if(index == null){
			alert("Выберите букву ")
		}else {
			store.dispatch(getNextWord(id, num, index, steps));
		}
	}

	prevWord(){
		let steps = this.props.steps;
		let num = this.props.initialData.num - 1 ;
		steps.map((step) => {
			if(step.num === num){
				store.dispatch(prevWord(num, step.question, step.index));
				store.dispatch(addIndex(step.index));
			}
		});
	}

	render() {
		let {num, count, question, id, name, status, redirectUrl } = this.props.initialData;

		return this.props.isLoading ?
			<Preloader/>
			:
			<ReactCSSTransitionGroup
				component="main"
				transitionName="slide"
				transitionAppear={true}
				transitionAppearTimeout={1000}
				transitionEnterTimeout={500}
				transitionLeaveTimeout={500}
				>
				<ModeContent
					stepNum={num}
					count={count}
					question={question}
					getIndex={this.onChangeGetIndex}
					playerId={id}
					nextWord={this.nextWord}
					prevWord={this.prevWord}
					playerName={name}
					status={status}
					redirectUrl={redirectUrl}
				/>
			</ReactCSSTransitionGroup>

		}
}

const  mapStateToProps = (store) => {
	return {
		playerName: store.reducerApi.name,
		initialData: store.reducerApi.initialData,
		steps: store.reducerApi.steps,
		index: store.reducerApi.index,
		count: store.reducerApi.count,
		redirectUrl: store.reducerApi.redirectUrl,
		isLoading: store.reducerApi.isLoading,
		word: store.reducerApi.word

	};
};

export default withRouter(connect(mapStateToProps)(PlayingPage));

