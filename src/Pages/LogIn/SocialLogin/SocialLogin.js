import React from "react";
import google from "../../../images/Social/google.png";
import facebook from "../../../images/Social/facebook.png";
import github from "../../../images/Social/github.png";
import "./SocialLogin.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";

const SocialLogin = () => {
  return (
    <div className="mb-4">
      <div className="d-flex my-4 align-items-center">
        <div
          style={{ height: "1px", background: "#3e3e3e", width: "95%" }}
        ></div>
        <div>
          <span className="px-2">OR</span>
        </div>
        <div
          style={{ height: "1px", background: "#3e3e3e", width: "95%" }}
        ></div>
      </div>
      <div className="social-icons">
        <button
          style={{ outline: "none" }}
          className="w-100 mb-3 py-2 rounded-pill border-primary"
        >
          <img height={30} src={google} alt="" /> Continue With {"Google "}
        </button>
        <button
          style={{ background: "#384F81" }}
          className="w-100 mb-3 py-2 rounded-pill border-0"
        >
          <img height={30} src={facebook} alt="" />
          <span className="text-white ms-2">Continue With Facebook </span>
        </button>
        <button
          style={{ outline: "none" }}
          className="w-100 py-2 rounded-pill border-secondary"
        >
          <img height={30} src={github} alt="" />{" "}
          <span className=" ms-2">Continue With Github </span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
