import React from "react";
import Header from "./components/Header";
import Week from './components/Week';
import moment from 'moment';
import "./App.css";

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

    const task = {
      title: "Fix up button styles",
      isFinished: false,
      id: 1
    };

    const boardHome = {
      title: "Home",
      date: today,
      color: "158,152,234",
      colorT: "#ffffff",
      tasks: []
    }

    const boardWork = {
      title: "Work",
      date: today,
      color: "78,180,133",
      tasks: [task]
    }

    const boardWorkNew = {
      title: "Work",
      date: moment().add(1, 'days').format("Do dddd MMMM YYYY").split(' '),
      color: "78,180,133",
      tasks: [task]
    }

    const boards = [
      boardHome,
      boardWork,
      boardWorkNew
    ]

    const objBoards = [];

    for (const board of boards) {
      if (day[0] === board.date[0]) {
        objBoards.push(board)
      }
    }

    const obj = {
      week: day[1],
      day: day[0],
      month: day[2],
      boards: objBoards,
      today: today[0] === day[0]
    };

    days.push(obj);
  }

  return days;
}

function App() {
  return (
    <div className="container">
      <Header />
      <Week data={getWeek(currDay)} />
    </div>
  );
}

export default App;
