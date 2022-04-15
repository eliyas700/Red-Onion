import React from "react";
import { Button, Form } from "react-bootstrap";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./signup.css";
const Signup = () => {
  return (
    <div className="submit-form mx-auto">
      <h3 className="text-center  py-4  text-onion ">
        Please Sign Up to get Our Services
      </h3>
      <Form className=" mx-auto  ">
        <Form.Group className="mb-3 text-start  " controlId="formBasicEmail">
          <Form.Label className=" ">Name</Form.Label>
          <Form.Control type="text" placeholder="Enter  your Name" />
        </Form.Group>
        <Form.Group className="mb-3 text-start  " controlId="formBasicEmail">
          <Form.Label className=" ">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Re-type your Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Accept the terms and conditions of Red-Onion"
          />
        </Form.Group>
        <Button className="btn-onion" type="submit">
          Sign Up
        </Button>
      </Form>
      <div>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Signup;
