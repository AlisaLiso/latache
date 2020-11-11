import React from "react";
import styled, { keyframes } from 'styled-components';
import {
  BG_COLOR, SHADOW_COLOR, STRIPS_DISTANCE, STRIPS_SIZE, STRIPS_ANGLE, BORDER_RADIUS
} from '../helpers/globalVariables';

const dashAnimation = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 0;
  }
`;
const StyledHeader = styled.div`
  padding: 28px 0;
`;
const Logo = styled.div`
  font-weight: 800;
  font-size: 24px;

  span {
    box-shadow: 0px 0px 0px 2px black inset;
    padding: 1px 5px;
    margin-right: 10px;
    border-radius: ${BORDER_RADIUS};
  }
`;
const StripeBoxShadow = styled.span`
  display: inline-block;
  padding: 10px 20px;
  position: relative;
  background-color: #22062e;
  color: white;

  &::after {
    border-radius: ${BORDER_RADIUS};
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: ${STRIPS_DISTANCE};
    top: ${STRIPS_DISTANCE};
    z-index: -1;
    background-size: ${STRIPS_SIZE} ${STRIPS_SIZE};
    background-color: ${SHADOW_COLOR};
    background-image: linear-gradient(
      ${STRIPS_ANGLE},
      ${BG_COLOR} 25%,
      transparent 25%,
      transparent 50%,
      ${BG_COLOR} 50%,
      ${BG_COLOR} 75%,
      transparent 75%,
      transparent
    );
  }

  &:hover::after {
    animation: ${dashAnimation} 0.7s infinite linear;
  }
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
