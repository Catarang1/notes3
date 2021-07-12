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

	getIdString = (length=5) => Math.random().toString(16).substr(2, length)
	getUniqueProjectID = () => {
		let newProjectID = this.genIdString()
		while(this.state.projects.map(project => project.id).includes(newProjectID)) {
			newProjectID = this.genIdString()
		}
		return newProjectID
	}

	// mock up IDs unique towards arrays
	componentDidMount() {
		window.addEventListener('keyup', (e) => {
			if (e.key === 'Escape') document.getElementById('inputQuery').className = "hidden"
		})

		this.state.projects.forEach(project => {
			let newProjectID = this.getIdString()
			while (this.state.projects.map(p => p.id).includes(newProjectID)) {
				newProjectID = this.getIdString()
			}
			project.id = newProjectID
			project.tasks.forEach(task => {
				let newTaskID = this.getIdString()
				while (project.tasks.map(t => t.id).includes(newTaskID)) {
					newTaskID = this.getIdString()
				}
				task.id = `${newProjectID}:${newTaskID}`
				task.steps.forEach(step => {
					let newStepID = this.getIdString()
					while (task.steps.map(s => s.id).includes(newStepID)) {
						newStepID = this.getIdString()
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
		console.log('Request ID:',request);

		this.setState(produce(this.state, draftState => {

			let projectRef, taskRef, stepRef

			projectID !== undefined && (projectRef = draftState.projects.find(project => project.id === projectID))
			taskID !== undefined && (taskRef = projectRef.tasks.find(task => task.id === `${projectID}:${taskID}`))
			stepID !== undefined && (stepRef = taskRef.steps.find(step => step.id === `${projectID}:${taskID}:${stepID}`))

			switch(request) {
				case Request.PROJECT_DELETE: {
					draftState.projects.filter(project => project.id !== projectID);
					break;
				}
				case Request.PROJECT_RENAME: {
					draftState.projects.find(project => project.id === projectID).name = textString
					break
				}
				case Request.PROJECT_ADD: {
					draftState.projects.push({
						name: 'New Project',
						id: this.getIdString(),
						icon: 'ico',
						dateCreated: '1.1.2001',
						owner: 'You',
						contributors: [],
						tasks: [],
					});
					break;
				}
				case Request.STEP_ADD: {
					console.log('stepadd');
					taskRef.steps.push({
						name: 'New Step',
						id: `${projectID}:${taskID}:${this.getIdString()}`,
						done: false,
						TAG_PRP: false,
						TAG_PNK: false,
						TAG_ORG: false,
						TAG_YLL: false,
						TAG_GRN: false,
					});
					break;
				}
				case Request.STEP_DELETE: {
					break
				}
				case Request.STEP_RENAME: stepRef.name = textString; break;
				case Request.STEP_TOGGLE: stepRef.done = !stepRef.done; break
				case Request.STEP_TAG_TOGGLE_PURPLE: stepRef.TAG_PRP = !stepRef.TAG_PRP; break
				case Request.STEP_TAG_TOGGLE_PINK: stepRef.TAG_PNK = !stepRef.TAG_PNK; break
				case Request.STEP_TAG_TOGGLE_ORANGE: stepRef.TAG_ORG = !stepRef.TAG_ORG; break
				case Request.STEP_TAG_TOGGLE_YELLOW: stepRef.TAG_YLL = !stepRef.TAG_YLL; break
				case Request.STEP_TAG_TOGGLE_GREEN: stepRef.TAG_GRN = !stepRef.TAG_GRN; break

				default: break;
			}
		}))
	}

	render() {
		return (
		<>
			<Header projects={this.state.projects} handle={this.handle} />
			<ActionBar handle={this.handle} />
			<ProjectView tasks={this.state.projects[0].tasks} handle={this.handle} />
			<input id="inputQuery" placeholder="..." className=""></input>
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
