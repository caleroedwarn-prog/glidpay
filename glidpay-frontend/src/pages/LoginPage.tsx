import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { loginUser } from "../api/auth";
import { LoginRequest } from "../types/auth";
function LoginPage(){
    
    const { login } = useAuth()
    const navigate = useNavigate

}
export default Login