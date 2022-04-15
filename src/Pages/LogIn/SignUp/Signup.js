import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./signup.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  if (user) {
    navigate("/home");
  }
  const handleCreateUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPass = event.target.confirmPass.value;
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="submit-form mx-auto">
      <h3 className=" text-center py-4  text-onion ">
        Please Sign Up to get Our Services
      </h3>
      <Form onSubmit={handleCreateUser} className=" mx-auto  ">
        <Form.Group className="mb-3 text-start  ">
          <Form.Label className=" ">Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            required
            placeholder="Enter  your Name"
          />
        </Form.Group>
        <Form.Group className="mb-3 text-start  " controlId="formBasicEmail">
          <Form.Label className=" ">Email address</Form.Label>
          <Form.Control
            type="email"
            required
            name="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            required
            name="confirmPass"
            placeholder="Re-type your Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={() => {
              setChecked(!checked);
            }}
            type="checkbox"
            className={checked ? "text-success" : "text-danger"}
            label="Accept the terms and conditions of Red-Onion"
          />
        </Form.Group>
        <Button className="btn-onion" disabled={!checked} type="submit">
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
