import { useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router";
import Button from "../components/Button";

const Register = () => {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmarSenha, setConfirmarSenha] = useState("")
    const [cep, setCep] = useState("")


    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(nome, email, senha, confirmarSenha, cep)

    }

    return (
        <form className="flex justify-center bg-[#161410] h-screen items-center" onSubmit={handleSubmit}>
            <div className=" gap-2 flex-col flex items-center justify-center">
                <Link to="/">
                    <img src="./logo.png" alt="" className="mb-4" />
                </Link>

                <Input placeholder="Nome"
                    onChange={(e) => setNome(e.target.value)}
                />
                <Input placeholder="Email"
                    type="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input placeholder="Senha"
                    type="password"
                    onChange={(e) => setSenha(e.target.value)}
                />
                <Input placeholder="Confirme sua Senha"
                    type="password"
                    onChange={(e) => setConfirmarSenha(e.target.value)}
                />
                <Input placeholder="CEP"
                    type="text"
                    onChange={(e) => setCep(e.target.value)}
                />
                <Button title="Criar conta" />
                <Link to="/login" className="w-full">
                    <Button title="Já tenho uma conta " variant="outline" />
                </Link>

            </div>
        </form>
    )
}

export default Register; 