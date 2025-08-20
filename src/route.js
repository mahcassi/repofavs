import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Repositorio from './pages/Repositorio';



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path="/repositorio/:repo" element={<Repositorio />} />
            </Routes>

        </BrowserRouter>
    )
}

export default Router;