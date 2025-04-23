import './TextInput.css';

export const TextInput = (props) => {
    const onChange = (e) => {
        props.onChange(e.target.value);
    }

    return (
        <div className="text-input">
            <label>{props.label}</label>
            <input value={props.value}
                   required={props.required}
                   type="text"
                   placeholder={props.placeholder}
                   onChange={onChange}/>
        </div>
    );
}