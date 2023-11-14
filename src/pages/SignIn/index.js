import { useState, useContext } from 'react';
import { View,
         Text,
         StyleSheet,
         Image,
         TextInput,
         TouchableOpacity 
        } from 'react-native'
import { Feather } from '@expo/vector-icons';

import { AuthContext } from '../../contexts/AuthContext';
import { globalStyles } from '../../styles'

const SignIn = () => {
    const { signIn } = useContext(AuthContext)

    const [secure, setSecure] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const showSecure = () => {
        return setSecure(!secure)
    }

    const handleLogin = async () => {
        if(email === '' || password === '') return 
        await signIn({email, password})

        setEmail('')
        setPassword('')
    }



    return(
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/logo2.png')}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='digite seu email'
                    autoCapitalize='none'
                    value={email}
                    onChangeText={setEmail}
                />
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={[styles.input, {width: '85%'}]}
                        placeholder='digite sua senha'
                        autoCapitalize='none'
                        secureTextEntry={secure}
                        value={password}
                        onChangeText={setPassword}
                    />
                    {secure ? (
                        <TouchableOpacity style={styles.secureView}
                        onPress={showSecure}
                        >
                            <Feather name="eye-off" size={30} color="black" />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity 
                            style={styles.secureView}
                            onPress={showSecure}
                        >
                            <Feather name="eye" size={30} color="black" />
                        </TouchableOpacity>
                    )}
                </View>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={handleLogin}
                >
                    <Text style={styles.buttonText}>acessar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalStyles['dark-900'],
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        height: 110,
        marginBottom: 18
    },
    inputContainer: {
        //backgroundColor: 'green',
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 32,
        paddingHorizontal: 14
    },
    input: {
        width: '95%',
        height: 40,
        backgroundColor: globalStyles['dark-700'],
        marginBottom: 12,
        borderRadius: 4,
        paddingHorizontal: 8,
        color: globalStyles['light-black']
    },
    passwordContainer: {
        //backgroundColor: 'pink',
        width: '95%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    secureView: {
        //backgroundColor: globalStyles['dark-900'],
        marginLeft: 5
    },
    button: {
        backgroundColor: globalStyles['wine'],
        height: 40,
        width: '95%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: globalStyles['white'],
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default SignIn