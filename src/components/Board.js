import React, { useState } from 'react';
import Task from './Task';
import AddTask from './AddTask';
import Tags from '../assets/Tags';
import Colors from '../assets/Colors';
import styled from 'styled-components';

const borderRadius = "6px";
const borderSmalRadius = "5px";
const backgroundColor = "white";
const distance = "4px";
const stripsSize = "4px"; /// Controls the size of the stripes
const stripsAngle = "45deg";
const defaultBoardColor = "221,221,221";

const StyledBoard = styled.div.attrs(props => ({
  primaryColor: props.primaryColor || defaultBoardColor,
  transition: props.transition || "0.3s",
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
    transition: ${props => props.transition};
    transition-delay: 0.3s;
  }
`;

const StyledBoardHead = styled.div.attrs(props => ({
  primaryColor: props.primaryColor || defaultBoardColor,
}))`
  display: flex;
  background-color: rgba(${props => props.primaryColor}, 1);
  padding: 8px;
  border-top-left-radius: ${borderSmalRadius};
  border-top-right-radius: ${borderSmalRadius};
  font-size: 12px;
  font-weight: 800;
  color: darken(rgba(${props => props.primaryColor}), 100%);
`;

const StyledBoardHeadWithLink = styled(StyledBoardHead)`
  display: flex;
  align-items: center;
  padding: 0;
`;

const StyledBoardHeadInput = styled.input.attrs(props => ({
  primaryColor: props.primaryColor || defaultBoardColor,
}))`
  width: 85%;
  box-sizing: border-box;
  outline: none;
  background-color: rgba(${props => props.primaryColor}, 1);
  padding: 8px;
  border: none;
  margin: 0;
  border-top-left-radius: ${borderSmalRadius};
  border-top-right-radius: ${borderSmalRadius};
  font-size: 12px;
  font-weight: 800;
  color: darken(rgba(${props => props.primaryColor}), 100%);
`;

const StyledLine = styled.div.attrs(props => ({
  color: props.color || defaultBoardColor,
}))`
  width: 100%;
  height: 1px;
  background-color: rgb(${props => props.color});
  margin: 8px 0;
`;

const StyledLink = styled.div`
  text-align: center;
  cursor: pointer;
`;

const tags = [
  { title: "Work", color: "242,170,170", selected: false, id: 1 },
  { title: "Home", color: "224,244,245", selected: false, id: 2 },
  { title: "General", color: "250,240,175", selected: false, id: 3 },
]

const StyledBoardContent = styled.div.attrs(props => ({
  primaryColor: props.primaryColor || defaultBoardColor,
}))`
  padding: 8px;
  background-color: ${backgroundColor};
  border-bottom-left-radius: ${borderSmalRadius};
  border-bottom-right-radius: ${borderSmalRadius};
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
`;

const colors = ["242,170,170", "224,244,245", "221,221,221", "250,190,167", "243,230,227", "241,197,197", "195,174,214", "223,211,195", "250,240,175", "160,193,184", "246,222,246", "255,236,199"];

function EditingBoard() {
  const [color, setColor] = useState(defaultBoardColor);
  const [inputValue, setInputValue] = useState('');
  const [chosenColor, setChosenColor] = useState(false);
  const [chosenTag, setChosenTag] = useState(false);

  const handleInputChange = (e) => setInputValue(e.target.value);
  return (
    <StyledBoard primaryColor={color} transition={"none"}>
      <StyledBoardHeadWithLink>
        <StyledBoardHeadInput
          primaryColor={color}
          autoFocus
          placeholder="Board name"
          type="text"
          onChange={handleInputChange}
          value={inputValue}
        />
        <StyledLink>Done</StyledLink>
      </StyledBoardHeadWithLink>
      <StyledBoardContent>
        <StyledList>
          <Tags tags={tags} setInputValue={setInputValue} setColor={setColor} chosen={chosenTag} setChosen={setChosenTag} setChosenColor={setChosenColor} />
        </StyledList>
        {tags.length > 0 && colors.length > 0 &&
          <StyledLine color={color}></StyledLine>
        }
        <StyledList>
          <Colors colors={colors} setColor={setColor} chosen={chosenColor} setChosenTag={setChosenTag} setChosen={setChosenColor} />
        </StyledList>
      </StyledBoardContent>
    </StyledBoard>
  );
}

function Board({ board, type = 'DEFAULT' }) {
  return (
    <>
      {type === 'NEW_BOARD' &&
        <EditingBoard />
      }
      {type === 'DEFAULT' &&
        <DefaultBoard board={board} />
      }
    </>
  )
}

const DefaultBoard = ({ board }) => (
  <StyledBoard primaryColor={board.color}>
    <StyledBoardHead primaryColor={board.color}>{board.title}</StyledBoardHead>
    <StyledBoardContent>
      {board.tasks?.map((task, index) => (
        <Task task={task} key={index} />
      ))}
      <AddTask color={board.color} />
    </StyledBoardContent>
  </StyledBoard>
);

export default Board;
