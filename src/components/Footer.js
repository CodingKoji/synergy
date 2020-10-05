import React from "react";
import styled from "styled-components";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <FooterWrapper>
      <small>&copy; Copyright {year}, Synergy Inc.</small>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  background-color: #6c63ff;
  padding: 1rem 0;
  width: 100%;
  text-align: center;

  small {
    color: white;
  }
`;
