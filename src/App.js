
  import React, { Component } from 'react';
  import TodoInput from './TodoInput';
  import TodoItem from './TodoItem';
  import 'normalize.css';
  import './App.css';
  import './reset.css'

  

  class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        newTodo: 'test',
        todolist: [
          {id:1,title:'第一个代办事项'}
        ]
      }
    }
  

    render() {

      let todos = this.state.todolist.map((item,index)=>{
        return (
            <li>
                <TodoItem todo={item}/>
            </li>
        )
      })
      return (
        <div className="App">
          <h1>我的代办事项</h1>
          <div className="inputWrapper">
            <TodoInput content={this.state.newTodo} onSubmit={this.addTodo}/>
          </div>
          <ol>
            {todos}
         </ol>
        </div>
      )
    }

}

  export default App