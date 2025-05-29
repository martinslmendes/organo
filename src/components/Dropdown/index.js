import './Dropdown.css';

export const Dropdown = (props) => {
    return (
        <div className="dropdown">
            <label>{props.label}</label>
            <select onChange={e => props.onChange(e.target.value)}
                    required={props.required}
                    value={props.value}>
                <option value=""></option>
                {props.items.map((item) => (
                    <option key={item}>{item}</option>
                ))}
            </select>
        </div>
    )
}

export default Dropdown;