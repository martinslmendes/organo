import Banner from "./components/Banner";
import Form from "./components/Form";
import {useState} from "react";
import Team from "./components/Team";
import Footer from "./components/Footer";

const App = () => {
    const teams = [
        {
            name: 'Programação',
            primaryColor: '#57C278',
            secondaryColor: '#D9F7E9',
        },
        {
            name: 'Front-End',
            primaryColor: '#82CFFA',
            secondaryColor: '#E8F8FF',
        },
        {
            name: 'Data Science',
            primaryColor: '#A6D157',
            secondaryColor: '#F0F8E2',
        },
        {
            name: 'Devops',
            primaryColor: '#E06B69',
            secondaryColor: '#FDE7E8',
        },
        {
            name: 'UX e Design',
            primaryColor: '#DB6EBF',
            secondaryColor: '#FAE9F5',
        },
        {
            name: 'Mobile',
            primaryColor: '#FFBA05',
            secondaryColor: '#FFF5D9',
        },
        {
            name: 'Inovação e Gestão',
            primaryColor: '#FF8A29',
            secondaryColor: '#FFEEDF',
        },
    ];
    const [employees, setEmployees] = useState([]);
    const onEmployeeSubmit = (employee) => {
        setEmployees([...employees, employee]);
    }
    const deleteEmployee = (employee) => {
        //TODO
    }

    return (
        <div className="App">
            <Banner/>
            <Form onSubmit={employee => onEmployeeSubmit(employee)} teams={teams.map(team => team.name)}/>
            {teams.map((team) => (
                <Team employees={employees.filter(employee => employee.team === team.name)}
                      key={team.name}
                      name={team.name}
                      primaryColor={team.primaryColor}
                      secondaryColor={team.secondaryColor}
                      onDelete={deleteEmployee}
                />
            ))}
            <Footer/>
        </div>
    );
}

export default App;
