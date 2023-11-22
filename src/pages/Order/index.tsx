import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { useRoute, RouteProp } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import { globalStyles } from '../../styles'

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
            <View style={styles.header}>
                <Text style={styles.title}>Mesa: 5</Text>
                <TouchableOpacity onPress={() => alert('OK TEST')}>
                    <Feather name='trash-2' size={28} color={globalStyles['red']}/>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.input}>
                <Text style={{color: '#000'}}>Pizzas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.input}>
                <Text style={{color: '#000'}}>Pizza de calabresa</Text>
            </TouchableOpacity>

            <View style={styles.qtdContainer}>
                <Text style={styles.qtdText}>Quantidade</Text>
                <TextInput
                    style={[styles.input, {width: '60%', textAlign: 'center'}]}
                    placeholderTextColor='#000'
                    keyboardType='numeric'
                    value='1'
                />
            </View>

            <View style={styles.actions}>
                <TouchableOpacity style={styles.btnAdd}>
                    <Text style={styles.btnText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>avançar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalStyles['dark-900'],
        flex: 1,
        paddingVertical: '5%',
        paddingStart: '4%',
        paddingEnd: '4%'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginTop: 24,
        marginBottom: 12

    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: globalStyles['light-black'],
        marginRight: 18

    },
    input: {
        backgroundColor: globalStyles['dark-700'],
        padding: 10,
        borderRadius: 5,
        width: '100%',
        marginBottom: 12,
        justifyContent: 'center',
        paddingHorizontal: 8,
        fontSize: 20
    },
    qtdContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    qtdText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    actions: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    btnAdd: {
        backgroundColor: globalStyles['wine'],
        width: '20%',
        height: 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: globalStyles['dark-900']
    },
    btn: {
        backgroundColor: globalStyles['green'],
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: '75%'
    }
})

export default Order