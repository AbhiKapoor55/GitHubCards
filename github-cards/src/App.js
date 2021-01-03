import './App.css';
import React from 'react';
import axios from 'axios';

const testData = [
  {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
  {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

// Form Component 
class Form extends React.Component {
  state = { userName: "" }
  handleSubmit = async (event) => {
    event.preventDefault(); 
    const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`)
    this.props.onSubmit(resp.data);
    this.setState({userName: ""})
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="GitHub Username" value={this.state.userName} onChange={event => this.setState({userName: event.target.value })} required/>
        <button>Add Card</button>
      </form>
    );
  }
}

// CardList Component 
const CardList = (props) => {
  return (
    <div>
      {props.profiles.map(profile => <Card key={profile.id} profile={profile}/>)}
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

  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }))
  }

  render() {
    return (
      <React.Fragment>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile}/>
        <CardList profiles={this.state.profiles}/>
      </React.Fragment>
    );
  }
}

export default App;
