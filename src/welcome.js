
import React from 'react'; // 依赖react
class Welcome extends React.Component {
  render() {
    return <h1>Hello, Component</h1>;
  }
}
export default Welcome  
//  每一个模块都有自己单独的作用域，模块之间的相互调用关系是通过 export 来规定模块对外暴露的接口
// 通过 export default 指令就能加载到默认模块，不需要通过 花括号来指定输出的模块,
// 一个模块只能使用 export default 一次，而export可以使用多次