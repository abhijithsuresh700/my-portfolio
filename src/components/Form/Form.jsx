import React, { useRef } from "react";
import "./form.css";
import emailjs from '@emailjs/browser';

const Form = () => {
  const formm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_7y65d6o', 'template_33s6fvm', formm.current, '-tP72ujzgCPr5Xn5Q')
    .then((result) => {
        e.target.reset();
          console.log(result.text,"result check");
      }, (error) => {
          console.log(error.text,"error check");
      });
  };
  return (
    <div className="formContainer">
      <form className="formform" ref={formm} onSubmit={sendEmail}>
        <label className="formlabel">Your Name</label>
        <input type="text" className="forminput" name="user_name" />
        <label className="formlabel">Email</label>
        <input type="email" className="forminput" name="user_email" />
        <label className="formlabel">Subject</label>
        <input type="text" className="forminput" name="user_subject"/>
        <label className="formlabel">Your Name</label>
        <textarea
          rows="6"
          placeholder="type your message here"
          className="forminput"
          name="message"
        />
        <button className="btn" type="submit" value="Send">Submit</button>
      </form>
    </div>
  );
};

export default Form;
