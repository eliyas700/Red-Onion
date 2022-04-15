import React from "react";
import google from "../../../images/Social/google.png";
import facebook from "../../../images/Social/facebook.png";
import github from "../../../images/Social/github.png";
import "./SocialLogin.css";
// import {
//   useSignInWithGithub,
//   useSignInWithGoogle,
// } from "react-firebase-hooks/auth";
// import auth from "../../../firebase.init";
// import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
  // const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  // const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  // const navigate = useNavigate();
  // let errorElement;
  // if (error || error1) {
  //   errorElement = (
  //     <div>
  //       <p>Error: {error?.message || error1?.message}</p>
  //     </div>
  //   );
  // }
  // if (user || user1) {
  //   navigate("/home");
  // }
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
        {/* <p className="text-danger">{errorElement}</p> */}
        {/* <p className="text-danger">{errorElement}</p> */}
        <button
          // onClick={() => signInWithGoogle()}
          style={{ outline: "none" }}
          className="w-100 mb-3 py-2 rounded-pill border-primary"
        >
          <img height={30} src={google} alt="" /> Continue With {"Google "}
          {/* {loading ? "Loading" : "Google"} */}
        </button>
        <button
          style={{ background: "#384F81" }}
          className="w-100 mb-3 py-2 rounded-pill border-0"
        >
          <img height={30} src={facebook} alt="" />
          <span className="text-white ms-2">Continue With Facebook </span>
        </button>
        <button
          // onClick={() => signInWithGithub()}
          style={{ outline: "none" }}
          className="w-100 py-2 rounded-pill border-secondary"
        >
          <img height={30} src={github} alt="" />{" "}
          <span className=" ms-2">Continue With Github </span>
          {/* {loading1 ? "Loading" : "GitHub"}{" "}
           */}
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
