import React from 'react';
import UserRouter from './routes/users.route';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Calender from './components/Calender';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/calendar" component={Calender} />
          <Route path="/" component={UserRouter} />
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;