import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { loginUser } from "../api/auth";
import { type LoginRequest } from "../types/auth";
function LoginPage(){
    
    const { login } = useAuth()
    const navigate = useNavigate()

    const [form, setForm] = useState<LoginRequest>({
        username: "",
        password: ""
    })

    const[error, setError] = useState("")
    const[isLoading, setIsLoading] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async () => {
        setIsLoading(true)
        try {
            const response = await loginUser(form)
            login(response.user, response.token)
            navigate("/dashboard")
        }catch{
            setError("invalid Username or Password")
        }finally{
            setIsLoading(false)
        }
    }
    return(
        <>
        <h1>Login</h1>
        <input title="username" name="username" onChange={handleChange} />
        <input title="password" name="password" onChange={handleChange} />

        <button onClick={handleSubmit}>
            {isLoading ? "Logging in.." : "Login"}
        </button>
        {error}
        </>
    )

}
export default LoginPage