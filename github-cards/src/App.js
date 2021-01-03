import './App.css';
import React from 'react';

// Card Component 

class Card extends React.Component {
  render() {
    return (
      <div className="github-profile">
        <img src="https://placehold.it/75" alt=""/>
        <div className="info">
          <div className="name">Name Here...</div>
          <div className="company">Company Here...</div>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="header">{this.props.title}</div>
        <Card />
      </React.Fragment>
    );
  }
}

export default App;
