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

	genIdString = (length=5) => Math.random().toString(16).substr(2, length)

	// mock up IDs unique towards arrays
	componentDidMount() {
		this.state.projects.forEach(project => {
			let newProjectID = this.genIdString()
			while (this.state.projects.map(p => p.id).includes(newProjectID)) {
				newProjectID = this.genIdString()
			}
			project.id = newProjectID
			project.tasks.forEach(task => {
				let newTaskID = this.genIdString()
				while (project.tasks.map(t => t.id).includes(newTaskID)) {
					newTaskID = this.genIdString()
				}
				task.id = `${newProjectID}:${newTaskID}`
				task.steps.forEach(step => {
					let newStepID = this.genIdString()
					while (task.steps.map(s => s.id).includes(newStepID)) {
						newStepID = this.genIdString()
					}
					step.id = `${newProjectID}:${newTaskID}:${newStepID}`
				})
			})
		})
	}

	handle = (request, idString, textString) => {
		// parse args
		let argArray = idString.split(':')
		let projectID = argArray[0]
		let taskID = argArray[1]
		let stepID = argArray[2]
		console.log(argArray);

		switch(request) {

			case Request.STEP_TAG_TOGGLE_GREEN:
			case Request.STEP_TAG_TOGGLE_YELLOW:
			case Request.STEP_TAG_TOGGLE_ORANGE:
			case Request.STEP_TAG_TOGGLE_PINK:
			case Request.STEP_TAG_TOGGLE_PURPLE:
			case Request.STEP_TOGGLE: {
				this.setState(produce(this.state, draftState => {
					let stepReference = draftState
						.projects.find(p => p.id === projectID)
							.tasks.find(task => task.id === `${projectID}:${taskID}`)
								.steps.find(step => step.id === `${projectID}:${taskID}:${stepID}`)
					switch (request) {
						case Request.STEP_TOGGLE: stepReference.done = !stepReference.done; break
						case Request.STEP_TAG_TOGGLE_PURPLE: stepReference.TAG_PRP = !stepReference.TAG_PRP; break
						case Request.STEP_TAG_TOGGLE_PINK: stepReference.TAG_PNK = !stepReference.TAG_PNK; break
						case Request.STEP_TAG_TOGGLE_ORANGE: stepReference.TAG_ORG = !stepReference.TAG_ORG; break
						case Request.STEP_TAG_TOGGLE_YELLOW: stepReference.TAG_YLL = !stepReference.TAG_YLL; break
						case Request.STEP_TAG_TOGGLE_GREEN: stepReference.TAG_GRN = !stepReference.TAG_GRN; break
						default: break;
					}
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
