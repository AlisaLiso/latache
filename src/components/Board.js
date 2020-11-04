import React from 'react';
import Task from './Task';
import AddTask from './AddTask';
import styled from 'styled-components';

const borderRadius = "6px";
const borderSmalRadius = "5px";
const backgroundColor = "white";
const distance = "4px";
const stripsSize = "4px"; /// Controls the size of the stripes
const stripsAngle = "45deg";

const StyledBoard = styled.div.attrs(props => ({
  primaryColor: props.primaryColor || "yellow",
}))`
  border: 1px solid rgba(${props => props.primaryColor}, 1);
  border-radius: ${borderRadius};
  margin-bottom: 10px;
  position: relative;

  &::after {
    border-radius: ${borderRadius};
    content: "";
    opacity: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    left: ${distance};
    top: ${distance};
    z-index: -1;
    background-size: ${stripsSize} ${stripsSize};
    background-color: rgba(${props => props.primaryColor}, 1);
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
    transition: 0.3s;
    transition-delay: 0.3s;
  }
`;

const BoardHead = styled.div.attrs(props => ({
  primaryColor: props.primaryColor || "yellow",
}))`
  background-color: rgba(${props => props.primaryColor}, 1);
  padding: 8px;
  border-top-left-radius: ${borderSmalRadius};
  border-top-right-radius: ${borderSmalRadius};
  font-size: 12px;
  font-weight: 800;
  color: darken(rgba(${props => props.primaryColor}), 100%);
`;

const BoardContent = styled.div.attrs(props => ({
  primaryColor: props.primaryColor || "yellow",
}))`
  padding: 8px;
  background-color: ${backgroundColor};
  border-bottom-left-radius: ${borderSmalRadius};
  border-bottom-right-radius: ${borderSmalRadius};
`;

function Board({ board }) {
  return (
    <StyledBoard primaryColor={board.color}>
      <BoardHead primaryColor={board.color}>{board.title}</BoardHead>
      <BoardContent>
        {board.tasks?.map((task, index) => (
          <Task task={task} key={index} />
        ))}
        <AddTask color={board.color} />
      </BoardContent>
    </StyledBoard>
  )
}

export default Board;
