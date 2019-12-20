import React from 'react';
import {Component} from 'react';
import './App.css';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';


const axios = require('axios');



class App extends Component {
  constructor(){
    super()

    this.state={
      email: '',
      subject: '',
      Msg: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  handleChange = e =>{
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(event){
    event.preventDefault();


    const content = {
      email: this.state.email,
      subject: this.state.subject,
      Msg: this.state.Msg
    }

    //console.log("printing state from front-end: ", this.state);

    axios
      .post('/test', content)
      .then(res => {console.log(res.data) })
      .catch(err => {console.log("request failed")});

  }

  render(){
    return(
      <div className="email-page">
        <h1>The Next Email Sender</h1><hr/>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>To</Label>
            <Col sm={10}>
              <Input 
              type="email" 
              name="email" 
              id="exampleEmail" 
              onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleSubject" sm={2}>Subject</Label>
            <Col sm={10}>
              <Input type="text" 
              name="subject" 
              id="exampleSubject" 
              onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleMsg" sm={2}>Message</Label>
            <Col sm={10}>
              <Input 
              type="textarea" 
              name="Msg" 
              onChange={this.handleChange}
              id="exampleMsg" />
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default App;
