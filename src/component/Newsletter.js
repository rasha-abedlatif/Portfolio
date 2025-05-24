import { useState } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import './Newsletter.css'

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("sending");

    const formData = new FormData();
    formData.append("access_key", "a0dd6fa1-b1fc-4fb4-b267-e66f42be113c"); // your key
    formData.append("email", email);
    formData.append("subject", "New Newsletter Subscription");

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
      }).then(res => res.json());

      if (res.success) {
        setStatus("success");
        setMessage("You've been successfully subscribed to our newsletter!");
        setEmail('');
      } else {
        setStatus("error");
        setMessage("Subscription failed. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp" id="subsc">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Subscribe to our Newsletter<br />& Never miss latest updates
            </h3>
            {status === 'sending' && <Alert>Sending...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
