import React from "react";
import {
  Html,
  Head,
  Body,
  Preview,
  Img,
  Container,
  Section,
  Heading,
  Text,
} from "@react-email/components";

type Props = {
  name: string;
  email: string;
  message: string;
};

const Sender = ({ name, email, message }: Props) => {
  return (
    <Html>
      <Head />
      <Preview>Anagha Portfolio Contact Form</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logo}>
            <Img width={75} src={`https://s13.gifyu.com/images/Sjns9.png`} />
          </Section>
          <Section>
            <Img width={700} src={`https://s13.gifyu.com/images/SjnTD.jpg`} />
          </Section>

          <Section style={content}>
            <Heading as="h2" style={title}>
              Dear Anagha Yawale,
            </Heading>
            <Text style={paragraph}>
              You Got a message from {name ? name : "Annonimus"}({email})
              through your portfolio website.
            </Text>
            <Text style={paragraph}>Message: {message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default Sender;

const main = {
  backgroundColor: "#f3f3f5",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
};

const title = {
  margin: "0 0 15px",
  fontWeight: "bold",
  fontSize: "21px",
  lineHeight: "21px",
  color: "#0c0d0e",
};

const paragraph = {
  fontSize: "15px",
  lineHeight: "21px",
  color: "#3c3f44",
};

const regards = {
  fontSize: "15px",
  lineHeight: "0px",
  color: "#3c3f44",
  marginTop: "20px",
};

const container = {
  maxWidth: "680px",
  width: "100%",
  margin: "0 auto",
  backgroundColor: "#ffffff",
};

const content = {
  padding: "30px 30px 40px 30px",
};

const logo = {
  display: "flex",
  background: "#f3f3f5",
  padding: "20px 30px",
};
