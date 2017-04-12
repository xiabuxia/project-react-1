
  import React, { Component } from 'react';
  import './App.css';
  

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
        return <li>{item.title}</li>
      })
      return (
        <div className="App">
          <h1>我的代办事项</h1>
          <div className="inputWrapper">
            <input type="text" value={this.state.newTodo}/>
          </div>
        
          <ol>
            {todos}
         </ol>
        </div>
      )
    }

}

  export default App