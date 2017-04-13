
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
        newTodo: '',
        todoList: [
          {id:1,title:'第一个代办事项'},
          {id:2,title:'第二个代办事项'}
        ]
      }
      
    }
 

    render() {
      let todos = this.state.todoList.filter((item)=>!item.deleted).map((item,index)=>{
        return (
            <li key={index}>
                <TodoItem todo={item} onToggle={this.toggle.bind(this)} 
                    onDelete={this.delete.bind(this)}/>
            </li>
        ) //当JSX标签超过一行时，使用括号包裹。
      })
      
      return (
        <div className="App">
          <h1>我的代办事项</h1>
          <div className="inputWrapper">
            <TodoInput content={this.state.newTodo} 
            onChange={this.changeTitle.bind(this)}
            onSubmit={this.addTodo.bind(this)}/>
          </div>
          <ol>
            {todos}
         </ol>
        </div>
      )
    }
      delete(event,todo){
        todo.deleted = true
        this.setState(this.state)
      }
      toggle(e,todo){
        todo.status = todo.status === 'completed' ? '' : 'completed'
        this.setState(this.state)
      }
      changeTitle(event){
        this.setState({
          newTodo: event.target.value,
          todoList: this.state.todoList
        })
      }
      addTodo(event){
        this.state.todoList.push({
          id: idMaker(),
          title: event.target.value,
          status: null,
          deleted: false
        })
      
      this.setState({
        newTodo: '',
        todoList: this.state.todoList
      })
    }
}

  export default App

  let id=0;
  function idMaker(){
    id+=1;
    return id
  }