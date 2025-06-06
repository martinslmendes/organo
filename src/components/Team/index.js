import './Team.css';
import Employee from "../Employee";
import hexToRgba from 'hex-to-rgba';

export const Team = ({team, employees, onDelete, onColorChange, onFavorite}) => {
    return ((employees.length > 0) && <section className='team' style={{backgroundColor: hexToRgba(team.color, 0.6)}}>
        <input className="team-input-color" type="color" value={team.color}
               onChange={e => onColorChange(team.id, e.target.value)}/>
        <h3 style={{borderColor: team.color}}>{team.name}</h3>
        <div className="employees">
            {employees.map(employee =>
                <Employee key={employee.id}
                          color={team.color}
                          employee={employee}
                          onDelete={onDelete}
                          onFavorite={onFavorite}
                />)}
        </div>
    </section>);
}

export default Team;