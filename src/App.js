import React, { Component } from 'react';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';


class App extends Component {
  render() {
      return (
        <MultiThemeProvider>
          <div>
          <NavBar/>
          <Search/>
          </div>

          </MultiThemeProvider>



      );
  }
}

export default App;
