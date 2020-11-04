import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.componet';
import { SearchBox } from './components/search-box/search-box.componet';


import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(objJSON=> this.setState({
      monsters: objJSON
    }));
  }

  handleChange = e =>{
    this.setState({searchField:e.target.value});
  }

  render(){
    const {monsters, searchField} = this.state;
    const filterMonstaers = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return(
      <div className="App">

        <h1>Monster Roledex</h1>

        <SearchBox 
          placeHolder = 'search monsters'
          handleChange = { this.handleChange }
        />

        <CardList 
          monsters = {filterMonstaers} 
        />

      </div>
    )
  }
}

export default App;
