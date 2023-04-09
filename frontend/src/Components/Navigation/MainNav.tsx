
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

	window.onscroll = function() {
		scrollFunction()
	};

	function scrollFunction() {
		if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
			if (!collapsed) {
				setCollapsed(true);
			}
		}
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
							Music
						</DropdownToggle>
						<DropdownMenu>						
							<NavItem><Link to="/media" style={PlayerHeaderStyle}><DropdownItem onClick={()=>playlistSelect("")}>Player</DropdownItem></Link></NavItem>
							<NavItem><Link to="/vibe" style={VibeHeaderStyle}><DropdownItem>Vibe</DropdownItem></Link></NavItem>
							<DropdownItem divider />
							<DropdownItem header style={DropdownHeaderStyle}>The Ambient Funk</DropdownItem>
							<NavItem><Link to="/media" style={PlayerHeaderStyle}><DropdownItem onClick={()=>playlistSelect("TAF")}>TAF</DropdownItem></Link></NavItem>
							<NavItem><Link to="/media" style={PlayerHeaderStyle}><DropdownItem onClick={()=>playlistSelect("Soul On Fire")}>Soul on Fire</DropdownItem></Link></NavItem>
							<DropdownItem divider />
							<DropdownItem header style={DropdownHeaderStyle}>Brigand</DropdownItem>
							<NavItem><Link to="/media" style={PlayerHeaderStyle}><DropdownItem onClick={()=>playlistSelect("The Vault")}>The Vault</DropdownItem></Link></NavItem>
							{/* <DropdownItem onClick={()=>playlistSelect("Brigand")}>Brigand</DropdownItem> */}
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

const PlayerHeaderStyle = {
	"color":"black", 
	"textDecoration":"none"
}
const VibeHeaderStyle = {
	"color":"black", 
	"textDecoration":"none"
}

const DropdownHeaderStyle = {
	"padding": "5px !important"
}




export default MainNav;