import { useParams } from 'react-router-dom';

export default function Repositorio({match}) {
    const { repo } = useParams();

    return (
        <div>
            <h1 style={{color: '#FFFF'}}>repo Page</h1>
           {decodeURIComponent(repo)}
        </div>
    );
}
