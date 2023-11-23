import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Dashboard from '../pages/Dashboard'
import Order from '../pages/Order'
import FinishOrder from '../pages/FinishOrder'
import { globalStyles } from '../styles'

export type StackParamsList = {
    Dashboard: undefined
    Order: {
        number: number | string
        order_id: string
    }
    FinishOrder: undefined
}

const { Navigator, Screen } = createNativeStackNavigator<StackParamsList>()

const AppRoutes = () => {
    return(
        <Navigator initialRouteName='FinishOrder'>
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

            <Screen
                name='FinishOrder'
                component={FinishOrder}
                options={{
                    title: 'Finalizando',
                    headerStyle: {
                        backgroundColor: globalStyles['dark-900']
                    },
                    headerTintColor: globalStyles['light-black']
                }}
            />
        </Navigator>
    )
}

export default AppRoutes