import React, {Component}from 'react';
import TodoForm from '../components/todoform.js'
import TodoList from '../components/todolist.js'
import './App.css';

const todos = ['Wash the car.'];

class TodoApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      counter: 1
    }

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  componentDidMount() {
    this.setState({todos});
  }
  
  addTodo(todo) {
    // todo.id=this.state.counter;
    // todo.isComplete =false;

    let todos = [...this.state.todos];
    todos.push(todo);

    this.setState({todos: todo});
    //((state, props) => ({
    //   todos, counter: this.state.counter +1
    // }));
  }

  removeTodo(todo) {
    let todos =[...this.state.todos];
    const INDEX = todos.indexOf(todo);
    todos.splice(INDEX, 1);
    this.setState({todos: todos});

  }

  updateTodo(orig, updated) {
    let todos = [...this.state.todos];
    const INDEX = todos.indexOf(orig);
    todos[INDEX] = updated;
    this.setState({todos: todos})
  }


  render(){
    return (
      <div>
        <h1>What do you need to do?</h1>
        <TodoForm addTodo={this.addTodo}/>
        < TodoList todos={this.state.todos} removeTodo={this.removeTodo} editTodo={this.editTodo} />
      </div>
    );
  }
}

export default TodoApp;
