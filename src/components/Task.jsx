import React, { Component } from 'react';
import Step from './Step.jsx'

import { AddTaskIco, DeleteIco, EditIco, GripIco } from "./Icons";

class Task extends Component {

	isDone() {
		return this.props.task.steps.every( step => step.done )
	}

	adjustSize(textarea) {
		textarea.style.height = 'auto'
		textarea.style.height = (textarea.scrollHeight) + "px"
	}

	render() {
		const {task} = this.props

		return (
			<div className={"task " + (this.isDone() ? "green" : "red")}>
				<div className="content">
					<div className="block">
						<div className="row">
							<GripIco />
							<svg className="progressCircle" viewBox="0 0 24 24">
								<circle r="8" cx="12" cy="12"stroke="var(--tab-bg)" strokeWidth="8" fill="none"></circle>
								<circle r="8" cx="12" cy="12" className="progress" fill="none" stroke={'red'} strokeWidth="4" strokeLinecap="round" strokeDasharray='10 1000'></circle>
							</svg>
							<div className="spacer"></div>
							<button><AddTaskIco /></button>
							<button><EditIco /></button>
							<button><DeleteIco /></button>
						</div>
					</div>
					<textarea spellCheck={false} onKeyDown={ (e)=> this.adjustSize(e.target) } className="taskName" defaultValue={task.name}></textarea>
					<div className="steps">
						{task.steps.map((step, i) => <Step key={i} step={step} />)}
					</div>
				</div>
			</div>
		 );
	}
}

export default Task;