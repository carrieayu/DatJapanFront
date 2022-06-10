import React from 'react';
import styled from 'styled-components';
import Button from './Components/Button';
import Label from './Components/Label';
import {FaHeart} from 'react-icons/fa';
import { FaCommentAlt, FaThumbsUp, FaRegEye } from 'react-icons/fa'
import './assets/main.scss'
import Card from './Components/Card';
import './App.css';
import Navbar from './Components/Navbar';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Components/Pages/Home';
import Screen1 from './Components/Pages/Screen1'
import Screen2 from './Components/Pages/Screen2'
import Screen3 from './Components/Pages/Screen3'
import Screen4 from './Components/Pages/Screen4'
import Screen5 from './Components/Pages/Screen5'


const App = () => {
  return (
    <Router>
    {/* <Navbar></Navbar> */}
    <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Screen1"  component={Screen1}/>
            <Route path="/Screen2"  component={Screen2}/>
            <Route path="/Screen3"  component={Screen3}/>
            <Route path="/Screen4"  component={Screen4}/>
            <Route path="/Screen5"  component={Screen5}/>
    </Switch>
    </Router>
  );
}

export default App;
