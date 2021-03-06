import Sems from "./Sems"
import {useState} from 'react'
import React from "react";
let  elements_list = [<Sems key = {2} id = {2}></Sems>];
let id = 2;
const CGPACalc = ()=>{
  const [newarr,changearr] = useState(<Sems key = {2} id = {2}></Sems>)
  const [cgpa,SetCgpa] = useState(null); 
  const removeSemHandler =()=>{
  if(id>=2)
    {id = id -1;
        changearr(
          (elements_list)=>{
        return elements_list.pop()
              }
            );
    }
  }
  const AddSemHandler = ()=>
  {
    if(id<8)
    {
      id = id +1;
      changearr((elements_list)=>{
      return elements_list.push(<Sems key = {id} id = {id}></Sems>);
      });
    }
  }
    const calcCgpaHandler= ()=>{
    let elelist = document.getElementsByClassName('formelement');
    let CurrentCgpa = parseFloat(elelist[0].children[1].value);
    let CompletedCredits = parseFloat(elelist[1].children[1].value);
    let gpa = parseFloat(elelist[2].children[1].value);
    let credits = parseFloat(elelist[3].children[1].value);
    let final_cgpa = (credits*gpa + CurrentCgpa*CompletedCredits)/(credits+CompletedCredits);
    SetCgpa(final_cgpa.toFixed(2));

  }

  return(
      <div className>
        <div className="Title"> VIT CGPA CALCULATOR</div>
        <div className="form">
      <Sems text ="Current CGPA " id = "prevcgpa"></Sems>
      <Sems text = "Completed Credits "></Sems>
      <Sems text ="Current Sem GPA " id = "cgpa"></Sems>
      <Sems text = "Current Sem Credits"></Sems>
        <div className = "btngrp">
        <div className="submit">
            <button itemID="csubmit" onClick={calcCgpaHandler} className="subbtn">CalCulate CGPA</button>
          </div>
          </div>
          </div>
          <div className="row">
      <div>CGPA</div>
      <div>{cgpa}</div>
      
      </div>
      </div>
  )

}
export default CGPACalc