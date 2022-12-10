
import { useState } from 'react';
import {
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Nav,
	NavItem,
	NavLink,
	Collapse
} from 'reactstrap';
import { Link } from 'react-router-dom';


function MainNav() {
	const [collapsed, setCollapsed] = useState(true);

	const toggle = () => {
		setCollapsed(collapsed => !collapsed);
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
					<NavItem>
					<Link to="/visuals" className="nav-link">Visuals</Link>					
					</NavItem>
					<NavItem>
						<Link to="/about" className="nav-link">About</Link>					
					</NavItem>
					<NavItem>
					<Link to="/login" className="nav-link">Login</Link>					
					</NavItem>
					<NavItem>
						<Link to="/register" className="nav-link">Register</Link>					
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	);
}

export default MainNav;