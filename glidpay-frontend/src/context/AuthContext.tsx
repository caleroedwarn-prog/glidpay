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

// Build the provider (fill the box)
export const AuthProvider = ({children}: { children: React.ReactNode}) => {

    const [user, setUser] = useState<AuthUser | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const login = (user: AuthUser, token: string) => {
        setUser(user)
        setIsLoggedIn(true)
        localStorage.removeItem("token")
    }

    const logout = () => {
        setUser(null)
        setIsLoggedIn(false)
        localStorage.removeItem("token")
    }

    return (
        <AuthContext.Provider value={{ user, isLoading, isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

// Build the hook (shortcut to read the Box)



