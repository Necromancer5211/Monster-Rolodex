import React, {Component} from 'react';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";

class app extends Component{
  constructor() {
    super();
    this.state = {
      monsters : [],
      SearchField : ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => this.setState({monsters:users}));
  }

  render(){
      const {monsters,SearchField} = this.state;
      const filteredMonsters = monsters.filter(monster =>
          monster.name.toLowerCase().includes(SearchField.toLowerCase())
      );
    return (
        <div className="App">
            <input type = "search" placeholder= "Search Monsters" onChange= {event => {
              this.setState({SearchField : event.target.value})
            } } />
            <CardList monsters = {filteredMonsters}></CardList>
        </div>
    );
  }
}

export default app;
