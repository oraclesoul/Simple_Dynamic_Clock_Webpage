import React, { useState } from "react";
import "./styles.css";

export default function App(props) {
  const morning =
    "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80";
  const night =
    "https://images.unsplash.com/photo-1514897575457-c4db467cf78e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80";

  const DayTime = new Date();

  const [day, setDay] = useState({
    date: DayTime.toDateString(),
    hr: DayTime.getHours(),
    min: DayTime.getMinutes(),
    sec: DayTime.getSeconds(),
    image: DayTime.getHours() < 12 ? morning : night
  });

  function updateDay() {
    const tempDayTime = new Date();
    const temp = {
      date: tempDayTime.toDateString(),
      hr: tempDayTime.getHours(),
      min: tempDayTime.getMinutes(),
      sec: tempDayTime.getSeconds(),
      image: tempDayTime.getHours() < 12 ? morning : night
    };

    // props.backgroundImage = tempDayTime.image;
    setDay(temp);
  }

  setInterval(updateDay, 100);

  // backgroundImage : "url(" + day.image + ")"

  return (
    <div className="main" style={{ backgroundImage: "url(" + day.image + ")" }}>
      <div className="content">
        <h1>
          {" "}
          {day.hr <= 12 ? day.hr : day.hr - 12} : {day.min} : {day.sec}
        </h1>
        {/* <img src = {day.image} alt="img" /> */}
        <h3> {day.date} </h3>
      </div>
    </div>
  );
}
