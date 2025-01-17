import { 
    useState, 
    createContext, 
    ReactNode,
    useEffect
    } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

import { api } from "../services/api"

type AuthContextData = {
    user: UserProps
    isAuthenticated: boolean
    loadingAuth: boolean
    loading: boolean
    signIn: (credentials: SignInProps) => Promise<void>
    signOut: () => Promise<void>
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

    const [loadingAuth, setLoadingAuth] = useState(false)
    const [loading, setLoading] = useState(true)
    const isAuthenticated = !!user.name

    const signIn = async ({email, password}: SignInProps) => {
        setLoadingAuth(true)


        try {
            const response = await api.post('/session', {
                email,
                password
            })
            //console.log(response.data)
            const { id, name, token } = response.data
            const data = {
                ...response.data
            }

            await AsyncStorage.setItem('@loreju', JSON.stringify(data))
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            setUser({
                id,
                name,
                email,
                token
            })

            setLoadingAuth(false)
        } catch (error) {
            console.log('falha na tentativa de login: ', error)
            setLoadingAuth(false)
        }

    }

    useEffect(() => {
        const getUser = async () => {
            const userInfo = await AsyncStorage.getItem('@loreju')
            let hasUser: UserProps = JSON.parse(userInfo || '{}')
            if(Object.keys(hasUser).length > 0){
                api.defaults.headers.common['Authorization'] = `Bearer ${hasUser.token}`

                setUser({
                    id: hasUser.id,
                    name: hasUser.name,
                    email: hasUser.email,
                    token: hasUser.token
                })
            }
            setLoading(false)
        }

        getUser()
    }, [])

    const signOut = async () => {
        await AsyncStorage
            .clear()
            .then(() => {
                setUser({
                    id: '',
                    name: '',
                    email: '',
                    token: ''
                })
            })
    }

    return(
        <AuthContext.Provider value={{
            user, 
            isAuthenticated, 
            loadingAuth, 
            loading, 
            signIn, 
            signOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider