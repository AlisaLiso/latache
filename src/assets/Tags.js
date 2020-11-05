import React, { useState } from 'react';
import styled from 'styled-components';

const defaultBoardColor = "221,221,221";

const StyledTag = styled.li.attrs(props => ({
  color: props.color || defaultBoardColor,
  opacity: props.active ? 1 : 0.5,
}))`
  background-color: rgb(${props => props.color});
  font-size: 12px;
  display: inline-block;
  padding: 5px 10px;
  border-radius: 3px;
  margin-right: 5px;
  font-weight: 800;
  opacity: ${props => props.opacity};
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 1;
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
