import jeremy from "./images/image-jeremy.png";
import work from "./images/icon-work.svg";
import play from "./images/icon-play.svg";
import study from "./images/icon-study.svg";
import exercise from "./images/icon-exercise.svg";
import selfCare from "./images/icon-self-care.svg";
import social from "./images/icon-social.svg";
import dots from "./images/icon-ellipsis.svg";

import "./App.css";
import "../src/styles/colors.css";

import Task from "./Components/Task";
import { useEffect, useState } from "react";

function App() {
  const [taskData, setTaskData] = useState([]);
  const [timeFrame, setTimeFrame] = useState("daily");
  useEffect(() => {
    fetch("http://myjson.dit.upm.es/api/bins/2jlj")
      .then((response) => response.json())
      .then((data) => setTaskData(data));
  }, []);

  console.log(timeFrame);
  return (
    <div className="App">
      <main className="content">
        <section className="user-component">
          <div className="user-container">
            <img src={jeremy} alt="Jeremy" className="user-image" />
            <p className="user-component-text">Report for</p>
            <h1 className="user-name">
              Jeremy <br /> Robson
            </h1>
          </div>
          <button
            className="timeframe"
            onClick={() => {
              setTimeFrame("daily");
            }}
          >
            Daily
          </button>
          <button
            className="timeframe"
            onClick={() => {
              setTimeFrame("weekly");
            }}
          >
            Weekly
          </button>
          <button
            className="timeframe"
            onClick={() => {
              setTimeFrame("monthly");
            }}
          >
            Monthly
          </button>
        </section>

        {taskData.length > 0 && (
          <section className="Tasks-outer-container">
            <div className="Tasks-inner-container">
              <Task
                data={taskData[0]}
                timeframe={timeFrame}
                image={work}
                Id={"a"}
                dots={dots}
              />
              <Task
                data={taskData[1]}
                timeframe={timeFrame}
                image={play}
                Id={"b"}
                dots={dots}
              />
              <Task
                data={taskData[2]}
                timeframe={timeFrame}
                image={study}
                Id={"c"}
                dots={dots}
              />
            </div>
            <div className="Tasks-inner-container">
              <Task
                data={taskData[3]}
                timeframe={timeFrame}
                image={exercise}
                Id={"d"}
                dots={dots}
              />
              <Task
                data={taskData[4]}
                timeframe={timeFrame}
                image={selfCare}
                Id={"e"}
                dots={dots}
              />
              <Task
                data={taskData[5]}
                timeframe={timeFrame}
                image={social}
                Id={"f"}
                dots={dots}
              />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
