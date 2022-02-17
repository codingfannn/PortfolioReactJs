import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_zp6ldyp",
        "template_ddb79jj",
        formRef.current,
        "user_5cJt7ENIx4q3Tu8MlKD1s"
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
    <div className="contact">
      <div className="contact-background"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">Let's connect</h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <img className="contact-icon" src={Phone} alt="" />
              +31 615 327 325
            </div>
            <div className="contact-info-item">
              <img className="contact-icon" src={Email} alt="" />
              radvanno@gmail.com
            </div>
            <div className="contact-info-item">
              <img className="contact-icon" src={Address} alt="" />
              The Netherlands
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p className="contact-desc">
            I am dedicated to find a nice opportunity and always open for
            contribution!
          </p>

          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message"></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
