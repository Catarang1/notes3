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
					<button className={step.TAG_PRP === false ? "hidden" : ""} onClick={() => handle(Request.STEP_TAG_TOGGLE_PURPLE, step.id)}><Tag color="tag-purple" selected={step.TAG_PRP}/></button>
					<button className={step.TAG_PNK === false ? "hidden" : ""} onClick={() => handle(Request.STEP_TAG_TOGGLE_PINK, step.id)}><Tag color="tag-pink" selected={step.TAG_PNK}/></button>
					<button className={step.TAG_ORG === false ? "hidden" : ""} onClick={() => handle(Request.STEP_TAG_TOGGLE_ORANGE, step.id)}><Tag color="tag-orange" selected={step.TAG_ORG}/></button>
					<button className={step.TAG_YLL === false ? "hidden" : ""} onClick={() => handle(Request.STEP_TAG_TOGGLE_YELLOW, step.id)}><Tag color="tag-yellow" selected={step.TAG_YLL}/></button>
					<button className={step.TAG_GRN === false ? "hidden" : ""} onClick={() => handle(Request.STEP_TAG_TOGGLE_GREEN, step.id)}><Tag color="tag-green" selected={step.TAG_GRN}/></button>
					<div className="spacer"></div>
					<button onClick={() => handle(Request.STEP_TOGGLE, step.id)}><CheckIco color="var(--purple-light)" selected={step.done}/></button>
					<button onClick={() => handle(Request.STEP_RENAME, step.id)}><EditIco color="var(--purple-light)" /></button>
					<button onClick={() => handle(Request.STEP_DELETE, step.id)}><DeleteIco color="var(--purple-light)" /></button>
				</div>
				<textarea
					onBlur={(e) => this.adjustSize(e.target)}
					onChange={(e) => handle(Request.STEP_RENAME, step.id, e.target.value)}
					spellCheck={false}
					defaultValue={step.name} >
				</textarea>
			</div>
		</div>
	);}
}

export default Step;