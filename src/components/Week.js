import React from 'react'
import styled from 'styled-components';
import moment from 'moment';
import AddBoard from './AddBoard';

let currDay = moment();

const getWeek = (curr) => {
  // var weekStartWithSunday = curr.clone().startOf('week');
  var weekStartWithMonday = curr.clone().startOf('isoWeek');
  let weekStart = weekStartWithMonday;

  var days = [];
  for (var i = 0; i <= 6; i++) {
    let day = moment(weekStart).add(i, 'days').format("Do dddd MMM YYYY").split(' ');
    let today = moment().format("Do dddd MMMM YYYY").split(' ');

    /// Add in fourth column todays info
    if (i === 3) {
      let start = moment(weekStart).add(0, 'days').format("D");
      let end = moment(weekStart).add(6, 'days').format("D");

      let obj = {
        week: today[1],
        day: today[0],
        month: today[2],
        range: `${start} — ${end}`,
        today: true,
        isInfo: true
      };
      days.push(obj);
    }

    const obj = {
      week: day[1],
      day: day[0],
      month: day[2],
      today: today[0] === day[0]
    };

    days.push(obj);
  }

  return days;
}

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

  @media only screen and (max-width: 666px) {
    min-height: 400px;
  }
`;

const HeaderText = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const BaseHeaderText = styled.div.attrs(props => ({
  weight: props.weight || "normal",
}))`
  color: #22062e;
  font-size: 16px;
  font-weight: ${props => props.weight};
  margin-right: 10px;
`;

const SmallHeaderText = styled.div`
  margin-right: 6px;
  color: #aa85ba;
  font-size: 12px;
`;

const Week = () => {
  return (
    <Grid>
      {getWeek(currDay).map((day, index) => (
        day.isInfo ?
          <Item key={index}>
            <div><span>{day.month}{day.range}</span></div>
          </Item>
          : <Item key={index}>
            <HeaderText>
              <BaseHeaderText weight={day.today && '900'}>{day.week}</BaseHeaderText>
              <SmallHeaderText>{day.day},</SmallHeaderText><SmallHeaderText>{day.month}</SmallHeaderText>
            </HeaderText>
            <AddBoard />
          </Item>
      ))}
    </Grid>
  )
}

export default Week;
