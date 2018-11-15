import React, { Component } from 'react';
import {Route, Switch,  withRouter} from 'react-router-dom';
import './App.css';
import PlayingPage from './pages/PlayingPage';
import Header from "./components/Header";
import HomePages from "./containers/Home";
import ErroPage from "./components/ErrorPage";


class App extends Component {

	render() {
	    return (
	      <>
		      <Header/>
		      <Switch>
			      <Route exact path="/" render={() => <HomePages />} />
			      <Route  path={`/standard-mode/:id`} render={() => <PlayingPage /> } />
			      <Route  path={`/big-mode/:id`} render={() => <PlayingPage /> } />
			      <Route  path={`/marathon-mode/:id`} render={() => <PlayingPage /> } />} />
			      <Route  render={() => <ErroPage/>} />
			      <Route path={`/error/404`} render={() => <ErroPage/>} />
		      </Switch>
	      </>
	    );
  }
}



export default withRouter((App));

