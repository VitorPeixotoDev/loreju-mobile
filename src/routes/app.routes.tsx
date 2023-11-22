import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Dashboard from '../pages/Dashboard'
import Order from '../pages/Order'

export type StackParamsList = {
    Dashboard: undefined
    Order: {
        number: number | string
        order_id: string
    }
}

const { Navigator, Screen } = createNativeStackNavigator<StackParamsList>()

const AppRoutes = () => {
    return(
        <Navigator initialRouteName='Order'>
            <Screen 
                name='Dashboard' 
                component={Dashboard}
                options={{
                    headerShown: false
                }}
            />
            <Screen
                name='Order'
                component={Order}
                options={{
                    headerShown: false
                }}
            />
        </Navigator>
    )
}

export default AppRoutes