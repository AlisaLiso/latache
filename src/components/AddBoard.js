import React, { useReducer } from 'react';
import Board from './Board';
import styled from 'styled-components';

const backgroundColor = "white";
const buttonBackground = "#f9f5fc";
const shadowColor = "#aa85ba";
const distance = "4px";
const stripsSize = "4px"; /// Controls the size of the stripes
const stripsAngle = "45deg";
const borderRadius = "6px";

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

const StripeShadowButton = styled(Button)`
  color: #aa85ba;
  padding: 10px 20px;
  position: relative;
  background-color: ${buttonBackground};
  transition: .3s;

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
    transition: 0.3s;
    transition-delay: 0.3s;
  }

  &:hover {
    transition: .3s;
    transform: translate(4px, 4px);
  }

  &:hover::after {
    opacity: 0;
    transition: 0s;
  }
`;

const initialState = {
  type: 'ADD_BOARD'
};

const handleAddBoard = () => { };

const reducer = (state, action) => {
  switch (action.type) {
    case 'EDIT_BOARD':
      return { type: 'EDIT_BOARD' };

    case 'NEW_BOARD':
      return { type: 'NEW_BOARD' };

    case 'DELETE_BOARD':
      return { type: 'DELETE_BOARD' };

    default:
      console.error("Action for this type not found");
      return state;
  }
};

const AddBoard = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      {state.type === "ADD_BOARD" &&
        <StripeShadowButton type="button" onClick={() => dispatch({ type: 'NEW_BOARD' })}>
          Add Board
        </StripeShadowButton>
      }
      {state.type === "NEW_BOARD" &&
        <Board type={"NEW_BOARD"} />
      }
      {state.type === "DELETE_BOARD" &&
        <StripeShadowButton type="button" onClick={handleAddBoard}>
          Delete Board
        </StripeShadowButton>
      }
    </>
  )
}

export default AddBoard
