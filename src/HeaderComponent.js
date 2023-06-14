import React, { Component } from 'react';
import { Navbar, NavbarBrand, Card, CardBody } from 'reactstrap';
import './App.css';

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar dark>
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
       
      </React.Fragment>
    );
  }
}

export default Header;
