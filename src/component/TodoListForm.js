import React, { Component } from 'react';
import TodoList from './TodoList';
import Title from './Title';

export default class TodoListForm extends Component {
    state = {
        todo: []
    }

    submitForm = () => {
        let newInput = document.getElementById("inputText").value;
        if(this.state.todo.includes(newInput)){
            alert("already availatodble")
        } else 
        this.setState({todo: [...this.state.todo, newInput]})
    }

    handleDelete = (index) => {
        alert(index);
        let newArr = [...this.state.todo];
        newArr.splice(index,1);
        this.setState({todo: newArr});
    }

    componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => this.setState({todo: json}))
    }

    

    render() {
        const todos = this.state.todo.map((todo, index) => {
            return <TodoList task={todo} id={index} onDelete={this.handleDelete} ></TodoList>
        });
        return (
            <div className='wrapper'>
                <div className='card frame'>
                    <Title className="header" items={this.state.todo.length}></Title>
                    {todos}
                    <input className="input" type="text" placeholder="Enter your todolist here" id="inputText"></input>
                    <button onClick={this.submitForm}>Submit</button>
                </div>
            </div>
        )
    }
}
