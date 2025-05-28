import Banner from "./components/Banner";
import Form from "./components/Form";
import {useState} from "react";
import Team from "./components/Team";
import Footer from "./components/Footer";
import {v4 as uuid} from 'uuid';

const App = () => {
    const [teams, setTeams] = useState([{
        id: uuid(), name: 'Programação', color: '#57C278',
    }, {
        id: uuid(), name: 'Front-End', color: '#82CFFA',
    }, {
        id: uuid(), name: 'Data Science', color: '#A6D157',
    }, {
        id: uuid(), name: 'Devops', color: '#E06B69',
    }, {
        id: uuid(), name: 'UX e Design', color: '#DB6EBF',
    }, {
        id: uuid(), name: 'Mobile', color: '#FFBA05',
    }, {
        id: uuid(), name: 'Inovação e Gestão', color: '#FF8A29',
    },]);
    const initial = [{
        id: uuid(),
        name: 'JULIANA AMOASEI',
        role: 'Desenvolvedora de software e instrutora',
        image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
        team: teams[0].name
    }, {
        id: uuid(),
        name: 'DANIEL ARTINE',
        role: 'Engenheiro de Software na Stone Age',
        image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
        team: teams[0].name
    }, {
        id: uuid(),
        name: 'GUILHERME LIMA',
        role: 'Desenvolvedor Python e JavaScript na Alura',
        image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
        team: teams[0].name
    }, {
        id: uuid(),
        name: 'PAULO SILVEIRA',
        role: 'Hipster e CEO da Alura',
        image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
        team: teams[0].name
    }, {
        id: uuid(),
        name: 'JULIANA AMOASEI',
        role: 'Desenvolvedora de software e instrutora',
        image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
        team: teams[1].name
    }, {
        id: uuid(),
        name: 'DANIEL ARTINE',
        role: 'Engenheiro de Software na Stone Age',
        image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
        team: teams[1].name
    }, {
        id: uuid(),
        name: 'GUILHERME LIMA',
        role: 'Desenvolvedor Python e JavaScript na Alura',
        image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
        team: teams[1].name
    }, {
        id: uuid(),
        name: 'PAULO SILVEIRA',
        role: 'Hipster e CEO da Alura',
        image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
        team: teams[1].name
    }, {
        id: uuid(),
        name: 'JULIANA AMOASEI',
        role: 'Desenvolvedora de software e instrutora',
        image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
        team: teams[2].name
    }, {
        id: uuid(),
        name: 'DANIEL ARTINE',
        role: 'Engenheiro de Software na Stone Age',
        image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
        team: teams[2].name
    }, {
        id: uuid(),
        name: 'GUILHERME LIMA',
        role: 'Desenvolvedor Python e JavaScript na Alura',
        image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
        team: teams[2].name
    }, {
        id: uuid(),
        name: 'PAULO SILVEIRA',
        role: 'Hipster e CEO da Alura',
        image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
        team: teams[2].name
    }, {
        id: uuid(),
        name: 'JULIANA AMOASEI',
        role: 'Desenvolvedora de software e instrutora',
        image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
        team: teams[3].name
    }, {
        id: uuid(),
        name: 'DANIEL ARTINE',
        role: 'Engenheiro de Software na Stone Age',
        image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
        team: teams[3].name
    }, {
        id: uuid(),
        name: 'GUILHERME LIMA',
        role: 'Desenvolvedor Python e JavaScript na Alura',
        image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
        team: teams[3].name
    }, {
        id: uuid(),
        name: 'PAULO SILVEIRA',
        role: 'Hipster e CEO da Alura',
        image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
        team: teams[3].name
    }, {
        id: uuid(),
        name: 'JULIANA AMOASEI',
        role: 'Desenvolvedora de software e instrutora',
        image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
        team: teams[4].name
    }, {
        id: uuid(),
        name: 'DANIEL ARTINE',
        role: 'Engenheiro de Software na Stone Age',
        image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
        team: teams[4].name
    }, {
        id: uuid(),
        name: 'GUILHERME LIMA',
        role: 'Desenvolvedor Python e JavaScript na Alura',
        image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
        team: teams[4].name
    }, {
        id: uuid(),
        name: 'PAULO SILVEIRA',
        role: 'Hipster e CEO da Alura',
        image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
        team: teams[4].name
    }, {
        id: uuid(),
        name: 'JULIANA AMOASEI',
        role: 'Desenvolvedora de software e instrutora',
        image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
        team: teams[5].name
    }, {
        id: uuid(),
        name: 'DANIEL ARTINE',
        role: 'Engenheiro de Software na Stone Age',
        image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
        team: teams[5].name
    }, {
        id: uuid(),
        name: 'GUILHERME LIMA',
        role: 'Desenvolvedor Python e JavaScript na Alura',
        image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
        team: teams[5].name
    }, {
        id: uuid(),
        name: 'PAULO SILVEIRA',
        role: 'Hipster e CEO da Alura',
        image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
        team: teams[5].name
    },]

    const [employees, setEmployees] = useState(initial);
    const onEmployeeSubmit = (employee) => {
        setEmployees([...employees, employee]);
    }

    function deleteEmployee(employeeId) {
        setEmployees(employees.filter(employee => employee.id !== employeeId));
    }

    const setTeamColor = (id, color) => {
        setTeams(teams.map(team => {
            if (team.id === id) {
                team.color = color;
            }
            return team;
        }));
    }

    return (<div className="App">
        <Banner/>
        <Form onSubmit={employee => onEmployeeSubmit(employee)} teams={teams.map(team => team.name)}/>
        {teams.map((team) => (<Team employees={employees.filter(employee => employee.team === team.name)}
                                    key={team.id}
                                    team={team}
                                    onDelete={deleteEmployee}
                                    onColorChange={setTeamColor}
        />))}
        <Footer/>
    </div>);
}

export default App;
