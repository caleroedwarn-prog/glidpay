// Shape of what user sends to login
export interface LoginRequest{
    username: string
    password: string
}

// Shape of what FastApi sends back
 export interface LoginResponse{
    token: string
    token_type: string
 }

 // shape of the loggedIn user info

 export interface AuthUser{
    username: string
    email: string
    phone: string
 }

// Shape