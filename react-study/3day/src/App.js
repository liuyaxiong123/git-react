import React from 'react';
import Yeye from './components/Context/Yeye.jsx'
import Xiongdi from './components/Context/Xiongdi.jsx'
import Fragments from './components/Fragments'
import Header from './components/Header'
import Error from './components/Error'
import Demo1 from './components/Gaojie/Demo1.jsx'
function App() {
  return (
    <div className="App">
      {/* <Yeye />
      <Xiongdi />
      <Error errorInfo='文档组件出错了'>
        <Fragments />
      </Error>
      <Header>     
        <span name='new'>
          <i>新闻</i>
        </span>
        <span name='con'>内容</span>      
      </Header>
      <Header>     
        <span name='new'>新闻</span>   
      </Header> */}

      <Demo1 />
    </div>
  );
}

export default App;
