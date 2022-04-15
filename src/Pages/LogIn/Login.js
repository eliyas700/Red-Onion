import React from "react";
import { Button, Form } from "react-bootstrap";
import SocialLogin from "./SocialLogin/SocialLogin";

const LogIn = () => {
  return (
    <div className="submit-form mx-auto">
      <h2 className="text-center text-onion py-4">Please Log In</h2>
      <Form className="mx-auto my-4">
        <Form.Group className="mb-3 text-start  " controlId="formBasicEmail">
          <Form.Label className=" ">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button className="btn-onion" type="submit">
          Log In
        </Button>
      </Form>

      <div>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default LogIn;
