import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Form from "./components/Form";

import { todos } from "./task.json";
//cargo arreglo de tareas guardado

class App extends Component {
  constructor(){
    super(); // heredar la funcionalidad de react
    this.state = { 
        todos: todos,
        titlebar: "aplicacion de tareas",
        tasks_number: 10
     }
    this.handleNewTask = this.handleNewTask.bind(this);//bindeo la funcion newtask

  }
  handleNewTask(task){
    this.setState({
      todos: [...this.state.todos, task]//esto va al state solamente...
    })
  }
  handleRemoveTask(index){
    this.setState({
      todos: this.state.todos.filter((e,i)=>{
          return i !== index;
      })
    })
  }
  render(){
    const Task_List = this.state.todos.map((todo, index) => {
      return(
          <div className="col-md-4" key={index}>
            <div className="card mt-2 mb-2">
                <div className="card-header">
                  <div className="h4">{todo.title}</div>
                </div>
                <div className="card-body">
                  <p>{todo.description}</p>
                </div>
                <div 
                  className="card-footer text-capitalize">
                  {todo.owner} - <span className="badge basge-pill badge-danger">{todo.priority}</span>
                </div>
                <button 
                  className="btn btn-danger" 
                  onClick={this.handleRemoveTask.bind(this, index)}>
                  Remove
                </button>
              </div>
          </div>
      )
    })
    return (
      <div className="App">
        <Nav title={this.state.titlebar} tasks_number={this.state.todos.length}/>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4">
              <Form onAdd={this.handleNewTask}/>
            </div>
            <div className="col-md-8 card-deck">{Task_List}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
