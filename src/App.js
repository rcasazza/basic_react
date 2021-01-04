import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage, CounterButtonPage, PeopleListPage, NotFoundPage, ProtectedPage, ControlledFormPage, UncontrolledFormPage, UserProfilePage } from './pages'
import { NavBar } from './NavBar';
import { FormsNavBar } from './FormsNavBar';
import { UserDataLoader } from './UserDataLoader';
import { ThemeContext } from './ThemeContext';
import './App.css';

function App() {

  return (
    <ThemeContext.Provider value="light">
      <div className="App">
        <Router>
          <NavBar />
          <div className="App-header">
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/counter/:name">
                <CounterButtonPage />
              </Route>
              <Route path="/people">
                <PeopleListPage />
              </Route>
              <Route path="/protected">
                <ProtectedPage />
              </Route>
              <Route path="/user">
                <UserDataLoader>
                  <UserProfilePage />
                </UserDataLoader>
              </Route>
              <Route path="/forms">
                <Router>
                  <FormsNavBar />
                  <Route path="/forms/controlled">
                    <ControlledFormPage />
                  </Route>
                  <Route path="/forms/uncontrolled">
                    <UncontrolledFormPage />
                  </Route>
                </Router>   
              </Route>
              <Route>
                <NotFoundPage />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
