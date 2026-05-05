import { createContext, useContext, useState} from "react"
import { type AuthUser } from "../types/auth"


// I define what the context holds

type AuthContextType = {
    user: AuthUser | null,
    isLoggedIn: boolean,
    isLoading: boolean,
    login: (user: AuthUser,token: string) => void,
    logout: () => void
}

// Create the context (empty box)
const AuthContext = createContext<AuthContextType | null>(null)



