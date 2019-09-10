import React, {Component } from "react";
import { Redirect } from "react-router-dom";
import { Col, Button, Form, FormGroup, Label, Input, Card, Row} from 'reactstrap';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import {setAuthorizationToSuccess} from '../../store/action'

class Login extends Component {

  constructor(props) {
    super(props);
    let newUser = () => {
      localStorage.setItem('Admin', '12345')
    };
    newUser();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      redirectToPreviousRoute: false,
      id: '',
      username: '',
      password: '',
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.replacePath(this.state.username, this.state.password)
  };

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value});
  };


  replacePath(username, password) {
    if (localStorage.getItem(username) === password) {
      this.setState({redirectToPreviousRoute: true});
      this.entrance()
    } else {
      alert('Такой пользователь не зарегистрирован');
    }
  };

  entrance = () => {
    this.props.setAuthorizationToSuccess()
  };

  render() {
    if (this.state.redirectToPreviousRoute) {
      return (
        <Redirect to='/dist/profile'>
        </Redirect>
      )
    }

    return (
      <Row>
        <Col sm="10">
          <Card body>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label for="exampleLogin" sm={2}>Name</Label>
                <Col sm={10}>
                  <Input type="text" name="username" id="exampleLogin" value={this.state.value}
                         onChange={this.handleChange} placeholder=""/>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="examplePassword" sm={2}>Password</Label>
                <Col sm={10}>
                  <Input type="password" name="password" id="examplePassword" value={this.state.value}
                         onChange={this.handleChange} placeholder=""/>
                </Col>
              </FormGroup>
              <FormGroup check row>
                <Button color="info">
                  Войти
                </Button>
                {/*<Button>Зарегистрироваться</Button>*/}
              </FormGroup>
            </Form>
          </Card>
        </Col>
      </Row>
    );
  }

}


const mapStateToProps = (store) => {
    return store
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setAuthorizationToSuccess: setAuthorizationToSuccess
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps ) (Login)
