import React, { Component } from 'react';
import logo from './logo.svg';
import Home from "./pages/Home.js";
import Navbar from "./components/Navbar/Navbar.js";
import Title from "./components/Title/Title.js";
import Images from "./components/Images/Images.js";
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

const App = () => (
  <div className="container"><Navbar />
  <Title />
  <Images />
</div>
);

export default App;
