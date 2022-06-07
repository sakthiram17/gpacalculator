import React from "react";
import {CSSTransition} from 'react-transition-group'
let i = 0;
let gradeToPointConversion = {
  S : '10',
  A : '9',
  B : '8',
  C : '7',
  D : '6',
  E : '5',
  F : '0',
  N : '0'
}
let PointToGradeConversion = {
  10 : 'S',
  9 : 'A',
  8 : 'B',
  7 : 'C',
  6 : 'D',
  5 : 'E',
  0 : 'N'
}
const CourseGrade = (props)=>{
 return (
    <React.Fragment>
    <div className="formelement" id = {props.id}>
            <form className = "gradechoose">
            <label htmlFor="Grade">Grade </label>
            <select name="Grade" id="Grade" value = {gradeToPointConversion[props.grade]} 
            onChange = {(event)=>{
             
              props.onChange(props.id,PointToGradeConversion[event.target.value],null)
            }}
            >
            <option value="10">S</option>
            <option value="9">A</option>
            <option value="8">B</option>
            <option value="7">C</option>
            <option value="6">D</option>
            <option value="5">E</option>
            <option value="0">F</option>
          </select>
          <label htmlFor= "Credits">Credits </label>
              <select name="Credits" id="Credits" value={props.credits}
              onChange = {(event)=>{
                props.onChange(props.id,null,event.target.value)
              }}
              >
              <option value="1">1</option>
            <option value="1.5">1.5</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="20">20</option>
          </select>
          </form>
          <button className="inlinebtn" onClick={()=>{props.delete(props.id)}}>-</button>
           </div>
          
       </React.Fragment>
           )
}
export default CourseGrade;