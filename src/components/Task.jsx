import React, { Component } from 'react';
import Step from './Step.jsx'
import Request from '../Requests'

import { AddTaskIco, DeleteIco, EditIco, GripIco } from "./Icons";

class Task extends Component {

	isDone() {
		return this.props.task.steps.every( step => step.done )
	}
	countDoneSteps() {
		return this.props.task.steps.filter(step => step.done).length
	}
	countAllSteps() {
		return this.props.task.steps.length
	}
	calcDash() {
		return (this.countDoneSteps() / this.countAllSteps() * 50) + " 1000"
	}
	adjustSize(textarea) {
		textarea.style.height = 'auto'
		textarea.style.height = (textarea.scrollHeight) + "px"
	}
	render() {
		const {task, handle} = this.props

		return (
			<div className={"task " + (this.isDone() ? "green" : "red")}>
				<div className="content">
					<div className="block">
						<div className="row">
							<GripIco />
							<svg className="progressCircle" viewBox="0 0 24 24">
								<circle r="8" cx="12" cy="12"stroke="var(--tab-bg)" strokeWidth="8" fill="none"></circle>
								<circle r="8" cx="12" cy="12" className="progress" fill="none" stroke={this.isDone() ? "var(--green)" : "var(--red)"} strokeWidth="4" strokeLinecap="round" strokeDasharray={this.calcDash()}></circle>
							</svg>
							<div className="spacer"></div>
							<button onClick={() => handle(Request.STEP_ADD, task.id, undefined)}><AddTaskIco /></button>
							<button><EditIco /></button>
							<button><DeleteIco /></button>
						</div>
					</div>
					<textarea spellCheck={false} onKeyDown={ (e)=> this.adjustSize(e.target) } className="taskName" defaultValue={task.name}></textarea>
					<div className="steps">
						{task.steps.map((step, i) => <Step key={i} step={step} handle={handle} />)}
					</div>
				</div>
			</div>
		 );
	}
}

export default Task;