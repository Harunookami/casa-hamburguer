import { useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router";
import Button from "../components/Button";

const Login = () => {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(email)
        console.log(senha)
    }

    return (
        <form className="flex justify-center bg-[#161410] h-screen items-center" onSubmit={handleSubmit}>
            <div className=" gap-2 flex-col flex items-center justify-center">
                <Link to="/">
                    <img src="./logo.png" alt="" className="mb-4" />
                </Link>
                <Input placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input placeholder="Senha"
                    onChange={(e) => setSenha(e.target.value)}
                    type="password"
                />

                <Button title="Login" variant="default" />
                <Link to="/register" className="w-full">
                <Button title="Não tenho uma conta" variant="outline"/>
                </Link>

            </div>
        </form>
    )
}

export default Login; 