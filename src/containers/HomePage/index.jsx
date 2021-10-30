import React from "react";
import styled from "styled-components";
import {
  InnerPageContainer,
  PageContainer,
} from "../../components/pageContainer";
import { Navbar } from "../../components/navbar";
import { TopSection } from "./topSection";
import { deviceSize } from "../../components/responsive";
import { Services } from "./services";
import { SpecialistAd } from "../../components/specialistAd";
import { Marginer } from "../../components/marginer";
import { Footer } from "../../components/footer";

const ContentContainer = styled.div`
  width: 100%;
  max-width: ${deviceSize.laptop}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1em;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 5px;
  } ;
`;

export function HomePage(props) {
  return (
    <PageContainer>
      <TopSection>
        <Navbar useTransparent />
      </TopSection>
      <InnerPageContainer>
        <Marginer direction="vertical" margin="2em" />
        <ContentContainer>
          <Services />
        </ContentContainer>
        <Marginer direction="vertical" margin="4em" />
        <SpecialistAd />
        <Marginer direction="vertical" margin="4em" />
      </InnerPageContainer>
      <Footer />
    </PageContainer>
  );
}
