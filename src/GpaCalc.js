import CourseGrade from "./CourseGrade"
import react,{useState} from  "react"
import StatsCard from './StatsCard'
let key_for_list = 8;
let gpa = null;
let credits = null;
const elements_list  = [<CourseGrade key = {1}></CourseGrade>,
  <CourseGrade key = {2}></CourseGrade>,
  <CourseGrade key = {3}></CourseGrade>,
  <CourseGrade key = {4}></CourseGrade>,
  <CourseGrade key = {5}></CourseGrade>,
  <CourseGrade key = {6}></CourseGrade>,
  <CourseGrade key = {7}></CourseGrade>
]
const GpaCalc = ()=>{
    const [changemarker, setChange] = useState(true);

    const courselist = null;
    const addCourseHandler = ()=>{
    elements_list.push(<CourseGrade key = {key_for_list}></CourseGrade>)
    
    setChange(!changemarker);
    key_for_list = key_for_list +1;
  }    
  const removeCourseHandler = ()=>{
      elements_list.pop();
      setChange(!changemarker);
    key_for_list = key_for_list -1;
  }
  const CalculateGpa = ()=>{
      let gp = 0;
      credits = 0;
    var elelist = document.getElementsByClassName('gradechoose');
    for(var i = 0;i<elelist.length;i++)
    {
      let temp = elelist[i];
      credits = parseFloat(elelist[i].Credits.value) + credits;
      gp = elelist[i].Grade.value * elelist[i].Credits.value+gp;
      }
      gpa = gp/credits;
      gpa = gpa.toFixed(2);
      setChange(!changemarker);
    }


      return(
        
          <div>
            <div className="Title"> VIT GPA CALCULATOR</div>
            <div className = 'formgrp'>
          {elements_list}
            </div>
            <div className = "btngrp">
          <button className ="btn" onClick= {addCourseHandler}>+</button>
          <button className = "btn" onClick = {removeCourseHandler}>-</button>
          </div>
          <div className="submit">
            <button onClick ={CalculateGpa} itemID="submit" className="subbtn">Get GPA</button>
          </div>
          <StatsCard GPA = {gpa} Credits = {credits}></StatsCard>
          </div>
      )

}
export default GpaCalc