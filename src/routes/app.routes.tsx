import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Dashboard from '../pages/Dashboard'

const { Navigator, Screen } = createNativeStackNavigator()

const AppRoutes = () => {
    return(
        <Navigator>
            <Screen name='Dashboard' component={Dashboard}/>
        </Navigator>
    )
}

export default AppRoutes