import { useContext } from 'react'
import { View, ActivityIndicator } from 'react-native'

import { AuthContext } from '../contexts/AuthContext'
import AuthRoutes from "./auth.routes"
import AppRoutes from "./app.routes"

const Routes = () => {
    const { isAuthenticated, loading } = useContext(AuthContext)


    if(loading){
        return(
            <View style={{
                backgroundColor: '#FAF0E6',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ActivityIndicator 
                    color={'#722f37'}
                    size={100}
                />
            </View>
        )
    }else{
        return(
            isAuthenticated 
            ? <AppRoutes/>
            : <AuthRoutes/>
        )
    }
}

export default Routes