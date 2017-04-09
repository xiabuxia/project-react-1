 import React from 'react';
  class Welcome extends React.Component {
   constructor(props){
        super(props) // 表示调用父类的构造函数,如果子类中存在构造函数，则需要在使用“this”之前首先调用super（）。于是乎才有下面的this，this指向的是构造函数
        this.state = {
        date: new Date()
        };
       setInterval(()=>{ // 搜索「JS 箭头函数 MDN」

            this.setState({
                date: new Date() // 更新 date

            })
        })
    } // static 关键字用来定义类的静态方法。静态方法是指那些不需要对类进行实例化，使用类名就可以直接访问的方法，
   // 需要注意的是静态方法不能被实例化的对象调用。静态方法经常用来作为工具函数。部分需要实例化后才能访问到
    render() { //reder方法渲染html相关的事情
     return (
       <div>
         <h1>Hello, {this.props.name}</h1>
         <h2>{this.state.date.toString()}</h2>
       </div>
     )
    }
  }
export default Welcome  
//  每一个模块都有自己单独的作用域，模块之间的相互调用关系是通过 
// export 来规定模块对外暴露的接口
// 通过 export default 指令就能加载到默认模块，不需要通过 花括号来指定输出的模块,
// 一个模块只能使用 export default 一次