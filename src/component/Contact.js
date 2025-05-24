import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Swal from 'sweetalert2';
import './Contact.css';
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import Earth from "../assets/images/Earth.png"
export const Contact = () => {
  const formDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDeets, setFormDetails] = useState(formDetails);
  const [buttonText, setButtonText] = useState('Send');

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDeets,
      [category]: value
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setButtonText("Sending...");

    const formData = new FormData();
    formData.append("access_key", "a0dd6fa1-b1fc-4fb4-b267-e66f42be113c");
    formData.append("firstName", formDeets.firstName);
    formData.append("lastName", formDeets.lastName);
    formData.append("email", formDeets.email);
    formData.append("phone", formDeets.phone);
    formData.append("message", formDeets.message);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        Swal.fire({
          title: "Success!",
          text: "Your message was sent successfully.",
          icon: "success",
          confirmButtonColor: "#3085d6"
        });
        setFormDetails(formDetails);
      } else {
        Swal.fire({
          title: "Oops!",
          text: "Something went wrong. Please try again.",
          icon: "error",
          confirmButtonColor: "#d33"
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "There was a problem submitting your form.",
        icon: "error",
        confirmButtonColor: "#d33"
      });
    }

    setButtonText("Send");
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">

       <Col md={6}>
  <motion.div
    className="earth_container"
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.9 }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <img src={Earth} alt="Rotating Earth" className="rotating-earth" />
  </motion.div>
</Col>


          {/* RIGHT - Contact Form */}
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Get In Touch
              </motion.h2>

              <form onSubmit={onSubmit}>
                <Row>
                  <Col sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDeets.firstName}
                      placeholder="First Name"
                      onChange={(e) => onFormUpdate('firstName', e.target.value)}
                      required
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDeets.lastName}
                      placeholder="Last Name"
                      onChange={(e) => onFormUpdate('lastName', e.target.value)}
                      required
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input
                      type="email"
                      value={formDeets.email}
                      placeholder="Email Address"
                      onChange={(e) => onFormUpdate('email', e.target.value)}
                      required
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input
                      type="tel"
                      value={formDeets.phone}
                      placeholder="Phone Number"
                      onChange={(e) => onFormUpdate('phone', e.target.value)}
                      required
                    />
                  </Col>
                  <Col>
                    <textarea
                      rows="6"
                      value={formDeets.message}
                      placeholder="Message"
                      onChange={(e) => onFormUpdate('message', e.target.value)}
                      required
                    />
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 250 }}
                    >
                      <span>{buttonText}</span>
                    </motion.button>
                  </Col>
                </Row>
              </form>
            </motion.div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};
