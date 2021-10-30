import React from "react";
import {
  InnerPageContainer,
  PageContainer,
} from "../../components/pageContainer";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { AccountBox } from "../../components/accountBox";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const StyledInnerContainer = styled(InnerPageContainer)`
  margin-top: 4em;
`;

export function CustomerAccessPage(props) {
  const { action } = useParams();

  return (
    <PageContainer>
      <Navbar />
      <StyledInnerContainer>
        <AccountBox initialActive={action} />
      </StyledInnerContainer>
      <Footer />
    </PageContainer>
  );
}
