import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';


export default class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <hr />
                <Nav>
                    <NavItem>
                        <NavLink disabled  href="#">Республика Беларусь г.Минск ул.Веры Хоружей 8</NavLink>
                    </NavItem>
                    <NavItem>
                        <Nav vertical>
                            <NavItem>
                                <NavLink disabled href="#">+375 29 123 45 67</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink disabled href="#">hw@gmail.com</NavLink>
                            </NavItem>
                        </Nav>
                    </NavItem>
                    <NavItem>
                        <Nav vertical>
                            <NavItem>
                                <NavLink target="_blank" href="https://www.instagram.com/">Instagram</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink target="_blank" href="https://ru-ru.facebook.com">Facebook</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink target="_blank" href="https://twitter.com/">Twitter</NavLink>
                            </NavItem>
                        </Nav>
                    </NavItem>
                    <NavItem>
                        <NavLink  href="#">Задать вопрос</NavLink>
                    </NavItem>
                </Nav>

            </div>
        );
    }
}