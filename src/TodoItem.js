
import React,{Component} from 'react'

export default class TodoItem extends Component {

    render(){
        return (
            <div>
               <input type="checkbox" checked={this.props.todo.state === 'completed'}
                    onChange={this.toggle.bind(this)}/>
               {this.props.todo.title}
               <buttom onClick={this.delete.bind(this)}></buttom>
            </div>
        )
    }
    delete(e){
        this.props.onDelete(e,this.props.todo)
    }

    toggle(e){
        this.props.onToggle(e,this.props.todo)
    }
}