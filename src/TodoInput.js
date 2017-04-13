import React,{Component} from 'react'


export default class TodoInput extends Component {
    render() {
        return <input type="text" onKeyPress={this.submit.bind(this)}
                    onChange={this.changTitle.bind(this)}
                    value={this.props.content}/>
    };


    submit(e){
        if(e.key === 'Enter'){
            this.props.onSubmit(e)
        }
    }
    changTitle(e){
        this.props.onChange(e)
    }
}

