import React, { useReducer, useState, useEffect } from 'react';
import './App.css';
// import Calculator from './Calculator';
// import ClockComponent from './ClockComponent';
// import Emoji from './Emoji';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Home } from './Home';
import { SignIn } from './SignIn';

import { InputPost } from './InputPost';

export const CountContext = React.createContext()

function App() {
  

  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='SignIn' element={<SignIn />} />
        {/* <Route path='post' element={<Post />} />  */}
        <Route path='inputPost' element={<InputPost />} />
      </Routes>


      </div>
  )
}
export default App;




//------------------------------------------------
// export const EmojiContext = React.createContext()

// export default function App() {
//   const [mood, setMood] = useState('😃');
//   return (
//     <EmojiContext.Provider value={{mood,setMood}}>
//       <Emoji />
//       <ClockComponent />
//     </EmojiContext.Provider>
//   )
// }




// class App extends React.Component {
//   constructor(props) {

//     super(props);

//   }


//   render() {

//     return <Emoji />

//   }

// }
//export default App;