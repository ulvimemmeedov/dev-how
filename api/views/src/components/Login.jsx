import React, { useState } from 'react';
import { Button, FormGroup, Label, Input, Row, Col, Container } from 'reactstrap';
import axios from 'axios';
import alertify from 'alertifyjs';

const Login = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const changeData = (e)=>{
    const element = e.target;
    const name = element.name;
    const value = element.value;
    setFormData({
      ...formData,
      [name]:value
    });
  }

  const login = (e) =>{
    e.preventDefault();
    axios.post('/api/users/login',formData).then(res=> {
      if (res.data.success === true){
        alertify.success(res.data.message);
        localStorage.setItem('token',res.data.token);
        props.setUser(res.data.user);
        localStorage.setItem('username',res.data.username)
        setTimeout(()=>{
          props.history.push('/')
        },3000)
      }
      if (res.data.error){
        alertify.error(res.data.error.message);
      }
    })
  }
 if (props.user) {
  if (props.user.username) {
    props.history.push('/')
  }
 }
  return (
    <Container className='loginpage'>
      <Row >
        <Col md={8}>
      <div className="lgoinpagediv">
      <form onSubmit={login}>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input onChange={(e)=>changeData(e)} type="email" name="email" id="email" placeholder="Email" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input onChange={(e)=>changeData(e)} type="password" name="password" id="password" placeholder="Password" />
          </FormGroup>
        </Col>
      </Row>
      <br />
      <Button color="success" type="submit" >Login</Button>
    </form>
        
      </div>
    </Col>
      </Row>
    </Container>
  );
}

export default Login;
