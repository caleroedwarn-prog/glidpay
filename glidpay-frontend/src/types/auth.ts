// Shape of what user sends to login
export interface LoginRequest{
    username: string
    password: string
}

// Shape of what FastApi sends back
 export interface Authuser{
    token: string
    token_type: string
 }

