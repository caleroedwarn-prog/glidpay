import {type LoginRequest, type LoginResponse, type RegisterResponse, type RegisterRequest } from "../types/auth";

const BASE_URL = "https://localhost:8000"

export const loginUser = async (form: LoginRequest): Promise<LoginResponse> => {
    const response = await fetch(`${BASE_URL}/Auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
    })
    if(!response.ok){
        throw new Error("Invalid username or password")
    }
    const data = await response.json()
    return data
}

export const RegisterUser = async(form: RegisterRequest): Promise<RegisterResponse> => {
    const response = await fetch(`${BASE_URL}/Auth/login`, {
        method: "POST", 
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify(form)
    })

    const data = await response.json()
    return data
}