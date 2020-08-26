import React from 'react';
import './styles/App.css';
import Sidebar from './components/Sidebar.js'
import Chat from './components/Chat.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    // BEM naming convention "app"
    <div className="app">
      <h1>WhatsReactApp</h1>
        <div className="app__body">
          <Router>
            <Sidebar/>
              <Switch>
                <Route path="/rooms/:roomId">
                  <Chat/>
                </Route>
                <Route exact path='/'>
                  <Chat/>
                </Route>
              </Switch>
          </Router> 


          
        </div>
    </div>
  );
}

export default App;
