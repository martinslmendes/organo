import {IoIosRemoveCircle} from "react-icons/io";

export const Employee = ({employee, color, onDelete}) => {
    return (<div className="employee">
        <IoIosRemoveCircle size={25} className="delete" onClick={() => onDelete(employee.id)} />
        <div className="header" style={{backgroundColor: color}}>
            <img src={employee.image} alt={employee.name}/>
        </div>
        <div className="footer">
            <h4>{employee.name}</h4>
            <h5>{employee.role}</h5>
        </div>
    </div>);
}