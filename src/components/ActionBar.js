import { AddProjectIco, AddTaskIco, DeleteIco, EditIco, AddPeopleIco, RemovePersonIco, PaletteIco } from "./Icons";

const ActionBar = () => {
	return (
		<nav>
			<button>
				<AddTaskIco /> <span className="description">add task</span>{" "}
			</button>
			<button>
				<AddProjectIco /> <span className="description">add project</span>{" "}
			</button>
			<button>
				<EditIco /> <span className="description">rename project</span>{" "}
			</button>
			<button>
				<PaletteIco /> <span className="description">change project icon</span>{" "}
			</button>
			<button>
				<DeleteIco /> <span className="description">delete project</span>{" "}
			</button>
			<button>
				<AddPeopleIco /> <span className="description">add friends</span>{" "}
			</button>
			<button>
				<RemovePersonIco /> <span className="description">remove friend</span>{" "}
			</button>
		</nav>
	);
};

export default ActionBar;
