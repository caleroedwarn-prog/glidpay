// Shape of what user sends to login
export type LoginRequest{
    username: string
    password: string
}

// Shape of what FastApi sends back
 export type LoginResponse{
    token: string
    token_type: string
 }

 // shape of the loggedIn user info

 export type AuthUser{
    username: string
    email: string
    phone: string
 }

// Shape of the login page state

export type LoginState{
    isLoading: boolean
    isLoggedIn: boolean
    error: string
}