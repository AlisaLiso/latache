import React, { useState, useRef, useEffect } from 'react';
import Task from './Task';
import AddTask from './AddTask';
import Tags from '../assets/Tags';
import Colors from '../assets/Colors';
import styled from 'styled-components';
import {
  BG_COLOR, BORDER_RADIUS, INSIDE_BORDER_RADIUS, STRIPS_DISTANCE, STRIPS_SIZE,
  STRIPS_ANGLE, DEFAULT_HEX_COLOR
} from '../helpers/globalVariables';

const StyledBoard = styled.div.attrs(props => ({
  primaryColor: props.primaryColor || DEFAULT_HEX_COLOR,
  transition: props.transition || "0.3s",
}))`
  border: 1px solid rgba(${props => props.primaryColor}, 1);
  border-radius: ${BORDER_RADIUS};
  margin-bottom: 10px;
  position: relative;

  &::after {
    border-radius: ${BORDER_RADIUS};
    content: "";
    opacity: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    left: ${STRIPS_DISTANCE};
    top: ${STRIPS_DISTANCE};
    z-index: -1;
    background-size: ${STRIPS_SIZE} ${STRIPS_SIZE};
    background-color: rgba(${props => props.primaryColor}, 1);
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
    transition: ${props => props.transition};
    transition-delay: 0.3s;
  }
`;
const StyledBoardHead = styled.div.attrs(props => ({
  primaryColor: props.primaryColor || DEFAULT_HEX_COLOR,
}))`
  display: flex;
  background-color: rgba(${props => props.primaryColor}, 1);
  padding: 8px;
  border-top-left-radius: ${INSIDE_BORDER_RADIUS};
  border-top-right-radius: ${INSIDE_BORDER_RADIUS};
  font-size: 12px;
  font-weight: 800;
  color: darken(rgba(${props => props.primaryColor}), 100%);
`;
const StyledBoardHeadWithLink = styled(StyledBoardHead).attrs(props => ({
  primaryColor: props.primaryColor || DEFAULT_HEX_COLOR,
}))`
  display: flex;
  align-items: center;
  padding: 0;
  background-color: rgba(${props => props.primaryColor}, 1);;
`;
const StyledBoardHeadInput = styled.input.attrs(props => ({
  primaryColor: props.primaryColor || DEFAULT_HEX_COLOR,
}))`
  width: 85%;
  box-sizing: border-box;
  outline: none;
  background-color: rgba(${props => props.primaryColor}, 1);
  padding: 8px;
  border: none;
  margin: 0;
  border-top-left-radius: ${INSIDE_BORDER_RADIUS};
  border-top-right-radius: ${INSIDE_BORDER_RADIUS};
  font-size: 12px;
  font-weight: 800;
  color: darken(rgba(${props => props.primaryColor}), 100%);
`;
const StyledLine = styled.div.attrs(props => ({
  color: props.color || DEFAULT_HEX_COLOR,
}))`
  width: 100%;
  height: 1px;
  background-color: rgb(${props => props.color});
  margin: 8px 0;
`;
const StyledLink = styled.div`
  text-align: center;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s;

  &:hover {
    transition: 0.3s;
    opacity: 1;
  }
`;
const StyledBoardContent = styled.div.attrs(props => ({
  primaryColor: props.primaryColor || DEFAULT_HEX_COLOR,
}))`
  padding: 8px;
  background-color: ${BG_COLOR};
  border-bottom-left-radius: ${INSIDE_BORDER_RADIUS};
  border-bottom-right-radius: ${INSIDE_BORDER_RADIUS};
`;
const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
`;

const tags = [
  { title: "Work", color: "242,170,170", selected: false, id: 1 },
  { title: "Home", color: "224,244,245", selected: false, id: 2 },
  { title: "General", color: "250,240,175", selected: false, id: 3 },
]
const colors = ["242,170,170", "224,244,245", "221,221,221", "250,190,167", "243,230,227", "241,197,197", "195,174,214", "223,211,195", "250,240,175", "160,193,184", "246,222,246", "255,236,199"];

const createBoard = (value) => {
  if (value.length > 0) {
    console.log("Value is not empty")
  } else {
    console.log("Value is empty")
  }
}

function useOutsideAlerter(ref, value) {
  useEffect(() => {
    /// Create board if clicked on outside of element and value of board not empty
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        createBoard(value);
      }
    }
    /// Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      /// Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, value]);
}

function EditingBoard() {
  const [color, setColor] = useState(DEFAULT_HEX_COLOR);
  const [inputValue, setInputValue] = useState('');
  const [chosenColor, setChosenColor] = useState(false);
  const [chosenTag, setChosenTag] = useState(false);
  const wrapperRef = useRef(null);

  useOutsideAlerter(wrapperRef, inputValue);

  const onKeyDownHandler = e => {
    if (e.keyCode === 13) {
      /// Add new board
      createBoard(inputValue)
    }
  };

  const onDoneHandler = () => {
    /// Add new board
    createBoard(inputValue)
  };

  const handleInputChange = (e) => setInputValue(e.target.value);

  return (
    <StyledBoard ref={wrapperRef} primaryColor={color} transition={"none"}>
      <StyledBoardHeadWithLink primaryColor={color}>
        <StyledBoardHeadInput
          primaryColor={color}
          autoFocus
          onKeyDown={onKeyDownHandler}
          placeholder="Board name"
          type="text"
          onChange={handleInputChange}
          value={inputValue}
        />
        <StyledLink onClick={onDoneHandler}>Done</StyledLink>
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
