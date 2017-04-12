 import React from 'react';
  class Welcome extends React.Component {
   constructor(props){
         super(props)
     this.state = {
       date: new Date(),
       test: '1'
      }
  
      console.log('我已经在 constructor 里将 props 和 state 初始化好了')
    }
    componentWillMount(){
     this.setState({
       date: new Date(), // 更新 date
       test: 'componentWillMount'
     })
      console.log('运行到这里的话，说明马上就要运行 render 了')
    }
    render() {

      console.log('嗯，这里是 render')
      return (
        <div>
          <h1>Hello, {this.props.name}</h1>
          <h2>{this.state.date.toString()}</h2>
         <p>{test}</p>
        </div>
      )
    }
    componentDidMount(){
     this.setState({
       date: new Date(), // 更新 date
       test: 'componentDidMount'
     })
      console.log('已经挂载到页面里了')
    }
   componentWillReceiveProps(){
     this.setState({
       date: new Date(), // 更新 date
       test: 'componentWillReceiveProps'
     })
   }
 
   componentDidUpdate(){
     this.setState({
       date: new Date(), // 更新 date
       test: 'componentDidUpdate'
     })
   }
   componentWillUnmount(){
     console.log('要死了')
   }
 
  }
  
  export default Welcome
//  每一个模块都有自己单独的作用域，模块之间的相互调用关系是通过 
// export 来规定模块对外暴露的接口
// 通过 export default 指令就能加载到默认模块，不需要通过 花括号来指定输出的模块,
// 一个模块只能使用 export default 一次