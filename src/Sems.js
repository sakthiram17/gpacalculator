
const Sems = (props)=>{
    
    if(props.id>8)
    {
        return null;
    }
    return(
        <div className="formelement row">
        <label htmlFor={props.id}>{props.text}</label>
        <input type = "number" itemID={props.id}></input>
        </div>
    )
}
export default Sems;