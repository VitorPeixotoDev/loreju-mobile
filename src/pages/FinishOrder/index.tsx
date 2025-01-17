import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import { globalStyles } from '../../styles'

type RouterDetaiParams = {
    FinishOrder: {
        number: string | number
        order_id: string
    }
}

type FinishOrderRouteProp = RouteProp<RouterDetaiParams, 'FinishOrder'>

const FinishOrder = () => {
    const route = useRoute<FinishOrderRouteProp>()

    const handleFinish = () => {
        alert('CLICOU')
    }

    return(
        <View style={styles.container}>
            <Text style={styles.alert}>Deseja finalizar o pedido?</Text>
            <Text style={styles.title}>Mesa {route.params?.number}</Text>

            <TouchableOpacity 
                style={styles.btn}
                onPress={handleFinish}
            >
                <Text style={styles.btnText}>Finalizar pedido</Text>
                <Feather name='shopping-cart' size={20} color={globalStyles['dark-900']}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalStyles['dark-900'],
        flex: 1,
        paddingVertical: '5%',
        paddingHorizontal: '4%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        backgroundColor: globalStyles['green'],
        flexDirection: 'row',
        width: '65%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    alert: {
        fontSize: 20,
        color: globalStyles['light-black'],
        fontWeight: 'bold',
        marginBottom: 12
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: globalStyles['wine'],
        marginBottom: 12
    },
    btnText: {
        color: globalStyles['dark-900'],
        marginRight: 20,
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default FinishOrder