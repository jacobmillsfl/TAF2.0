
import { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Collapse } from 'reactstrap';


function HomeNav() {
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
						<NavLink href="#">Home</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="#">About</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="#">Login</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="#">Register</NavLink>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	);
}

export default HomeNav;