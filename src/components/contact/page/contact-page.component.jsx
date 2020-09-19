import React from "react";

import {
  LayoutContactPage,
  IconsContainer,
  Icon,
  Svg,
  Form,
  Row,
  FormGroup,
  Label,
  Input,
  TextArea,
  Footer,
  Text,
  SubmitBtn,
  InlineLink,
} from "./contact-page.styles";

const ContactPage = () => (
  <LayoutContactPage className="scalable-contact-page">
    <IconsContainer>
      <Icon key="github">
        <a
          href="https://github.com/Vincent-Vais"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-github"></i>
        </a>
      </Icon>
      <Icon key="linkedin">
        <a
          href="https://www.linkedin.com/in/vincent-vais-b05196193/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </Icon>
      <Icon key="code-wars">
        <a
          href="https://www.codewars.com/users/Vincent_Vais"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Svg />
        </a>
      </Icon>
      <Icon key="cv">
        <a
          href="https://docs.google.com/document/d/129sZp9Z59iZS4uwGyPLIQvehlQefaGBuQE8QawaER6U/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-file"></i>
        </a>
      </Icon>
    </IconsContainer>
    <Form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <Row>
        <FormGroup>
          <Label htmlFor="name">
            <i className="fas fa-user"></i>
          </Label>
          <Input placeholder="Name" type="text" name="name"></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">
            <i className="fas fa-envelope"></i>
          </Label>
          <Input placeholder="Email" type="text" name="email"></Input>
        </FormGroup>
      </Row>
      <Row>
        <FormGroup>
          <Label htmlFor="subject">
            <i className="fas fa-exclamation"></i>
          </Label>
          <Input placeholder="Subject" type="text" name="subject"></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="phone">
            <i className="fas fa-mobile"></i>
          </Label>
          <Input placeholder="Phone number" type="text" name="phone"></Input>
        </FormGroup>
      </Row>
      <Row>
        <TextArea placeholder="Enter your message" name="message"></TextArea>
      </Row>
      <Row>
        <SubmitBtn type="submit">Let's talk!</SubmitBtn>
      </Row>
    </Form>
    <Footer>
      <Text>
        Thank you for visiting my portfolio. Please feel free to contact me with
        any questions or inquiries. I am currently looking for an office/remote
        job, so please be sure to check my{" "}
        <InlineLink
          href="https://docs.google.com/document/d/129sZp9Z59iZS4uwGyPLIQvehlQefaGBuQE8QawaER6U/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          resume{" "}
        </InlineLink>{" "}
        for an aditional information. I am also constantly learning and working
        on new projects that you can find on my{" "}
        <InlineLink
          href="https://github.com/Vincent-Vais"
          rel="noopener noreferrer"
          target="_blank"
        >
          github
        </InlineLink>
        .{" "}
      </Text>
    </Footer>
  </LayoutContactPage>
);

export default ContactPage;
