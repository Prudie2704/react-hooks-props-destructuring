import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

const props = {
  title: "My App Title"
};

ReactDOM.render(<App {...props} />, document.getElementById("root"));

import React from "react";

function App({title}) {
  return (
    <div>
      <h1>{title}</h1>
      <p>Welcome to my app</p>
    </div>
  );
}

export default App;
