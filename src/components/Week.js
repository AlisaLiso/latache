import React from 'react'
import styled from 'styled-components';
import AddBoard from './AddBoard';
import Board from './Board';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 40vh 40vh;
  justify-items: stretch;
  box-sizing: border-box;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 40vh 40vh;
  }

  @media only screen and (max-width: 910px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 40vh 40vh 40vh;
  }

  @media only screen and (max-width: 666px) {
    grid-template-columns: 1fr;
    grid-template-rows: none;
  }
`;
const Item = styled.div`
  padding: 10px;
  box-sizing: border-box;

  &:not(:last-child):not(:nth-child(4)) {
    border-right: 1px solid rgba(170,133,186, 0.3);
  }

  @media only screen and (max-width: 666px) {
    min-height: 400px;
  }
`;
const HeaderText = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const BigHeaderText = styled.div`
  font-size: 30px;
  font-weight: 900;
`;
const BaseHeaderText = styled.div.attrs(props => ({
  weight: props.weight || "normal",
}))`
  color: #22062e;
  font-size: 20px;
  font-weight: ${props => props.weight};
  margin-right: 10px;
`;
const SmallHeaderText = styled.div`
  margin-right: 6px;
  color: #aa85ba;
  font-size: 16px;
`;

const Week = ({ data }) => {
  return (
    <Grid>
      {data.map((day, index) => (
        day.isInfo ?
          <Item key={index}>
            <HeaderText>
              <BigHeaderText>{day.month}, {day.range}</BigHeaderText>
            </HeaderText>
          </Item>
          : <Item key={index}>
            <HeaderText>
              <BaseHeaderText weight={day.today && '900'}>
                {day.week},
              </BaseHeaderText>
              <SmallHeaderText>{day.day}</SmallHeaderText>
            </HeaderText>
            {day.boards?.map((board, index) => (
              <Board key={index} board={board} />
            ))}
            <AddBoard />
          </Item>
      ))}
    </Grid>
  )
}

export default Week;
