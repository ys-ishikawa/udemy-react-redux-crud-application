import React from 'react';

// function App() {
//   return (
//     <div>
//       <h1>Hello, World!</h1>
//     </div>
//   );
// }
// class App extends React.Component {
//   render() {
//     return(
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => {console.log("Clickされました。")}} />
//       </React.Fragment>  
//     );
//   }
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
    </div>
  )
}
const Cat = () => {
  return <div>Meow!!</div>
    
}

export default App;
