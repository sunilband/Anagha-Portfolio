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
};

const Reciever = ({ name }: Props) => {
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
            <Img width={700} src={`https://s13.gifyu.com/images/SjnLB.jpg`} />
          </Section>

          <Section style={content}>
            <Heading as="h2" style={title}>
              Dear {name},
            </Heading>
            <Text style={paragraph}>
              I hope this message finds you in great spirits. Thank you so much
              for taking the time to explore my portfolio website.
            </Text>
            <Text style={paragraph}>
              I am always excited about potential collaboration opportunities
              and would love to learn more about your project. Your interest
              aligns perfectly with my passion and skills, and I am eager to
              discuss how we can work together to achieve your goals.
            </Text>
            <Text style={paragraph}>
              Thank you once again for reaching out, and I look forward to the
              opportunity to collaborate on something amazing.
            </Text>
            <Text style={regards}>
              Best regards,
              <Heading as="h4" style={{ marginTop: "0px" }}>
                Anagha Yawale
              </Heading>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default Reciever;

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
