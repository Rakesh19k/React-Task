import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{ text: 'This is simple todo', id: '33445' }],
      Text: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ Text: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.Text.length) {
      return;
    }

    const newItem = {
      text: this.state.Text,
      id: Date.now()
    };

    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      Text: ''
    }));
  }
  render() {
    return (
      <div className="App">
        <h3 className="header">React Todo App</h3>
        <form>
          <input type="text"
            placeholder="Write something!..."
            ref={((input) => { this.textInput = input })}
            className="textInput"
            value={this.state.Text}
            onChange={this.handleChange}
          />
          <button className="btn" onClick={this.handleSubmit}> Add </button>
        </form>
        <TodoList items={this.state.items} />
      </div>
    );
  }


}

export default App;