import TextInput from "../TextInput";
import Dropdown from "../Dropdown";
import Button from "../Button";
import {useState} from "react";

export const Form = (props) => {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({name, role, image, team});
        setName('');
        setRole('');
        setImage('');
        setTeam('');
    }

    return (
        <section className="form-container">
            <form onSubmit={onSubmit}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextInput label="Nome"
                           placeholder="Digite o seu nome"
                           required={true}
                           value={name}
                           onChange={value => setName(value)}
                />
                <TextInput label="Cargo"
                           placeholder="Digite o seu cargo"
                           required={true}
                           value={role}
                           onChange={value => setRole(value)}
                />
                <TextInput label="Imagem"
                           placeholder="Informe o endereço da imagem"
                           value={image}
                           onChange={value => setImage(value)}
                />
                <Dropdown label="Time"
                          items={props.teams}
                          required={true}
                          value={team}
                          onChange={value => setTeam(value)}
                />
                <Button type="submit">
                    Criar card
                </Button>
            </form>
        </section>
    );
}