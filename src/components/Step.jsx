import { DeleteIco, EditIco, GripIco, Tag, CheckIco } from "./Icons";
import React, { Component } from 'react';

class Step extends Component {

	adjustSize(textarea) {
		textarea.style.height = 'auto'
		textarea.style.height = (textarea.scrollHeight) + "px"
	}

	render() {
		const {step} = this.props
		return (
		<div className="step">
			<div className="block">
				<div className="row">
					<GripIco color="var(--purple-light)"/>
					<button><Tag color="tag-purple" selected={step.TAG_PRP}/></button>
					<button><Tag color="tag-pink" selected={step.TAG_PNK}/></button>
					<button><Tag color="tag-orange" selected={step.TAG_ORG}/></button>
					<button><Tag color="tag-yellow" selected={step.TAG_YLL}/></button>
					<button><Tag color="tag-green" selected={step.TAG_GRN}/></button>
					<div className="spacer"></div>
					<CheckIco color="var(--purple-light)" selected={step.done}/>
					<EditIco color="var(--purple-light)" />
					<DeleteIco color="var(--purple-light)" />
				</div>
				<textarea onKeyDown={ (e)=> this.adjustSize(e.target) } spellCheck={false} defaultValue={step.name} ></textarea>
			</div>
		</div>
	 );
	}
}

export default Step;