import { NavLink } from "react-router-dom"
const Navbar = (props)=>{
    return(
        <div className="Navbar">
            <ul type="none">
                <NavLink 
                to = '/gpacalculator/' 
                className= "Navbar-list-item"
                activeClassName = "Navbar-list-item active"
                exact>GPA CALCULATOR</NavLink>
                <NavLink 
                to = '/gpacalculator/cgpa'
                className= "Navbar-list-item"
                activeClassName = "Navbar-list-item active"
                 exact>CGPA CALCULATOR</NavLink>
                <NavLink 
                to = '/gpacalculator/passcalc'
                className= "Navbar-list-item"
                activeClassName = "Navbar-list-item active"
                 exact>PASSING MARKS CALCULATOR</NavLink>
            </ul>
        </div>
    )
}
export default Navbar