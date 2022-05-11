const Navbar = (props)=>{
    return(
        <div className="Navbar">
            <ul type="none">
                <li onClick={()=>{
                props.click(1)
                }}>GPA CALCULATOR</li>
                <li onClick={()=>{
                props.click(2)
                }}>PASSING MARKS CALCULATOR</li>
                <li onClick={()=>{
                props.click(3)
                }}>CGPA CALCULATOR</li>
            </ul>
        </div>
    )
}
export default Navbar