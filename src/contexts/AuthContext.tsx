import { useState, createContext, ReactNode } from "react"

type AuthContextData = {
    user: UserProps
    isAuthenticated: boolean
    signIn: (credentials: SignInProps) => Promise<void>
}

type UserProps = {
    id: string
    name: string
    email: string
    token: string
}

type AuthProviderProps = {
    children: ReactNode
}

type SignInProps = {
    email: string
    password: string
}

export const AuthContext = createContext({} as AuthContextData)

const AuthProvider = ({children}: AuthProviderProps) => {
    const [user, setUser] = useState<UserProps>({
        id: '',
        name: '',
        email: '',
        token: ''
    })

    const signIn = async ({email, password}: SignInProps) => {
        console.log(email)
        console.log(password)

    }

    const isAuthenticated = !!user.name

    return(
        <AuthContext.Provider value={{user, isAuthenticated, signIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider