import React, { useEffect } from 'react';
import AppRouter from './router/AppRouter.jsx'

function App() {
  useEffect(()=>{
    fetch('/api/user').then(data=>data.text()).then((result)=>{
      console.log(result);
    }).catch(err=>{
      console.log(err);
    })
  },[])
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
