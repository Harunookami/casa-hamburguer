import { Link } from "react-router";

const Home = () => {
    return (
        <div>
            <Link to="/Login">Login</Link>
            <Link to="/Register">Registrar</Link>
        </div>
    )

}

export default Home;