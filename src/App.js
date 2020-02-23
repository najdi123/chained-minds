import React from 'react';
import Navbar from "./components/Navbar";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import LeftSidebar from './pages/LeftSidebar';
import RightSidebar from './pages/RightSidebar';
import NoSidebar from './pages/NoSidebar';
import LanguageContextProvider from "./context/LanguageContext";

function App() {
  return (
      <Router>
    <div className="App">
      <LanguageContextProvider>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/LeftSidebar' component={LeftSidebar}/>
              <Route exact path='/RightSidebar' component={RightSidebar}/>
              <Route exact path='/NoSidebar' component={NoSidebar}/>
          </Switch>
      </LanguageContextProvider>
    </div>
      </Router>
  );
}

export default App;
