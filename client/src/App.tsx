import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {HomePage} from "./components/Screens/Home";


export const App: React.FC = () => {
  return (
      <Router>
          <Route exact path='/' component={HomePage}/>
      </Router>
  );
}

