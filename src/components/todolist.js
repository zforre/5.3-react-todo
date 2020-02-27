import React, {Component} from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state= {
            isEditing: false,
            text: this.props.todo
        }

        this.toggleEdit = this.toggleEdit.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    toggleEdit() {
        this.setState({isEditing: !this.state.isEditing});
    }

    updateTodo() {
        this.props.updateTodo(this.props.todo, this.state.text);
        this.toggleEdit();
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return(
            <div>
                { this.state.isEditing
                ?
                <React.Fragment>
                <div><input type='text' onChange={this.handleChange} name='text' /></div>
                <button type='button' onClick={this.updateTodo} className='btn btn-success'><i className="fa fa-check"></i></button>
                </React.Fragment>
                :
                <React.Fragment>
                <p>{this.props.todo}</p>
                <button type='button' onClick={this.toggleEdit} className='btn btn-primary'><i className="fa fa-pencil"></i></button>
                </React.Fragment>
                }
                <button type='button' onClick={()=>this.props.removeTodo(this.props.todo)} className='btn btn-danger'><i className="fa fa-trash"></i></button>
            
            </div>
                
        )
    }
}

function TodoList(props) {

    const todos = props.todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} removeTodo={props.removeTodo} updateTodo={props.updateTodo}/>
    ));

    return (
        <ul className='list-group list-group-flush'>{todos}</ul>
    )
}

export default TodoList