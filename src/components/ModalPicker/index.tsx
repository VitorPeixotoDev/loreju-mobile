import { View,
         Text,
         StyleSheet,
         TouchableOpacity,
         Dimensions,
         ScrollView } from 'react-native'

import { CategoryProps } from '../../pages/Order'
import { globalStyles } from '../../styles'


interface ModalPickerProps {
    options: CategoryProps[]
    handleCloseModal: () => void
    selectedItem: (item: CategoryProps) => void
}

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

const ModalPicker = ({
    options, handleCloseModal, selectedItem
}: ModalPickerProps) => {

    const onPressItem = (item: CategoryProps) => {
        //console.log(item)
        selectedItem(item)
        handleCloseModal()
    }

    const option = options.map((item, index) => (
        <TouchableOpacity 
            style={styles.option}
            onPress={() => onPressItem(item)}
            key={index}
        >
            <Text style={styles.item}>{item?.name}</Text>
        </TouchableOpacity>
    ))

    return(
        <TouchableOpacity 
            style={styles.container}
            onPress={handleCloseModal}    
        >
            <View style={styles.content}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    {option}
                </ScrollView>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        width: WIDTH - 20,
        height: HEIGHT / 2,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#8a8a8a',
        borderRadius: 5
    },
    option: {
        alignItems: 'flex-start',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: '#8a8a8a'
    },
    item: {
        margin: 18,
        fontSize: 14,
        fontWeight: 'bold',
        color: globalStyles['light-black']
    }
})

export default ModalPicker