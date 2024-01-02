import React from "react";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
const Contact = () => {
  return (
    <div className="container p-5">
      <h1 className="mb-4">Send A Quest</h1>
      <Form>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Your Name"
                type="name"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="abc@gmal.com"
                type="email"
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="message">Message</Label>
          <Input
            id="message"
            name="message"
            type="textarea"
            rows="10"
            placeholder="Your Massage"
          />
        </FormGroup>

        <div className="text-start">
          <button type="button" className="fs-4 px-3 btn btn-primary mt-3">
            Send Message
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Contact;
