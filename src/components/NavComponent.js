import React, {Component} from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
  



  class NavComponent extends Component {
    constructor(props) {
      super(props);
      this.state =  { isOpen : false }
     
    }




    render() {
      return (
        <div>
        <Navbar color="dark" expand="md">
          <NavbarBrand href="/">Buscador de imagen</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
        </Navbar>
      </div>
      )
    }

  }

  export default NavComponent;
  