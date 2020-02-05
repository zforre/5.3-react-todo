import React, {Component}from 'react';
import TdForm from './../components/tdform.js'
import TdList from './../compenents/tdlist.js'
import './App.css';

const todos = [{id: 0, text: 'Wash the car.', isComplete: false}];

class TdApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      counter: 1
    }

    this.addTodo = this.addTodo.bind(this);
  }

  componentDidMount() {
    this.setState({todos});
  }
  
  addTodo(todo) {
    todo.id=this.state.counter;
    todo.isComplete =false;

    let todos = [this.state.todos];
    todos.push(todo);

    this.setState((state, props) => ({
      todos, counter: this.state.counter +1
    }));
  }

  render(){
    return (
      <div>
        <h1>What do you need to do?</h1>
        <TdForm addTodo={this.addTodo}/>
        < TdList />
      </div>
    );
  }
}

export default TdApp;
