import React from 'react';
import PropTypes from 'prop-types'

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
  const profiles = [
    {name: 'Taro', age: 10},
    {name: 'Hana', age: 12},
    {name: 'Nana', age: 3},
  ];
  return (
    <div>
    {
      profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />;
      })
    }
    </div>
  )
}
const User = (props) => {
return (
  <div>
    <p>Hello, {props.name}</p>
    <p>My age is {props.age} years old.</p>
  </div>
  )
    
}

// User.defaultProps = {
//   age: 1
// }

// 型チェック
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
