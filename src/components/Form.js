import React, { Component } from 'react';
class Form extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            description: '',
            owner: '',
            priority: 'low'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(f){
        this.props.onAdd(this.state);
        f.preventDefault();
    }
    handleInput(e){
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
    }
    render(){
        return(
            <div className="card mt-2">
                <div className="card-header">
                    <h3>Add new task</h3>
                </div>
                <form id="form" className="card-body" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input 
                              type="text" 
                              name="title"
                              onChange={this.handleInput}
                              className="form-control mt-2" 
                              placeholder="Task Title" 
                              autoFocus
                            />
                            <input 
                              type="text"
                              name="description"
                              onChange={this.handleInput}
                              className="form-control mt-2" 
                              placeholder="Task Description"
                            />
                            <input 
                              type="text" 
                              name="owner"
                              onChange={this.handleInput}
                              className="form-control mt-2" 
                              placeholder="Task Owner"
                            />
                            <select 
                              name="priority"
                              className="form-control mt-2"
                              value={this.state.priority}
                              onChange={this.handleInput}
                              >
                                <option>low</option>
                                <option>medium</option>
                                <option>high</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-success block mt-2 ml-auto">Enviar</button>
                </form>
            </div>
        );
    }
}

export default Form;