import { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { AuthContext } from '../../contexts/AuthContext'
import { globalStyles } from '../../styles'

const Dashboard = () => {
    const { signOut } = useContext(AuthContext)

    return(
        <View>
            <Text>Dashboard</Text>
            <TouchableOpacity
                style={{
                    backgroundColor: globalStyles['red'],
                    height: 30,
                    width: '50%',
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf:  'center'
                }}
                onPress={signOut}
            >
                <Text style={{color: '#fff', fontSize: 20}}>sair</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Dashboard