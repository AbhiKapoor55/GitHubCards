import './App.css';
import React from 'react';

const testData = [
  {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
  {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

// Form Component 
class Form extends React.Component {
  render() {
    return (
      <form action="">
        <input type="text" placeholder="GitHub Username" />
        <button>Add Card</button>
      </form>
    );
  }
}

// CardList Component 
const CardList = (props) => {
  return (
    <div>
      {props.profiles.map(profile => <Card profile={profile}/>)}
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
  state = {
    profiles: testData, 
  };

  render() {
    return (
      <React.Fragment>
        <div className="header">{this.props.title}</div>
        <Form />
        <CardList profiles={this.state.profiles}/>
      </React.Fragment>
    );
  }
}

export default App;
