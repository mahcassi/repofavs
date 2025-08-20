import { useCallback, useState } from 'react';
import { FaGithub, FaPlus } from 'react-icons/fa';
import { Container, Form, SubmitButton } from './styles';
import api from '../../services/api';

export default function Main() {
    const [newRepo, setNewRepo] = useState('');
    const [repositorios, setRepositorios] = useState([]);

    function handleInputChange(e) {
        setNewRepo(e.target.value);
    }

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        async function submit() {
            console.log(e)


            const response = await api.get(`/repos/${newRepo}`);
            const data = {
                name: response.data.full_name,
                description: response.data.description,
                owner: response.data.owner.login,
                stars: response.data.stargazers_count,
                forks: response.data.forks_count,
            }

            setRepositorios([...repositorios, data]);
            setNewRepo('');
        }

        submit();
    }, [newRepo, repositorios]);

    return (
        <Container>

            <h1>
                <FaGithub size={25} />
                Meus Repositorios
            </h1>

            <Form onSubmit={(handleSubmit)}>
                <input type="text" placeholder="Adicionar Repositorios" value={newRepo} onChange={handleInputChange} />

                <SubmitButton>
                    <FaPlus color="#FFF" size={14} />
                </SubmitButton>

            </Form>

        </Container>
    )
}