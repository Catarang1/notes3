import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import data from './data'
import './App.css';

/* components */
import Header from './components/Header.jsx'
import ActionBar from './components/ActionBar.jsx'
import ProjectView from './components/ProjectView.jsx'

class App extends Component {
	state = { ...data }
	render() {
		return (
		<>
			<Header projects={this.state.projects}/>
			<ActionBar />
			<ProjectView tasks={this.state.projects[0].tasks}/>
		</>
		)
	}
}

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
