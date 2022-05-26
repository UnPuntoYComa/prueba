import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: [],
    value: ''
  }

      handleOnClick = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users`,{ params: { value:this.state.value } })
        .then(res => {
          const persons = res.data;
          this.setState({...this.state.value, persons: persons});
        })  // your logic
      };
      handleOnChange = (e) => {
          this.setState({...this.state.persons, value: e.target.value});
          console.log(this.state.value);
      };

  render() {
    return (
      <div>
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
      {this.state.value}
      <label>
        ingresar:
        <input type="text"  onChange={this.handleOnChange} />
      </label>
        <input type="button" value="name" onClick={this.handleOnClick} />
      </div>
    )
  }
}
