import React, { useRef } from "react";
import "./contact.components.scss";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import CloseIcon from "@mui/icons-material/Close";
import Zoom from "@mui/material/Zoom";
import IconButton from "@mui/material/IconButton";

function Contact() {
  const form = useRef();
  const [open, setOpen] = React.useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jjp194v",
        "template_sn9lwf8",
        form.current,
        "nZ6esmCDc_2cDjcbV"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setOpen(true);
        },
        (error) => {
          console.log(error.text);
          alert(error.text);
        }
      );
  };

  if (open) {
    setTimeout(() => {
      setOpen(false);
    }, 10000);
  }

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option_icon" />
            <h4>Email</h4>
            <h5>mudasersayeed@gmail.com</h5>
            <a
              href="mailto:mudasersayeed@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className="contact_option_icon" />
            <h4>Messenger</h4>
            <h5>Mudaser Saeedi</h5>
            <a href="https://m.me/username" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className="contact_option_icon" />
            <h4>WhatsApp</h4>
            <h5>+93784300010</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+93784300010 "
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* end of contact options */}

        <div className="alert_container">
          <Zoom in={open}>
            <Alert
              id="al"
              severity="success"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              <AlertTitle>Success</AlertTitle>
              Your Message Has Been Send! Successfully. Thanks
            </Alert>
          </Zoom>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
