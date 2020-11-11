import React, { useReducer } from 'react';
import Board from './Board';
import styled from 'styled-components';
import {
  BG_COLOR, SHADOW_COLOR, BORDER_RADIUS, STRIPS_DISTANCE, STRIPS_SIZE, STRIPS_ANGLE, BTN_BG_COLOR
} from '../helpers/globalVariables';

const Button = styled.button`
  font-size: 12px;
  font-weight: 800;
  width: 100%;
  text-align: center;
  background-color: white;
  border-radius: ${BORDER_RADIUS};
  border: none;
  cursor: pointer;
`;
const StripeShadowButton = styled(Button)`
  color: #aa85ba;
  padding: 10px 20px;
  position: relative;
  background-color: ${BTN_BG_COLOR};
  transition: .3s;

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
