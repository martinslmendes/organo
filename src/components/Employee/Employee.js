import { IoIosRemoveCircle } from "react-icons/io";

export const Employee = ({name, role, image, color, onDelete}) => {
    return (
        <div className="employee">
            <IoIosRemoveCircle size={25} className="delete" onClick={onDelete}/>
            <div className="header" style={{backgroundColor: color}}>
                <img src={image} alt={name}/>
            </div>
            <div className="footer">
                <h4>{name}</h4>
                <h5>{role}</h5>
            </div>
        </div>
    );
}