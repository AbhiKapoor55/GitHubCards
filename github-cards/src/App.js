import './App.css';
import React from 'react';

const testData = [
  {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
  {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

// CardList Component 

const CardList = (props) => {
  return (
    <div>
      {testData.map(profile => <Card profile={profile}/>)}
    </div>
  );
}

// Card Component 
class Card extends React.Component {
  render() {
    return (
      <div className="github-profile">
        <img src={this.props.profile.avatar_url} alt=""/>
        <div className="info">
          <div className="name">{this.props.profile.name}</div>
          <div className="company">{this.props.profile.company}</div>
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
        <CardList />
      </React.Fragment>
    );
  }
}

export default App;
