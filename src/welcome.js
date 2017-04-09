 import React from 'react';
  class Welcome extends React.Component {
   constructor(props){
        super(props) // 表示调用父类的构造函数,如果子类中存在构造函数，则需要在使用“this”之前首先调用super（）。于是乎才有下面的this，this指向的是构造函数
        this.state = {
        date: new Date()
        };
          console.log('我已经在 constructor 里将 props 和 state 初始化好了')
    }

    componentWillMount(){
        console.log('运行到这里的话，说明马上就要运行 render 了')
    }

    render() {
     console.log('嗯，这里是 render')
      return (
        <div>
          <h1>Hello, {this.props.name}</h1>
          <h2>{this.state.date.toString()}</h2>
        </div>
      )
    }

   componentDidMount(){
     console.log('已经挂载到页面里了')
   }
  }
  
export default Welcome  
//  每一个模块都有自己单独的作用域，模块之间的相互调用关系是通过 
// export 来规定模块对外暴露的接口
// 通过 export default 指令就能加载到默认模块，不需要通过 花括号来指定输出的模块,
// 一个模块只能使用 export default 一次