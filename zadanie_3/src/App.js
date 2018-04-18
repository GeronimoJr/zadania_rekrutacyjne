import React, { Component } from 'react';
import './App.css';
import UsersList from './components/UsersList';
import AddUser from './components/AddUser';
import Title from './components/Title';

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [
        {
          lp: 1,
          name: "Arnold Sztandarski",
          phoneNumber: "502787938",
          age: "24"
        },
        {
          lp: 2,
          name: "Kinga Nowak",
          phoneNumber: "508666788",
          age: "34"
        },
        {
          lp: 3,
          name: "Marcin Kownacki",
          phoneNumber: "500300200",
          age: "28"
        }
      ],
      numbers: [1,2,3]
    }
  }

  Numbers = () => {
    const numberOfUsers = this.state.users.length;
    const numbers = this.state.numbers;
    const arr = [];
    let j;
    if (numberOfUsers > 0) {
    for (j = 1; j <= numberOfUsers; j++) {
        if (numbers.indexOf(j) === -1) {
          arr.push(j);
        }
      }
    }
    if (arr.length > 0) {
      return arr[0];
    } else {
      return numberOfUsers +1;
    }
  }

  onUserSort = () => {
    this.setState({
      users: this.state.users.sort((a,b) => {return a.lp - b.lp})
    })
  }

  onUserAdd = (userData) => {
    const newUser = {
      lp: this.Numbers(),
      name: userData.name,
      phoneNumber: userData.phone,
      age: userData.age
    }
    if (newUser.name && newUser.phoneNumber) {
      this.setState({
        users: [...this.state.users, newUser],
        numbers: [...this.state.numbers, newUser.lp]
      })
    } else {
      alert("Wypełnij przynajmniej pierwsze dwa pola.");
    }
  }

  getStripedStyle(index) {
    if (index % 2 === 0) {
      return "User color";
    } else {
      return "User";
    }
  }

  onUserRemove = (userIndex, userLp) => {
    this.setState({
      users: this.state.users.filter((user, index) => {
        if (index !== userIndex) {
          return user;
        } 
      }), 
      numbers: this.state.numbers.filter(number => {
        if (number !== userLp) {
          return number;
        }
      })
    })
  }
  
  render() {
    return (
      <div>
        <Title />
        <div className="App">
          <AddUser onUserAdd={this.onUserAdd} />
          <UsersList users={this.state.users} onUserRemove={this.onUserRemove} getStripedStyle={this.getStripedStyle} onUserSort={this.onUserSort} />
        </div>
      </div>
    );
  }
}

export default App;