import "../Components/User.css";
import "../styles/colors.css";
export default function User() {
  return (
    <section className="user-component">
      <div className="user-container">
        <img
          src="src\images\image-jeremy.png"
          alt="Jeremy"
          className="user-image"
        />
        <p className="user-component-text">report for</p>
        <h1 className="user-name">Jeremy Robson</h1>
      </div>
      <button className="timeframe">Daily</button>
      <button className="timeframe">Weekly</button>
      <button className="timeframe">Monthly</button>
    </section>
  );
}
