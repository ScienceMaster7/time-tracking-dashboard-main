import "../Components/Task.css";

export default function Task({ data, timeframe, image, Id, dots }) {
  let previousTimeframe;
  if (timeframe === "daily") {
    previousTimeframe = "Yesterday";
  } else if (timeframe === "weekly") {
    previousTimeframe = "Last Week";
  } else if (timeframe === "monthly") {
    previousTimeframe = "Last Month";
  }

  return (
    <section id={Id} className="task-upper-container">
      <img src={image} alt={data.title} className="task-image" />
      <div className="task-container">
        <div className="task-header">
          <h2 className="task-title">{data.title}</h2>
          <button className="taskbutton">
            <img src={dots} alt="more info" className="button-image" />
          </button>
        </div>
        <p className="current-time">
          {data.timeframes[`${timeframe}`].current} hrs
        </p>
        <p className="previous-time">
          {previousTimeframe} - {data.timeframes[`${timeframe}`].previous} hrs
        </p>
      </div>
    </section>
  );
}
