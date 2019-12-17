import React from 'react';
import './App.css';
import { CardList } from './component/card-list/card-list.component';
import { SearchBox } from './component/search-box/search-box.component'
class App extends React.Component {
  constructor(){
    super();
    
    this.state = {
      monsters: [],
      searchField: ''
    }

    // call class function
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  } 
  
  // class function
  // handleChange(e) {
  //   this.setState({ searchField : e.target.value });
  // }
  // end class function

  // arrow function call without define in constructor like class function
  // handleChange = (e) => {
  //   this.setState({ searchField : e.target.value });
  // }
  // end arrow function

  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className='App'>
        <h1>Monsters Hash</h1>
        <SearchBox
          placeholder="search monsters" 
          handleChange={e => this.setState({ searchField : e.target.value }) }
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App;
