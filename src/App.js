import React, { Component } from 'react'
import { connect } from 'react-redux';
import { searchApi } from './redux/action';
import SearchBox from './components/SearchBox';
import Results from './components/Results';
import './App.css';

  class App extends Component {
    render() {
      return (
        <div className="App">
        <SearchBox />
        <Results />
      </div>
      )
    }
  }

const mapDispatchToProps = dispatch => {
  return {
    searchApi: () => dispatch(searchApi())
  }
}

const mapStateToProps = state => {

  return { ...state };
}

App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App;
