import React, { useState } from 'react';
import styled from 'styled-components';

const defaultBoardColor = "221,221,221";

const StyledTag = styled.li.attrs(props => ({
  color: props.color || defaultBoardColor,
  border: props.active ? props.color : "transparent",
}))`
  background-color: rgb(${props => props.color});
  font-size: 12px;
  display: inline-block;
  padding: 2px 5px;
  border-radius: 3px;
  margin-right: 5px;
  font-weight: 800;
  transition: 0.3s;
  box-shadow: 0 0 0 2pt rgba(${props => props.border}, 0.5);
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 0 2pt rgba(${props => props.color}, 0.5);
    transition: 0.3s;
  }

  &:focus {
    box-shadow: 0 0 0 2pt rgba(${props => props.color}, 0.5);
    transition: 0.3s;
  }
`;

function Tag({ active, tag, setInputValue, setColor, onClick }) {
  const handleColorClick = () => {
    setInputValue(tag.title);
    setColor(tag.color);
    onClick();
  };

  return (<StyledTag active={active} color={tag.color} onClick={handleColorClick}>{tag.title}</StyledTag>);
};

function Tags({ tags, setInputValue, setColor }) {
  const [chosen, setChosen] = useState(false);

  return (
    <>
      {tags?.map((tag, index) => (
        <Tag onClick={() => setChosen(tag)} key={index} tag={tag} setInputValue={setInputValue} setColor={setColor} active={tag === chosen} />
      ))}
    </>
  )
}

export default Tags;
