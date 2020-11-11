import React from 'react';
import styled from 'styled-components';
import { BORDER_RADIUS } from '../helpers/globalVariables';

const StyledAddTask = styled.button.attrs(props => ({
  primaryColor: props.primaryColor || "yellow",
}))`
  border: none;
  opacity: 0.7;
  cursor: pointer;
  background-color: rgba(${props => props.primaryColor}, 0.4);
  border-radius: ${BORDER_RADIUS};
  padding: 5px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  transition: .3s;

  &:hover {
    opacity: 1;
    transition: .3s;
  }
`;
const StyledCross = styled.div.attrs(props => ({
  primaryColor: props.primaryColor || "yellow",
}))`
  width: 10px;
	height: 10px;
  position: relative;

  &:before, &:after{
		content:"";
		display:block;
		background: rgba(${props => props.primaryColor}, 1);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }

  &:before{
		width: 2px;
		height: 100%;
  }

  &:after{
		height: 2px;
		width: 100%;
	}
`;

function AddTask({ color }) {
  return (
    <StyledAddTask primaryColor={color}>
      <StyledCross primaryColor={color} />
    </StyledAddTask>
  )
}

export default AddTask
