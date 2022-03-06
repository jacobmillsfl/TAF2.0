import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Collapse } from 'reactstrap';
import './App.css';
import MiddleFrame from './Components/MiddleFrame';
import MusicPlayer from './Components/MusicPlayer/MusicPlayer';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>

        <Navbar className="navbar navbar-dark bg-dark" dark>
          <NavbarBrand href="/" className="mr-auto">Tafers.Net</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/home/">Home</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <MiddleFrame>
          <MusicPlayer />
        </MiddleFrame>
      </div>
    );
  }
}

export default App;