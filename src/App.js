import React, {Component} from 'react';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/SearchBox/search-box.component";

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

   handleChange = (event) => {
        this.setState({SearchField : event.target.value})
    }

  render(){
      const {monsters,SearchField} = this.state;
      const filteredMonsters = monsters.filter(monster =>
          monster.name.toLowerCase().includes(SearchField.toLowerCase())
      );
    return (
        <div className="App">
            <h1>Monster Rolodex</h1>
            <SearchBox placeholder = "Search Monsters" handleChange = { this.handleChange } />
            <CardList monsters = {filteredMonsters} />
        </div>
    );
  }
}

export default app;
