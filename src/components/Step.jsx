import { DeleteIco, EditIco, GripIco, Tag, CheckIco } from "./Icons";
import Request from '../Requests'
import React, { Component } from 'react';

class Step extends Component {

	adjustSize(textarea) {
		textarea.style.height = 'auto'
		textarea.style.height = (textarea.scrollHeight) + "px"
	}

	render() {
		const {step, handle} = this.props
		return (
		<div className="step">
			<div className="block">
				<div className="row">
					<GripIco color="var(--purple-light)"/>
					<button onClick={() => handle(Request.STEP_TAG_TOGGLE_PURPLE, step.id)}><Tag color="tag-purple" selected={step.TAG_PRP}/></button>
					<button onClick={() => handle(Request.STEP_TAG_TOGGLE_PINK, step.id)}><Tag color="tag-pink" selected={step.TAG_PNK}/></button>
					<button onClick={() => handle(Request.STEP_TAG_TOGGLE_ORANGE, step.id)}><Tag color="tag-orange" selected={step.TAG_ORG}/></button>
					<button onClick={() => handle(Request.STEP_TAG_TOGGLE_YELLOW, step.id)}><Tag color="tag-yellow" selected={step.TAG_YLL}/></button>
					<button onClick={() => handle(Request.STEP_TAG_TOGGLE_GREEN, step.id)}><Tag color="tag-green" selected={step.TAG_GRN}/></button>
					<div className="spacer"></div>
					<button onClick={() => handle(Request.STEP_TOGGLE, step.id)}><CheckIco color="var(--purple-light)" selected={step.done}/></button>
					<EditIco color="var(--purple-light)" />
					<DeleteIco color="var(--purple-light)" />
				</div>
				<textarea onKeyDown={ (e)=> this.adjustSize(e.target) } spellCheck={false} defaultValue={step.name} ></textarea>
			</div>
		</div>
	);}
}

export default Step;