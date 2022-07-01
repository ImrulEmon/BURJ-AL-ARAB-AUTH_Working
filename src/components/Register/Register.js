import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { Form, Button, Card, Container } from "react-bootstrap";
import "../Login/Login.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            <Form>
              <Form.Group id="email" className="my-2">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" required />
              </Form.Group>

              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" required />
              </Form.Group>

              <Form.Group className="my-2" id="password">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type="password" required />
              </Form.Group>

              <Button className="w-100 my-4" type="submit">
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Already have an account ? <Link className="link" to='/login'>Log In</Link>
       
          <Button className="google w-100 my-5 d-flex justify-content-center align-items-center"><i class="fa-brands fa-google"></i> <span className="mx-5">Google</span></Button>
        </div>
      </div>
    </Container>
  );
};

export default Register;
