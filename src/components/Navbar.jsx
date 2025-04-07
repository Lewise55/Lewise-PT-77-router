import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Home</span>
				</Link>
				
				<div className="ml-auto">
					<Link className="btn btn-primary mx-2" to={"/Create"}>Create Contact</Link>
					<Link className="btn btn-primary mx-2" to={"/update"}>Update Contact</Link>
				</div>
			</div>
		</nav>
	);
};