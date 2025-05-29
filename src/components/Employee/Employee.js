import {IoIosRemoveCircle} from "react-icons/io";
import {MdFavorite} from "react-icons/md";
import {MdFavoriteBorder} from "react-icons/md";

export const Employee = ({employee, color, onDelete, onFavorite}) => {
    function favoriteEmployee() {
        onFavorite(employee.id);
    }

    const favoriteProps = {
        size: 25,
        onClick: favoriteEmployee,
    }

    return (<div className="employee">
        <IoIosRemoveCircle size={25} className="delete" onClick={() => onDelete(employee.id)}/>
        <div className="header" style={{backgroundColor: color}}>
            <img src={employee.image} alt={employee.name}/>
        </div>
        <div className="footer">
            <h4>{employee.name}</h4>
            <h5>{employee.role}</h5>
            <div className="favorite">
                {employee.favorite
                    ? <MdFavorite {...favoriteProps} color="#FF0000"/>
                    : <MdFavoriteBorder {...favoriteProps}/>
                }
            </div>
        </div>
    </div>);
}