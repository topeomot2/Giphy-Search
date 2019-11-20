import React, { Component } from 'react'
import { connect } from 'react-redux';
import { searchApi } from './redux/action';
import SearchBox from './components/SearchBox';
import Results from './components/Results';
import './App.css';



  class App extends Component {

    processPhotos() {
      if(this.props.photos.length === 0)return[];

      
      let photos = this.props.photos.map((photo) => {
        let share_url = photo.bitly_url;
        let { url, width, height }= photo.images.downsized;
        return {
          src: url,
          width: parseInt(width),
          height: parseInt(height),
          share_url 
        }
      });

      return photos;
    }


    render() {
      return (
        <div className="App">
        <SearchBox {...this.props}/>
        <Results photos={this.processPhotos()} pending={this.props.pending}/>
      </div>
      )
    }
  }

const mapDispatchToProps = dispatch => {
  return {
    searchApi: (value) => dispatch(searchApi(value))
  }
}

const mapStateToProps = state => {

  return { ...state };
}

App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App;
