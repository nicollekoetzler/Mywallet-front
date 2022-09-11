import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function TelaLogin(){
    return(
        <Container>

            <h1>MyWallet</h1>

            <form>
                <Input>
                    <input type="email" placeholder="E-mail" />
                </Input>
                <Input>
                    <input type="password" placeholder="Senha" />
                </Input>
                <Button>
                    <button>Entrar</button>
                </Button>
            </form>

            <p>Não possui uma conta? Cadastre-se</p>

        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #A300BD;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

p {
    color: white;
    font-size: 14px;
    text-decoration-line: none;
    font-weight: 700;
    cursor: pointer;
}

h1 {
    margin-bottom: 24px;
    font-family: 'Saira Stencil One';
    font-size: 40px;
}
`

const Input = styled.div`

input {
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    width: 326px;
    height: 58px;
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    margin: 6px 0;
    border-color: white;
    font-size: 14px;
    padding: 14px;
}

input:focus {
    outline: none !important;
}
`

const Button = styled.div`

button {
    width: 326px;
    height: 46px;
    background: #A328D6;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 20.976px;
    font-style: normal;
    font-weight: 700;
    margin: 20px 0;
    font-size: 20px;
}
`