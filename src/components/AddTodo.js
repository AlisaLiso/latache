import React from 'react';
import styled, { keyframes } from 'styled-components';

const backgroundColor = "white";
const shadowColor = "#e1e6ec";
const distance = "4px";
const stripsSize = "10px"; /// Controls the size of the stripes
const stripsAngle = "45deg";
const borderRadius = "6px";
const textColor = "#e1e6ec";

const dashAnimation = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 0;
  }
`;

const Button = styled.button`
  font-size: 12px;
  font-weight: 800;
  width: 100%;
  text-align: center;
  background-color: white;
  border-radius: ${borderRadius};
  border: none;
  cursor: pointer;
`;

const TomatoButton = styled(Button)`
  color: ${textColor};
  padding: 10px 20px;
  position: relative;
  border: 2px solid ${shadowColor};
  background-color: ${backgroundColor};

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

  /* &:hover::after {
    animation: ${dashAnimation} 7s infinite linear;
  } */
  &:hover {

  }
`;


const AddTodo = () => {
  return (
    <TomatoButton type="button">
      Add todo
    </TomatoButton>
  )
}

export default AddTodo
