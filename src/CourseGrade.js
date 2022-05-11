const CourseGrade = (props)=>{
 return (
    <div className="formelement">
    <form className = "gradechoose">
    <label htmlFor="Grade">Grade </label>
    <select name="Grade" id="Grade">
    <option value="10">S</option>
   <option value="9">A</option>
   <option value="8">B</option>
   <option value="7">C</option>
   <option value="6">D</option>
   <option value="5">E</option>
   <option value="0">F</option>
   <option value="0">N</option>
 </select>
 <label htmlFor= "Credits">Credits </label>
    <select name="Credits" id="Credits">
    <option value="1">1</option>
   <option value="1.5">1.5</option>
   <option value="2">2</option>
   <option value="3">3</option>
   <option value="4">4</option>
   <option value="5">5</option>
   <option value="20">20</option>
 </select>
  </form>
           </div>)
}
export default CourseGrade;