import { useState } from "react"

const PassingMarksCalc = ()=>
{    const [passmark,SetPassMark] = useState(16);
     const passMarksFinder =()=>{
      var markslist = document.getElementsByClassName('pformelement')   
     let DA1 = parseFloat(markslist[0].children[1].value)||0
     let DA2 = parseFloat(markslist[1].children[1].value)||0
     let DA3 = parseFloat(markslist[2].children[1].value)||0
     let CAT1 = parseFloat(markslist[3].children[1].value)*0.3||0
     let CAT2 = parseFloat(markslist[4].children[1].value)*0.3||0
     let total = DA1+DA2+DA3+CAT1+CAT2;
     if(50-total>16)
     {
         SetPassMark((50-total));
     }
     else{
         SetPassMark(16);
     }
     if(DA1==NaN ||DA2==NaN||DA3==NaN||CAT1==NaN||CAT2==NaN)
     {
         alert("Enter valid Input")
     }
     if(DA1>10 ||DA2>10||DA3>10||CAT1>50||CAT2>50)
     {
         alert("Enter Valid Input")
     }
     

     }


    return(<div>
         <div className="Title"> PASSING MARKS CALCULATOR</div>
         <div className="form">
          <form>
          <div className="pformelement">
          <label htmlFor="DA1" className="plabel">DA1 Marks(out of 10) :</label>    
          <input  type = "number" itemID="DA1" min = "0" max = "10"></input>
          </div>
          <div className="pformelement">
          <label htmlFor="DA2" className="plabel">DA2 Marks(out of 10):</label>    
          <input type = "number" itemID="DA2" min = "0" max = "10"></input>
          </div>
          <div className="pformelement">
          <label htmlFor="DA3" className="plabel">DA3 Marks(out of 10) :</label>    
          <input type = "number" itemID="DA3" min = "0" max = "10"></input>
          </div>
          <div className="pformelement">
          <label htmlFor="CAT1" className="plabel">CAT1 Marks(out of 50) :</label>    
          <input type = "number" itemID="CAT1" min="0" max = "50"></input>
          </div>
          <div className="pformelement">
          <label htmlFor="CAT2" className="plabel">CAT2 Marks (out of 50):</label>    
          <input type = "number" itemID="CAT2" min = "0" max = "50"></input>
         </div>         
          </form>   
         </div>
         <div className="submit">
          <button itemID="psubmit" onClick={passMarksFinder} className="subbtn">Get Minumum FAT Marks</button>
        </div>
         <div className="row">
    <div>FAT MARKS NEEDED</div>
    <div>Out of 60: {((passmark/40)*60).toFixed(2)} </div>
    <div>Out of 100: {((passmark/40)*100).toFixed(2)}</div>
    </div>
    </div>)
}
export default PassingMarksCalc;