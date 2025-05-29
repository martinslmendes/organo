import Input from "../Input";
import Dropdown from "../Dropdown";
import Button from "../Button";
import {useState} from "react";
import {v4 as uuid} from 'uuid';

export const Form = (props) => {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');
    const [teamName, setTeamName] = useState('');
    const [teamColor, setTeamColor] = useState('');

    const onEmployeeSubmit = (e) => {
        e.preventDefault();
        const id = uuid();
        props.onEmployeeSubmit({id, name, role, image, team});
        setName('');
        setRole('');
        setImage('');
        setTeam('');
    }

    const onTeamSubmit = (e) => {
        e.preventDefault();
        const id = uuid();
        props.onTeamSubmit({id, name: teamName, color: teamColor});
        setTeamName('');
        setTeamColor('#000000');
    }

    return (<section className="form-container">
            <form onSubmit={onEmployeeSubmit}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Input label="Nome"
                           placeholder="Digite o seu nome"
                           required={true}
                           value={name}
                           onChange={value => setName(value)}
                />
                <Input label="Cargo"
                           placeholder="Digite o seu cargo"
                           required={true}
                           value={role}
                           onChange={value => setRole(value)}
                />
                <Input label="Imagem"
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
            <form onSubmit={onTeamSubmit}>
                <h2>Preencha os dados para criar o card do time</h2>
                <Input label="Nome"
                           placeholder="Digite o nome do time"
                           required
                           value={teamName}
                           onChange={value => setTeamName(value)}
                />
                <Input label="Cor"
                           type='color'
                           placeholder="Digite a cor do time"
                           required
                           value={teamColor}
                           onChange={value => setTeamColor(value)}
                />
                <Button type="submit">
                    Criar time
                </Button>
            </form>
        </section>);
}