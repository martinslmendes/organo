import './Input.css';

export const Input = ({type = 'text', label, value, required = false, placeholder, onChange}) => {
    return (
        <div className={`input input-${type}`}>
            <label>{label}</label>
            <input value={value}
                   required={required}
                   type={type}
                   placeholder={placeholder}
                   onChange={e => onChange(e.target.value)}
            />
        </div>
    );
}