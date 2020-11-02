import React from 'react'
import styled from 'styled-components';
const days = ["Monday", "Tuesday", "Wednesday", "Today", "Thursday", "Friday", "Saturday", "Sunday"];

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 40vh auto 40vh;
  justify-items: stretch;
`;

const Item = styled.div`
  padding: 10px;
  box-sizing: border-box;
`;

const Week = () => {
  return (
    <Grid>
      {days.map((day, index) => (
        <Item key={index}>{day}</Item>
      ))}
    </Grid>
  )
}

export default Week;
