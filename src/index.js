import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import produce from "immer"
import data from './data'
import './App.css';

/* components */
import Header from './components/Header.jsx'
import ActionBar from './components/ActionBar.jsx'
import ProjectView from './components/ProjectView.jsx'

import Request from './Requests'

class App extends Component {
	state = { ...data }

	// mock up IDs unique towards arrays
	componentDidMount() {
		let idLength = 5
		this.state.projects.forEach(project => {
			let newProjectID = Math.random().toString(16).substr(2, idLength)
			while (this.state.projects.map(p => p.id).includes(newProjectID)) {
				newProjectID = Math.random().toString(16).substr(2, idLength)
			}
			project.id = newProjectID
			project.tasks.forEach(task => {
				let newTaskID = Math.random().toString(16).substr(2, idLength)
				while (project.tasks.map(t => t.id).includes(newTaskID)) {
					newTaskID = Math.random().toString(16).substr(2, idLength)
				}
				task.id = `${newProjectID}:${newTaskID}`
				task.steps.forEach(step => {
					let newStepID = Math.random().toString(16).substr(2, idLength)
					while (task.steps.map(s => s.id).includes(newStepID)) {
						newStepID = Math.random().toString(16).substr(2, idLength)
					}
					step.id = `${newProjectID}:${newTaskID}:${newStepID}`
				})
			})
		})
	}

	handle = (request, argString) => {
		// parse args
		let argArray = argString.split(':')
		let projectID = argArray[0]
		let taskID = argArray[1]
		let stepID = argArray[2]
		console.log(projectID, taskID, stepID);

		switch(request) {

			case Request.STEP_TOGGLE: {
				this.setState(produce(this.state, draftState => {
					let project = draftState.projects.find(p => p.id === projectID)
					console.log(project);
				}))
				break;
			}

			/* Other request types */

			default: break;
		}
	}

	render() {
		return (
		<>
			<Header projects={this.state.projects}/>
			<ActionBar />
			<ProjectView tasks={this.state.projects[0].tasks}  handle={this.handle} />
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
