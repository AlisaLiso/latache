import React, { useReducer } from 'react';
import Board from './Board';
import styled from 'styled-components';
import {
  BG_COLOR, SHADOW_COLOR, BORDER_RADIUS, STRIPS_DISTANCE, STRIPS_SIZE, STRIPS_ANGLE, BTN_BG_COLOR, GRAY_COLOR
} from '../helpers/globalVariables';

const Button = styled.button`
  font-size: 12px;
  font-weight: 800;
  width: 100%;
  text-align: center;
  border: 2px solid ${GRAY_COLOR};
  background-color: white;
  border-radius: ${BORDER_RADIUS};
  cursor: pointer;
`;
const StripeShadowButton = styled(Button)`
  color: ${GRAY_COLOR};
  padding: 10px 20px;
  position: relative;
  background-color: ${BG_COLOR};
  transition: .3s;
  box-shadow: 2px 2px 0 0 ${GRAY_COLOR};

  &:hover {
    transition: .3s;
    transform: translate(2px, 2px);
    box-shadow: none;
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
        <Board onClick={(type) => dispatch({ type: type })} type={"NEW_BOARD"} />
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
