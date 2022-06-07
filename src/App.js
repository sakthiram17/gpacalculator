import logo from './logo.svg';
import './App.css';
import GpaCalc from './GpaCalc';
import Navbar from './Navbar';
import CourseGrade from './CourseGrade';
import PassingMarksCalc from './PassingMarksCalc';
import CGPACalc from './CGPACalc';
import { useState } from 'react';
function App() {
  let [output,setoutput] = useState(<GpaCalc></GpaCalc>)
  const handlePageChange = (pagechoice)=>
  {
    if(pagechoice ==1)
    {
      setoutput(<GpaCalc></GpaCalc>)
    }
    else if(pagechoice==2)
    {
    setoutput(<PassingMarksCalc></PassingMarksCalc>)
    }
    else{
    setoutput(<CGPACalc></CGPACalc>)
    }

}
  return (
    <div className="App">
      <Navbar click= {handlePageChange}></Navbar>
    {output}
    </div>
  );
}

export default App;
