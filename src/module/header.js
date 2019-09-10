import React from 'react';
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand,
         Nav, NavItem, UncontrolledDropdown} from 'reactstrap';
import logIn from "./pages/helpers/authentication"
import {connect} from "react-redux";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }


    render() {
        return (
            <div>
	            <Navbar color="light" light expand="md">
                    <NavbarBrand href="">
                        <img src={'../images/react.svg'} style={{width:10+'%'}}/>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to={"/dist/"}> Главная
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to={"/dist/news"}> Новости
                                </Link>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                 {logIn(this.props)}
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
                <hr/>
            </div>
        );
    }

    componentDidMount() {
        let profileView = this.props.Authorization.authorization;
        console.log(profileView)
        if (profileView) {
            this.setState(
              {isOpen: true}
            );
        } else {
            this.setState(
              {isOpen: false}
            );
        }
    }

}


const mapStateToProps = (store)=>{
    return store
}


export default connect(mapStateToProps) (Header)
