import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./signup.css";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [warning, setWarning] = useState("");
  const [checked, setChecked] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updatingError] = useUpdateProfile(auth);
  const [sendEmailVerification, sending, verificationError] =
    useSendEmailVerification(auth);
  if (user) {
    navigate("/home");
    console.log(user);
  }
  let errormsg;

  if (error || updatingError) {
    errormsg = error?.message;
  }
  const handleCreateUser = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPass = event.target.confirmPass.value;
    password.length < 6 &&
      setWarning("Password Must Have at-least 6 Characters");
    if (password === confirmPass) {
      setWarning("");
      await createUserWithEmailAndPassword(email, password);

      await sendEmailVerification();
      if (user.emailVerified) {
        await updateProfile({ displayName: name });
      } else {
        setWarning(
          <div>
            <h3 className="text-center my-3 text-danger">
              Please Verify Your Email First
            </h3>
            <button
              onClick={sendEmailVerification()}
              className="btn btn-link text-danger"
            >
              Resend Verification Message?
            </button>
          </div>
        );
      }
    } else {
      setWarning("Sorry Password Didn't Match");
    }
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
            defaultValue="Eliyas Hossain"
            placeholder="Enter  your Name"
          />
        </Form.Group>
        <Form.Group className="mb-3 text-start  " controlId="formBasicEmail">
          <Form.Label className=" ">Email address</Form.Label>
          <Form.Control
            type="email"
            required
            defaultValue="Eliyas"
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
        <div>
          <p className="text-danger">{errormsg || warning}</p>
        </div>
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
