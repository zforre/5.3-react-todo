import React, {Component} from 'react';

class TdForm extends Component {

    constructor(props) {
        super(props);
            this.state = {
                text: ''
            }

            this.handleInput = this.handleInput.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleInput(event) {
            this.setState({[event.target.name]: event.target.value});
        }

        handleSubmit(event) {
            event.preventDefault();
            this.props.addTodo(this.state);
            this.setState({text: ''});
        }

    render() {
        return(
            <form onSubmit={this.handleSubmit} className='row no-gutters'>
                <div className='form-group col-6'>
                    <label htmlFor='text'>Add something to do.</label>
                    <input className="form-control" type="text" name="text" id="text" value={this.state.text} onChange={this.handleInput} />
                </div>
                <button className='btn btn-primary'>Add</button>
            </form>
        )
    }
}

export default TdForm