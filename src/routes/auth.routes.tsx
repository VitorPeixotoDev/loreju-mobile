import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignIn from '../pages/SignIn'

const { Navigator, Screen } = createNativeStackNavigator()

const AuthRoutes = () => {
    return(
        <Navigator>
            <Screen 
                name='SignIn' 
                component={SignIn}
                options={{
                    headerShown: false
                }}
            />
        </Navigator>
    )
}

export default AuthRoutes