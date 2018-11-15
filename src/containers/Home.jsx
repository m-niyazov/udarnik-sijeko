import React from 'react';
import { withRouter} from 'react-router-dom';
import {requestApi} from "../actions/actionsApi";
import {addName, isLoading, removeItem} from "../actions/actions";
import {store} from '../store/store'
import connect from "react-redux/es/connect/connect";

class HomePages extends React.Component{
	constructor(props){
		super(props);
		this.hadleStartStandart = this.hadleStartStandart.bind(this);
		this.hadleStartBig = this.hadleStartBig.bind(this);
		this.hadleStartMarathon = this.hadleStartMarathon.bind(this);

	}

	hadleStartStandart() {
		store.dispatch(removeItem());
		store.dispatch(isLoading(true));
		store.dispatch(requestApi(this.playerName.value, 'standard', this.props));
		store.dispatch(addName(this.playerName.value));
		localStorage.setItem('name', this.playerName.value)
	}

	hadleStartBig(){
		store.dispatch(removeItem());
		store.dispatch(requestApi(this.playerName.value, 'big', this.props));
		store.dispatch(addName(this.playerName.value));
		localStorage.setItem('name', this.playerName.value)
	}

	hadleStartMarathon(){
		store.dispatch(removeItem());
		store.dispatch(requestApi(this.playerName.value, 'marathon', this.props));
		store.dispatch(addName(this.playerName.value));
		localStorage.setItem('name', this.playerName.value);
	}


	componentDidMount(){
		store.dispatch(removeItem);
		document.querySelector('title').innerHTML = 'Udarnik • sijeko';
	}

	render(){
		return (
			<main>
				<form action="" onSubmit={(e) => e.preventDefault()}>
					<input  type="text" ref={(input) => {this.playerName = input}} className="form-control form-input" defaultValue={localStorage.getItem(('name'))}    placeholder="Введите имя"  />

					<div className="btn-group">
						<button  type="submit" onClick={this.hadleStartStandart}  className="btn btn-outline-secondary form-btn">Пройти тест</button>

						<button className="btn dropdown-toggle" data-toggle="dropdown">
						</button>
						<ul className="dropdown-menu">
							<button onClick={this.hadleStartBig} className="btn-dropdown btn ">Большой режим</button>
							<button onClick={this.hadleStartMarathon} className="btn-dropdown btn ">Марафон</button>
						</ul>
					</div>
				</form>

			</main>
		)
	}
}


const  mapStateToProps = (store) => {
	return {
		id: store.reducerApi.id,
	};
};

export default withRouter(connect(mapStateToProps)(HomePages));
