import Employee from "../Employee";
import hexToRgba from 'hex-to-rgba';

export const Team = ({name, employees, color, onDelete, onColorChange}) => {
    return (
        (employees.length > 0) &&
        <section className='team' style={{backgroundColor: hexToRgba(color, 0.6)}}>
            <input type="color" value={color} onChange={e => onColorChange(name, e.target.value)}/>
            <h3 style={{borderColor: color}}>{name}</h3>
            <div className="employees">
                {employees.map(employee =>
                    <Employee key={employee.name}
                              color={color}
                              employee={employee}
                              name={employee.name}
                              role={employee.role}
                              image={employee.image}
                              onDelete={onDelete}
                    />)}
            </div>
        </section>
    );
}