import { useContext } from 'react'
import { View, 
         Text, 
         SafeAreaView, 
         TextInput, 
         TouchableOpacity, 
         StyleSheet,
         Image 
        } from 'react-native'

import { AuthContext } from '../../contexts/AuthContext'
import { globalStyles } from '../../styles'

const Dashboard = () => {
    const { signOut } = useContext(AuthContext)

    return(
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/logo2.png')}
            />
            <Text style={styles.title}>novo pedido</Text>
            <TextInput
                style={styles.input}
                placeholder='número da mesa'
                keyboardType='numeric'
            />
            <TouchableOpacity style={styles.openTableBTN}>
                <Text style={styles.textBTN}>abrir mesa</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.signOutBTN}
                onPress={signOut}
            >
                <Text style={{color: '#fff', fontSize: 20}}>sair</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalStyles['dark-900'],
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        height: 50,
        width: '50%',
        marginTop: -70
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    input: {
        width: '90%',
        height: 60,
        backgroundColor: globalStyles['dark-700'],
        borderRadius: 5,
        paddingHorizontal: 10,
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: globalStyles['light-black'] 
    },
    openTableBTN: {
        backgroundColor: globalStyles['green'],
        width: '90%',
        height: 60,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBTN: {
        fontSize: 25,
        fontWeight: 'bold',
        color: globalStyles['dark-700']
    },
    signOutBTN: {
        backgroundColor: '#a82223',
        position: 'absolute',
        bottom: 20,
        height: 30,
        width: '30%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:  'center'
    }
})

export default Dashboard