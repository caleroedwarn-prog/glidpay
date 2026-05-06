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
    
        

}
export default Login