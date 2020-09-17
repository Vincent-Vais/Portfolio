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
} from "./contact-page.styles";

const ContactPage = () => (
  <LayoutContactPage>
    <IconsContainer>
      <Icon key="github">
        <i className="fab fa-github"></i>
      </Icon>
      <Icon key="linkedin">
        <i className="fab fa-linkedin-in"></i>
      </Icon>
      <Icon key="code-wars">
        <Svg />
      </Icon>
      <Icon key="cv">
        <i className="fas fa-file"></i>
      </Icon>
    </IconsContainer>
    <Form name="contact" method="POST" data-netlify="true">
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
        Thank you for visiting my portfolio web site. Please feel free to
        contact me with any questions or inquiries. I am currently looking for
        an office/remote job, so be sure to check the links provided above.{" "}
      </Text>
    </Footer>
  </LayoutContactPage>
);

export default ContactPage;
