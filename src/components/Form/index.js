import Input from "../Input";
import Dropdown from "../Dropdown";
import Button from "../Button";
import {useState} from "react";
import {v4 as uuid} from 'uuid';
import './Form.css';
import {BiHide} from "react-icons/bi";
import {BiSolidHide} from "react-icons/bi";

const Form = ({teams, onEmployeeSubmit, onTeamSubmit}) => {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');
    const [teamName, setTeamName] = useState('');
    const [teamColor, setTeamColor] = useState('#000000');
    const [formVisible, setFormVisible] = useState(true);

    function submitEmployee(e) {
        e.preventDefault();
        const id = uuid();
        onEmployeeSubmit({id, name, role, image, team});
        setName('');
        setRole('');
        setImage('');
        setTeam('');
    }

    function submitTeam(e) {
        e.preventDefault();
        const id = uuid();
        onTeamSubmit({id, name: teamName, color: teamColor});
        setTeamName('');
        setTeamColor('#000000');
    }

    const visibleButtonProps = {
        size: 25,
        onClick: () => setFormVisible(!formVisible),
    }

    return (
        <section>
            {formVisible && (
                <div className="form-container">
                    <form onSubmit={submitEmployee}>
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
                                  items={teams}
                                  required={true}
                                  value={team}
                                  onChange={value => setTeam(value)}
                        />
                        <Button type="submit">
                            Criar card
                        </Button>
                    </form>
                    <form onSubmit={submitTeam}>
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
                </div>
            )}
            <div className="hide-button">
                <Button type="button">
                    {formVisible ? <BiHide {...visibleButtonProps}/> : <BiSolidHide {...visibleButtonProps}/>}
                </Button>
            </div>
        </section>
    );
}

export default Form;