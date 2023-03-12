
import { useState } from 'react';
import {
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Nav,
	NavItem,
	NavLink,
	Collapse,
	Dropdown,
	DropdownToggle,
	DropdownItem,
	DropdownMenu
} from 'reactstrap';
import { Link } from 'react-router-dom';


function MainNav() {
	const [collapsed, setCollapsed] = useState(true);
	const [playlistCollapse, setPlaylistCollapse] = useState(false);

	const toggle = () => {
		setCollapsed(collapsed => !collapsed);
	}

	const playlistToggle = () => {
		setPlaylistCollapse(playlistCollapse => !playlistCollapse);
	}

	const playlistSelect = (selection: string) => {
		alert(selection);
	}

	return (
		<Navbar color="dark" dark expand="md">
			<NavbarBrand href="/">TAFers.net</NavbarBrand>
			<NavbarToggler onClick={toggle} />
			<Collapse isOpen={!collapsed} navbar>
				<Nav className="mr-auto" navbar>
					<NavItem>
						<Link to="/" className="nav-link">Home</Link>
					</NavItem>
					<Dropdown isOpen={playlistCollapse} toggle={playlistToggle} className="playlistBtn">
						<DropdownToggle caret className="nav-link">
							Playlist
						</DropdownToggle>
						<DropdownMenu>
							<DropdownItem header>Header</DropdownItem>
							<DropdownItem disabled>Action</DropdownItem>
							<DropdownItem>Another Action</DropdownItem>
							<DropdownItem divider />
							<DropdownItem onClick={()=>playlistSelect("Example")}>Another Action</DropdownItem>
						</DropdownMenu>
					</Dropdown>
					<NavItem>
						<Link to="/about" className="nav-link">About</Link>
					</NavItem>
					<NavItem>
						<Link to="/promo" className="nav-link">Promo</Link>
					</NavItem>
					<NavItem>
						<Link to="/login" className="nav-link">Login</Link>
					</NavItem>
					<NavItem>
						<Link to="/register" className="nav-link">Register</Link>
					</NavItem>
					<NavItem>
						<Link to="/vibe" className="nav-link">Vibe</Link>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	);
}

export default MainNav;