import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchField} from './components/search-field/search-field.component';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value }, () => {
      console.log(this.state.searchField);
    });
  };

  render() {
    const {monsters, searchField} = this.state;
    const filteredArray = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()));
    return (
      <div className='App'>
      <h1>Monster Holodex</h1>
        <SearchField placeHolder={'search monsters'} handleChange={this.handleChange}/>
        <CardList monsters={filteredArray} />
      </div>
    );
  }
}

export default App;
