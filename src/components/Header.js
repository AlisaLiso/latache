import React from "react";
import styled, { keyframes } from 'styled-components';

const backgroundColor = "white";
const shadowColor = "#aa85ba";
const distance = "4px";
const stripsSize = "4px"; /// Controls the size of the stripes
const stripsAngle = "45deg";
const borderRadius = "6px";

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
    border-radius: ${borderRadius};
  }
`;

const StripeBoxShadow = styled.span`
  display: inline-block;
  padding: 10px 20px;
  position: relative;
  background-color: #22062e;
  color: white;

  &::after {
    border-radius: ${borderRadius};
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: ${distance};
    top: ${distance};
    z-index: -1;
    background-size: ${stripsSize} ${stripsSize};
    background-color: ${shadowColor};
    background-image: linear-gradient(
      ${stripsAngle},
      ${backgroundColor} 25%,
      transparent 25%,
      transparent 50%,
      ${backgroundColor} 50%,
      ${backgroundColor} 75%,
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
