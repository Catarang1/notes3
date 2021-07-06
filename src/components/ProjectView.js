import Task from './Task.jsx'

const ProjectView = ({tasks}) => {
	return (
		<div id="projectView">
			{tasks.map((task, i) => <Task key={i} task={task} />)}
		</div>
	 );
}

export default ProjectView;