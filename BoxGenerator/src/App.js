import React, { useState } from 'react';
import './App.css';
import HeaderComponent from './Components/HeaderComponent';
import MessageFormComponent from './Components/MessageFormComponent';
import MessageDisplayComponent from './Components/MessageDisplayComponent';

function App() {
  const [currentMsg, setCurrentMsg] = useState([]);
  const youveGotMail = ( newMessage ) => {
    setCurrentMsg ( currentMsg.concat(newMessage) );
}
  return (
    <div className="App">
      <HeaderComponent />
      <MessageFormComponent youveGotMail={ youveGotMail }  />
      <MessageDisplayComponent message={currentMsg} />

    </div>
  );
  }
export default App;
