import React from 'react';
import styled from 'styled-components';

const defaultBoardColor = "221,221,221";

const StyledColor = styled.li.attrs(props => ({
  color: props.color || defaultBoardColor,
  border: props.active ? props.color : "transparent",
}))`
  width: 14px;
  height: 14px;
  cursor: pointer;
  background-color: rgb(${props => props.color});
  border-radius: 3px;
  list-style: none;
  margin-right: 5px;
  transition: 0.3s;
  box-shadow: 0 0 0 2pt rgba(${props => props.border}, 0.5);

  &:hover {
    transition: 0.3s;
    box-shadow: 0 0 0 2pt rgba(${props => props.color}, 0.5);
  }

  &:focus {
    transition: 0.3s;
    box-shadow: 0 0 0 2pt rgba(${props => props.color}, 0.5);
  }
`;

function Color({ color, setColor, onClick, active }) {
  const handleColorClick = () => {
    setColor(color);
    onClick();
  }
  return (<StyledColor color={color} active={active} onClick={handleColorClick}></StyledColor>);
};

function Colors({ colors, setColor, chosen, setChosen }) {
  return (
    <>
      {colors?.map((color, index) => (
        <Color onClick={() => setChosen(color)} active={color === chosen} key={index} color={color} setColor={setColor} />
      ))}
    </>
  )
}

export default Colors
