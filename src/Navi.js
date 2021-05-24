import React, {  Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button
} from 'reactstrap';

class Navi extends Component {
    render(){
 

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><Button className="rounded-circle " color="success"><b>D</b></Button> Shop</NavbarBrand>
        <NavbarToggler  />
        <Collapse navbar>
          <Nav className="ml-auto" navbar >
            
            <UncontrolledDropdown nav inNavbar >
              <DropdownToggle nav caret>
                Cart - { this.props.cart.length }
              </DropdownToggle>
              <DropdownMenu right>
                  {
                       this.props.cart.map(item=>(<DropdownItem>
                       {item.product.productName} - {item.quantity} | {" "}
                       <Button className=" btn-sm " color="danger"><b>-</b></Button>
                      </DropdownItem>))
                   
                  }
                
                
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
    }
}

export default Navi;