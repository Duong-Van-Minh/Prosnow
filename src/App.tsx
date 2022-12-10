import React from "react";
import "./App.css";
import Snowflake from "./components/Snowflake";
import "./components/index.css";
function App() {
  const snow = () => {
    let animationDelay = "0s";
    let fontSize = "100px";
    let arr = Array.from(
      "Snowflakes are awesome!!! asdsdsdasdsdasadTheyasdsdsdasdsdasadTheyasdsdsdasdsdasadTheyasdsdsdasdsdasadTheyasdsdsdasdsdasadTheyasdsdsdasdsdasadTheyasdsdsdasdsdasadTheyasdsdsdasdsdasadTheyasdsdsdasdsdasadThey are like little pieces of magic!!! Love snowflakes!!! Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!! Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!! "
    );
    console.log(arr)
    return arr.map((el, i) => {
      animationDelay = `${(Math.random() * 10).toFixed(2)}s`;
      fontSize = `${Math.floor(Math.random() * 70) + 10}px`;
      let style = {
        animationDelay,
        fontSize,
      };
      return <Snowflake key={i} id={i} style={style} />;
    });
  };
  const logo =
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/25839/critters.svg";
  const log = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/25839/tree.svg";
  return (
    <div className="App">
      <>
        <div className="snow-wrapper">
          <div>{snow()}</div>
          <div className="snow">
            <div className="trees">
              <div className="merry">
                <h1>Merry Christmas</h1>
              </div>
              <div className="fox">
                <img src={logo} className="App-logo" alt="logo" width="300px" />
              </div>

              <div className="tree">
                <img src={log} width="200px" />
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default App;
