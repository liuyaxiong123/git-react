import React, { Component } from 'react';
import Yeye from './components/Yeye'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Yeye />
      </div>
    );
  }
}
/* 用这种方式写不能添加状态或方法之类
function App(){
  return (
    <div className="App">
      App
    </div>
  );
}
*/
export default App;
