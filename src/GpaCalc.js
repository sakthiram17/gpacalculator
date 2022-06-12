import CourseGrade from "./CourseGrade"
import react,{useState,useEffect,useReducer} from  "react"
import StatsCard from './StatsCard'
import { v4 as uuid } from 'uuid';
let gpa = null;
let credits = null;
let initial_value = []
let gradeToPointConversion = {
  S : '10',
  A : '9',
  B : '8',
  C : '7',
  D : '6',
  E : '5',
  F : '0',
}
for(let i = 0;i<7;i++)
{
  initial_value.push({
    id : uuid(),
    grade : 'A',
    credits : "4",
    style:null
  })
}
const GpaCalc = ()=>{
  const [course_list,setCourseList]  = useState([])
  let DeleteAnimator = ()=>{};
  
  const reducer = (state,action)=>{
    let temp;
    console.log(state)
    switch(action.type){
      case 'ADD_ANIM': temp = [...state]
                  temp[temp.length-1].style= null;
                  return temp;
      case 'ADD' :temp = [...state]
                 temp.push({id:uuid(),grade :'A',credits : 4})
                 temp[temp.length-1].style= {opacity:0.5,
                  transform: "translateX(-40vw)",
                  transform : "scale(0)"
                };
                 return temp;
      case 'DEL' : temp = [...state]
                   temp[temp.length-1].style = null;
                  temp.pop()
                  console.log("DELETION COMPLETE")
                  return temp;
      case 'DEL_ANIM' : temp = [...state]
                        temp[temp.length-1].style= {opacity:0.5,
                          transform: "translateX(-40vw)",
                          transform : "scale(0.5)"
                        };
                  return temp;
      case  'DELLOC_ANIM' : temp = [...state]
                            let pos = temp.findIndex((ele)=>{
                              return ele.id  === action.id
                            })
                            temp[pos].style =  {opacity:0.5,
                              transform: "translateX(-40vw)",
                              transform : "scale(0.5)"
                            };
                            return temp;
      case  'DELLOC': temp = [...state]
                      let newstate = []
                      let index = temp.findIndex((ele)=>{
                        return ele.id === action.id
                      })
                      temp[index].style = null;
                      newstate = temp.filter((ele)=>{
                        return ele.id !== action.id
                      })
                   return newstate
      case 'ONCHANGE':
                
                      let dummy_state = []
                      for(let i = 0;i<state.length;i++)
                      {
                        if(action.id!==state[i].id)
                        {
                          dummy_state.push(state[i])
                        }
                        else{
                          dummy_state.push({
                            id:action.id,
                            grade: action.grade||state[i].grade,
                            credits :action.credits || state[i].credits
                          })
                        }

                      }
                      return dummy_state
    }
  }
  
  const [CourseList,dispatch] = useReducer(reducer,initial_value)
  
  const simpleCourseAdder = ()=>{
    dispatch({type:'ADD'})
    setTimeout(()=>{
      dispatch({type:'ADD_ANIM'})
    },200)
  }
  const simpleCourseRemover = async ()=>{
    dispatch({type:'DEL_ANIM'})
      setTimeout(()=>{
    dispatch({type:'DEL'})
    },200)
  }
  
  const changeHandler = (id,grade,credits)=>{
    dispatch({type:'ONCHANGE',id:id,grade:grade,credits:credits})
  }
  const deleteCourseHandler = (key)=>{
    dispatch({type:'DELLOC_ANIM',id:key})
    setTimeout(()=>{
      dispatch({type:'DELLOC',id:key})
    },200)

  }



  
  const [gpa,setGpa] = useState(null);
  const courselist = null;

   const removeCourseHandler = ()=>{
     
      let temp_list = [...course_list];
      temp_list.pop()  
      setCourseList(temp_list)
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
        let temp_gpa = gp/credits;
        temp_gpa = temp_gpa.toFixed(2);
        setGpa(temp_gpa)
      }
      return(
        
          <div>
            <div className="Title"> VIT GPA CALCULATOR</div>
            <div className = 'formgrp'>
            {CourseList.map((obj)=>{
              return <CourseGrade  key = {obj.id}
              onChange = {changeHandler}
              style = {obj.style ||null}
              delete = {deleteCourseHandler} id = {obj.id} grade = {obj.grade} credits = {obj.credits}></CourseGrade>
            })}
            </div>
            <div className = "btngrp">
          <button className ="btn" onClick= {simpleCourseAdder}>+</button>
          <button className = "btn" onClick = {simpleCourseRemover}>-</button>
          </div>
          <div className="submit">
            <button onClick ={CalculateGpa} itemID="submit" className="subbtn">Get GPA</button>
          </div>
          <StatsCard GPA = {gpa} Credits = {credits}></StatsCard>
          </div>
      )

}
export default GpaCalc