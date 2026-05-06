import {type LoginRequest, type LoginResponse } from "../types/auth";

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