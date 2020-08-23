import React from 'react';
import './styles/App.css';
import Sidebar from './components/Sidebar.js'
import Chat from './components/Chat.js'

function App() {
  return (
    // BEM naming convention "app"
    <div className="app">
      <h1>WhatsReactApp</h1>
        <div className="app__body">
          <Sidebar />
          <Chat/>
        </div>
    </div>
  );
}

export default App;
