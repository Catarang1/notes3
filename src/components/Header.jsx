const Header = ({projects}) => {
	return (
		<header>
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="34" viewBox="0 0 16 34">
				<polygon points="10 34 0 34 6 17 0 0 10 0 16 17 10 34" style={{fill:'#fff'}}/>
			</svg>
			<h1>Project: </h1>
			<select>
				{ projects.map( (project, i) => <option key={i} value={project.id}>{project.name}</option>) }
			</select>
		</header>
	 );
}

export default Header;