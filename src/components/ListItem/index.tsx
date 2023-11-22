import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { globalStyles } from '../../styles'

interface ItemProps {
    data: {
        id: string
        product_id: string
        name: string
        amount: string | number
    }
}

const ListItem = ({data}: ItemProps) => {
    return(
        <View style={styles.container}>
            <Text style={styles.item}>{data?.amount} - {data?.name}</Text>
            <TouchableOpacity>
                <Feather name='trash-2' color={globalStyles['red']} size={24}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalStyles['dark-900'],
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 12,
        padding: 12,
        borderRadius: 5,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: globalStyles['light-black']
    },
    item: {
        color: globalStyles['light-black'],
        fontSize: 20
    }
})

export default ListItem