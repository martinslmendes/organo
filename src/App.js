import Banner from "./components/Banner";
import Form from "./components/Form";
import {useState} from "react";
import Team from "./components/Team";
import Footer from "./components/Footer";

const App = () => {
    const [teams, setTeams] = useState([
        {
            name: 'Programação',
            color: '#57C278',
        },
        {
            name: 'Front-End',
            color: '#82CFFA',
        },
        {
            name: 'Data Science',
            color: '#A6D157',
        },
        {
            name: 'Devops',
            color: '#E06B69',
        },
        {
            name: 'UX e Design',
            color: '#DB6EBF',
        },
        {
            name: 'Mobile',
            color: '#FFBA05',
        },
        {
            name: 'Inovação e Gestão',
            color: '#FF8A29',
        },
    ]);
    const [employees, setEmployees] = useState([]);
    const onEmployeeSubmit = (employee) => {
        setEmployees([...employees, employee]);
    }
    const deleteEmployee = (employee) => {
        //TODO
    }
    const setTeamColor = (name, color) => {
        setTeams(teams.map(team => {
            if (team.name === name) {
                team.color = color;
            }
            return team;
        }));
    }

    return (
        <div className="App">
            <Banner/>
            <Form onSubmit={employee => onEmployeeSubmit(employee)} teams={teams.map(team => team.name)}/>
            {teams.map((team) => (
                <Team employees={employees.filter(employee => employee.team === team.name)}
                      key={team.name}
                      name={team.name}
                      color={team.color}
                      onDelete={deleteEmployee}
                      onColorChange={setTeamColor}
                />
            ))}
            <Footer/>
        </div>
    );
}

export default App;
