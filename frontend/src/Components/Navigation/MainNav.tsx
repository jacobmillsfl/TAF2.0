
import { useState, useContext } from 'react';
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
import mediaContext from "../../Contexts/Homepage/MediaContext";


function MainNav() {
	const [collapsed, setCollapsed] = useState(true);
	const [playlistCollapse, setPlaylistCollapse] = useState(false);

	const {
        setPlaylist,
    } = useContext(mediaContext)


	const toggle = () => {
		setCollapsed(collapsed => !collapsed);
	}

	const playlistToggle = () => {
		setPlaylistCollapse(playlistCollapse => !playlistCollapse);
	}

	const playlistSelect = (selection: string) => {
		setPlaylist(selection);
	}

	return (
		<Navbar color="dark" dark expand="md">
			<NavbarBrand href="#">TAFers.net</NavbarBrand>
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
							<NavItem><Link to="/media" style={{"color":"black", "textDecoration":"none"}}><DropdownItem>Media</DropdownItem></Link></NavItem>
							<NavItem><Link to="/vibe" style={{"color":"black", "textDecoration":"none"}}><DropdownItem>Vibe</DropdownItem></Link></NavItem>
							<DropdownItem divider />
							<DropdownItem header>The Ambient Funk</DropdownItem>
							<DropdownItem onClick={()=>playlistSelect("TAF")}>TAF</DropdownItem>
							<DropdownItem divider />
							<DropdownItem header>Brigand</DropdownItem>
							<DropdownItem onClick={()=>playlistSelect("The Vault")}>The Vault</DropdownItem>
						</DropdownMenu>
					</Dropdown>
					<NavItem>
						<Link to="/albums" className="nav-link">Albums</Link>
					</NavItem>
					<NavItem>
						<Link to="/videos" className="nav-link">Videos</Link>
					</NavItem>
					<NavItem>
						<Link to="/about" className="nav-link">About</Link>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	);
}

export default MainNav;