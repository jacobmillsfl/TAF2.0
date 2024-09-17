import { useState, useContext } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import mediaContext from "../../Contexts/Homepage/MediaContext";
import Auth from '../../Utilities/Auth';

function MainNav() {
	const isAuthenticated = Auth.isAuthenticated();
	const [collapsed, setCollapsed] = useState(true);
	const {
		playlistName,
		setPlaylist,
	} = useContext(mediaContext)

	const toggle = () => {
		setCollapsed(collapsed => !collapsed);
	}

	const playlistSelect = (selection: string) => {
		if (playlistName === undefined || playlistName !== selection) {
			setPlaylist(selection);
		}
	}

	window.onscroll = function () {
		scrollFunction()
	};

	function scrollFunction() {
		if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
			if (!collapsed) {
				setCollapsed(true);
			}
		}
	}

	return (
		<Navbar expand="lg" bg="dark" variant="dark" expanded={!collapsed}>
			<Container>
				<Navbar.Brand href="/">TAFers.net</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggle} />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link as={Link} to="/" eventKey="home">Home</Nav.Link>
						<NavDropdown title="Music" id="basic-nav-dropdown">
							<NavDropdown.Item as={Link} to="/media" onClick={()=>playlistSelect("")} eventKey="media">All</NavDropdown.Item>
							<NavDropdown.Divider />
							<h6 className="dropdown-header">The Ambient Funk</h6>
							<NavDropdown.Item as={Link} to="/media" onClick={()=>playlistSelect("TAF")}>TAF</NavDropdown.Item>
							<NavDropdown.Item as={Link} to="/media" onClick={()=>playlistSelect("Soul On Fire")}>Soul On Fire</NavDropdown.Item>
							<NavDropdown.Item as={Link} to="/media" onClick={()=>playlistSelect("Soul On Fire (Instrumental)")}>Soul On Fire (Instrumental)</NavDropdown.Item>
							<NavDropdown.Divider />
							<h6 className="dropdown-header">Brigand</h6>
							<NavDropdown.Item as={Link} to="/media" onClick={()=>playlistSelect("The Vault")}>
							The Vault
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link as={Link} to="/albums" eventKey="albums">Albums</Nav.Link>
						<Nav.Link as={Link} to="/videos" eventKey="videos">Videos</Nav.Link>
						<Nav.Link as={Link} to="/merch" eventKey="merch">Merch</Nav.Link>
						<Nav.Link as={Link} to="/about" eventKey="about">About</Nav.Link>
						{!isAuthenticated &&
							<Nav.Link as={Link} to="/register" eventKey="register">Register</Nav.Link>
						}
						{!isAuthenticated &&
							<Nav.Link as={Link} to="/login" eventKey="login">Login</Nav.Link>
						}
						{isAuthenticated &&
							<Nav.Link as={Link} to="/admin" eventKey="admin">Admin</Nav.Link>
						}
						{isAuthenticated &&
							<Nav.Link as={Link} to="/logout" eventKey="logout">Log Out</Nav.Link>
						}

					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

const PlayerHeaderStyle = {
	"color": "black",
	"textDecoration": "none"
}
const VibeHeaderStyle = {
	"color": "black",
	"textDecoration": "none"
}

const DropdownHeaderStyle = {
	"padding": "5px !important"
}




export default MainNav;