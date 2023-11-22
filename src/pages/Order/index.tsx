import { View, Text, StyleSheet } from 'react-native'
import { useRoute, RouteProp } from '@react-navigation/native'

type RouterDetaiParams = {
    Order: {
        number: number | string
        order_id: string
    }
}

type OrderRouteProps = RouteProp<RouterDetaiParams, 'Order'>

const Order = () => {
    const route = useRoute<OrderRouteProps>()

    return(
        <View style={styles.container}>
            <Text>Tela de Order</Text>
            <Text>{route.params.number}</Text>
            <Text>{route.params.order_id}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {}
})

export default Order