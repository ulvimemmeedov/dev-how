import React, { useState } from 'react';
import { Col, Row, Button, FormGroup, Label, Input, Container } from 'reactstrap';
import axios from 'axios';
import alertify from 'alertifyjs';
import gif from '../Ulvi.gif'

const Register = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: ""
  });
  const  changeData = (e)=>{
    const element = e.target;
    const name = element.name;
    const value = element.value;

    setFormData({
      ...formData,
      [name]:value
    });
  }
  const register = (e) =>{
    e.preventDefault();
    axios.post('/api/users/create',formData).then(res=> {
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
      console.log(res.data);
    }).catch(err=>console.log(err))  
  }
  return (
   <Container className="registerpage">
     <Row>
      <Col md={8}>
      <div className="registerpagediv">

      <form onSubmit={register}>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input onChange={(e)=>changeData(e)} type="text" name="name" id="name" placeholder="Name" />
          </FormGroup>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input onChange={(e)=>changeData(e)} type="text" name="username" id="username" placeholder="Username" />
          </FormGroup>
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
      <Button color="success" type="submit" >Sign in</Button>
    </form>
    </div>
      </Col>
     </Row>
   </Container>
  );
}

export default Register;
