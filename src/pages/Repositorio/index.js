import { useParams } from 'react-router-dom';
import { Container } from './styles';
import { useEffect, useState } from 'react';
import api from '../../services/api';

export default function Repositorio() {
    const { repo } = useParams();
    const [repositorio, setRepositorio] = useState({});
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function load() {
            const nomeRepo = decodeURIComponent(repo);

            const [repositorioData, issuesData] = await Promise.all([
                api.get(`/repos/${nomeRepo}`),
                api.get(`/repos/${nomeRepo}/issues`, {
                    params: {
                        state: 'open',
                        per_page: 5
                    }
                })
            ]);

            setRepositorio(repositorioData.data);
            setIssues(issuesData.data);
            setLoading(false);
        }

        load();
    }, []);



    return (
        <Container>
            <h1 style={{ color: '#FFFF' }}>repo Page</h1>
            {decodeURIComponent(repo)}
        </Container>
    );
}
