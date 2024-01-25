import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Heading = styled.h1`
  color: #333;
`;

const SubHeading = styled.h2`
  color: #014da0;
`;

const Paragraph = styled.p``;

function App() {
  return (
    <Container>
      <Heading>Privacy Policy</Heading>

      <Paragraph>
        The Kangen Connect team operates this mobile application and its server.
        This page informs you of our policies regarding the collection, use, and
        disclosure of personal data when you use our Service and the choices you
        have associated with that data. We collect several different types of
        information for various purposes to provide and improve our Service to
        you.
      </Paragraph>

      <SubHeading>Types of Data Collected</SubHeading>
      <Paragraph>
        <strong>Personal Data</strong>
        <br />
        While using our Service, we may ask you to provide us with certain
        personally identifiable information that can be used to contact or
        identify you ("Personal Data"). Personally identifiable information may
        include, but is not limited to:
        <ul>
          <li>Email address</li>
          <li>Contact Number</li>
          <li>Details of Persons and data you add</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>Address, State, Province, ZIP/Postal code, City</li>
          <li>Cookies and Usage Data</li>
        </ul>
      </Paragraph>

      <Paragraph>
        <strong> Information Collection and Use</strong>
        <br />
        We may collect certain information about your device, including but not
        limited to:
        <ul>
          <li>
            <strong>Device Information: </strong> We may collect information
            about your mobile device, including the device model, operating
            system, unique device identifiers, and mobile network information.
          </li>
          <li>
            <strong>Log Information: </strong> When you use our App, we
            automatically collect certain information, such as your IP address,
            browser type, referring/exiting pages, and operating system.
          </li>
          <li>
            <strong>Usage Information: </strong> We collect information about
            how you use our App, including the features you access and the
            actions you take.
          </li>
          <li>
            <strong>Location Information: </strong>With your consent, we may
            collect information about your precise or approximate location.
          </li>
        </ul>
      </Paragraph>

      <Paragraph>
        <strong>Data Collected by Third Parties</strong>
        <br />
        The App may use third-party services that collect information used to
        identify you:
        <ul>
          <li>
            <strong>API Server: </strong> we use API service for OTP service, We
            use OTP for verification of user’s registration.
          </li>
        </ul>
      </Paragraph>

      <SubHeading>Cookies</SubHeading>
      <Paragraph>
        Cookies are small files stored on your device that allow us to capture
        and remember certain information. The App may use cookies for
        authentication and analytics purposes.
      </Paragraph>

      <SubHeading>Security</SubHeading>
      <Paragraph>
        We prioritize the security of your personal information and use
        industry-standard measures to protect it. However, no method of
        transmission over the internet or electronic storage is 100% secure;
        therefore, we cannot guarantee its absolute security.
      </Paragraph>

      <SubHeading>Changes to This Privacy Policy</SubHeading>
      <Paragraph>
        We may update our Privacy Policy from time to time. You are advised to
        review this page periodically for any changes. We will notify you of any
        changes by posting the new Privacy Policy on this page.
      </Paragraph>
      <br />
      <br />
      <Paragraph>
        Thank You
        <br />
        @Team Kangen Connect
      </Paragraph>
    </Container>
  );
}

export default App;
