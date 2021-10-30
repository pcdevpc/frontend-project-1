import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { deviceSize } from "../responsive";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useMediaQuery } from "react-responsive";

const FooterContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2em 3em;
  padding-bottom: 0;
  border-top: 0.6px solid rgba(0, 0, 0, 0.3);

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 2em 12px;
  }
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1em;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    justify-content: space-evenly;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:not(:last-of-type) {
    margin-right: 3%;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  border-top: 0.6px solid rgba(0, 0, 0, 0.3);
  padding: 0 10px;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 1em 0;
  } ;
`;

const RightBottomContainer = styled.div`
  display: flex;
`;
const LeftBottomContainer = styled.div`
  display: flex;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 13px;
  color: #000;
  font-weight: 600;
  font-size: 20px;
`;

const FLink = styled.a`
  text-decoration: none;
  color: #6f6f6f;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

const PrivacyText = styled.h6`
  color: #a3a3a3;
  font-size: 11px;
  margin: 0;
  margin-left: 10px;
  display: flex;
  margin-top: 5px;
  align-items: center;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 8px;
  } ;
`;

const SocialIcon = styled.div`
  color: #8a8a8a;
  font-size: 20px;
  cursor: pointer;
  transition: background-color, 200ms ease-in-out;

  &:not(:last-of-type) {
    margin-right: 10px;
  }

  &:hover {
    color: #777777;
  }

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 17px;
  } ;
`;

export function Footer(props) {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  return (
    <FooterContainer>
      <TopContainer>
        <ContentContainer>
          <Title>Categories</Title>
          <FLink>Car Repair</FLink>
          <FLink>Carpentry</FLink>
          <FLink>Landscaping</FLink>
          <FLink>Cleaning</FLink>
          <FLink>Home Imporvement</FLink>
          <FLink>Demolition</FLink>
          <FLink>Management</FLink>
          <FLink>Other</FLink>
        </ContentContainer>
        <ContentContainer>
          <Title>Access</Title>
          <FLink>Login</FLink>
          <FLink>Join Us</FLink>
          <FLink>Login as Specialist</FLink>
          <FLink>Become a Specialist</FLink>
        </ContentContainer>
      </TopContainer>
      <BottomContainer>
        <LeftBottomContainer>
          <BrandLogo hideLogo color="#8a8a8a" textSize={isMobile ? 20 : 25} />
          <PrivacyText>&#169;All Rights Reserved. 2021</PrivacyText>
        </LeftBottomContainer>
        <RightBottomContainer>
          <SocialIcon>
            <FontAwesomeIcon icon={faFacebook} />
          </SocialIcon>
          <SocialIcon>
            <FontAwesomeIcon icon={faTwitter} />
          </SocialIcon>
        </RightBottomContainer>
      </BottomContainer>
    </FooterContainer>
  );
}
