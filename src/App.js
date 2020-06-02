import React, { Component } from 'react';

// function App() {
//   return (
//     <div>
//       <h1>Hello, World!</h1>
//     </div>
//   );
// }
class App extends Component {
  render() {
    // const greeting = "Hello React!";
    // const dom = <h1 className="foo">{greeting}</h1>;
    // return dom;
    return(
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => {console.log("Clickされました。")}} />
      </React.Fragment>  
    );
  }
}

export default App;
