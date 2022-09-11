import "../assets/css/reset.css";
import "../assets/css/style.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import TelaLogin from "./TelaLogin";


export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TelaLogin />} />
            </Routes>
        </BrowserRouter>
    )
}

// <Route path="/" element={<TelaLogin />} />
// <Route path="/" element={<TelaCadastro />} />
// <Route path="/" element={<TelaRegistros />} />
// <Route path="/" element={<TelaNovaEntrada />} />
// <Route path="/" element={<TelaNovaSaida />} /> 
// <Route path="/" element={<TelaNovaSaida />} />
// <Route path="/" element={<TelaRegistro2? />} />