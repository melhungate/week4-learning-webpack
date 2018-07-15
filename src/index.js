import React from "react";
import { render } from "react-dom";

// class App extends React.Component {
// 	render() {
// 		return <div>Hello World</div>;
// 	}
// }

const App = () => <div>Hello World</div>; //functional component 

render(<App />, document.getElementById("app")); 