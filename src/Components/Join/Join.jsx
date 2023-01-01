import React from "react";
import { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kl29klv",
        "template_zk49bvi",
        form.current,
        "EFQA5OkbJybm7BxPr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="Join" id=" join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO </span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span className="stroke-text">YOUR BODY</span>
          <span> WITH US</span>
        </div>
      </div>
      <div className="right-j">
        <form
          ref={form}
          action=""
          className="email-container"
          onSubmit={sendEmail}
        >
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email address"
          />
          <button className="btn btn-j">Join now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
