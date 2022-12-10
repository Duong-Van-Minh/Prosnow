/* eslint-disable jsx-a11y/alt-text */
import "./index.css";
const Test = () => {
  const logo =
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/25839/critters.svg";
  const log = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/25839/tree.svg";
  return (
    <>
      <>
        <div id="particles-js" className="snow"></div>
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
      </>
      
    </>
  );
};

export default Test;
