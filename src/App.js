import logo from './logo.svg';
import './App.css';
import GpaCalc from './GpaCalc';
import Navbar from './Navbar';
import CourseGrade from './CourseGrade';
import PassingMarksCalc from './PassingMarksCalc';
import CGPACalc from './CGPACalc';
import { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar>
      </Navbar>
      <Routes>
        <Route  path = "/gpacalculator/" element = {<GpaCalc></GpaCalc>}></Route>
        <Route  path = "gpacalculator/cgpa" element = {<CGPACalc></CGPACalc>}></Route>
        <Route exact path = "gpacalculator/passcalc" element = {<PassingMarksCalc></PassingMarksCalc>}></Route>
      </Routes>
   
    </div>
    </BrowserRouter>
  );
}

export default App;
