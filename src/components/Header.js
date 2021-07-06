const Header = ({projects}) => {
	return (
		<header>
			<h1>Project: </h1>
			<select>
				{ projects.map( (project, i) => <option key={i} value={project.id}>{project.name}</option>) }
			</select>
		</header>
	 );
}

export default Header;