import React from "react";
import styled from 'styled-components';
import {
  BG_COLOR, SHADOW_COLOR, STRIPS_DISTANCE, STRIPS_SIZE, STRIPS_ANGLE, BORDER_RADIUS
} from '../helpers/globalVariables';

const StyledHeader = styled.div`
  padding: 28px 0;
`;

const Logo = styled.div`
  font-weight: 800;
  font-size: 24px;

  span {
    padding: 1px 5px;
    margin-right: 10px;
    border-radius: ${BORDER_RADIUS};
  }
`;

const StripeBoxShadow = styled.span`
  display: inline-block;
  padding: 8px 19px;
  position: relative;
  border: 1px solid black;
  background-color: white;
  box-shadow: 2px 2px 0 0 black;
  color: black;
`;

const Header = () => (
  <StyledHeader>
    <Logo>
      <StripeBoxShadow>
        la
      </StripeBoxShadow>
      tâche
    </Logo>
  </StyledHeader>
);

export default Header;
