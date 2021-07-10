import Task from './Task.jsx'

const ProjectView = ({tasks, handle}) => {
	return (
		<div id="projectView">
			{tasks.map((task, i) => <Task key={i} task={task} handle={handle} />)}
		</div>
	 );
}

export default ProjectView;