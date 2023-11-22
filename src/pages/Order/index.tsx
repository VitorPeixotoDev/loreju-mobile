import { useState, useEffect } from 'react'
import { View,
         Text,
         StyleSheet,
         TouchableOpacity,
         TextInput,
         Modal } from 'react-native'
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import { api } from '../../services/api'
import { globalStyles } from '../../styles'
import ModalPicker from '../../components/ModalPicker'

type RouterDetaiParams = {
    Order: {
        number: number | string
        order_id: string
    }
}

type OrderRouteProps = RouteProp<RouterDetaiParams, 'Order'>

export type CategoryProps = {
    id: string
    name: string
}

type ProductsProps = {
    id: string
    name: string
}

const Order = () => {
    const [category, setCategory] = useState<CategoryProps[] | []>([])
    const [categorySelected, setCategorySelected] = useState<CategoryProps | undefined>()
    const [amount, setAmount] = useState('1')
    const [products, setProducts] = useState<ProductsProps[] | []>([])
    const [productSelected, setProductsSelected] = useState<ProductsProps | undefined>()
    const [modalCategoryViseble, setModalCategoryViseble] = useState(false)
    const [modalProductViseble, setModalProductViseble] = useState(false)

    useEffect(() => {
        const loadInfo = async () => {
            const response = await api.get('/category')
            setCategory(response.data)
            setCategorySelected(response.data[0])
        }

        loadInfo()
    }, [])

    useEffect(() => {
        const loadProducts = async () => {
            const response = await api.get('/category/product', {
                params: {
                    category_id: categorySelected?.id
                }
            })
            
            setProducts(response.data)
            setProductsSelected(response.data[0])
        }

        loadProducts()
    }, [categorySelected])

    const route = useRoute<OrderRouteProps>()
    const navigation = useNavigation()

    const handleChangeCategory = (item: CategoryProps) => {
        setCategorySelected(item)
    }

    const handleChangeProduct = (item: ProductsProps) => {
        setProductsSelected(item)
    }

    const handleCloseOrder = async () => {
        try {
            await api.delete('/order', {
                params: {
                    order_id: route.params?.order_id
                }
            })
            navigation.goBack()
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Mesa: {route.params.number}</Text>
                <TouchableOpacity onPress={handleCloseOrder}>
                    <Feather name='trash-2' size={28} color={globalStyles['red']}/>
                </TouchableOpacity>
            </View>

            {category.length !== 0 && (
                <TouchableOpacity 
                    style={styles.input}
                    onPress={() => setModalCategoryViseble(true)}
                >
                    <Text style={{color: '#000'}}>
                        {categorySelected?.name}
                    </Text>
                </TouchableOpacity>
            )}

            {products.length !== 0 && (
                <TouchableOpacity 
                    style={styles.input}
                    onPress={() => setModalProductViseble(true)}
                >
                    <Text style={{color: '#000'}}>{productSelected?.name}</Text>
                </TouchableOpacity>
            )}



            <View style={styles.qtdContainer}>
                <Text style={styles.qtdText}>Quantidade</Text>
                <TextInput
                    style={[styles.input, {width: '60%', textAlign: 'center'}]}
                    placeholderTextColor='#000'
                    keyboardType='numeric'
                    value={amount}
                    onChangeText={setAmount}
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

            <Modal
                transparent={true}
                visible={modalCategoryViseble}
                animationType='slide'
            >
                <ModalPicker
                    handleCloseModal={() => setModalCategoryViseble(false)}
                    options={category}
                    selectedItem={handleChangeCategory}
                />
            </Modal>

            <Modal
                transparent={true}
                visible={modalProductViseble}
                animationType='slide'
            >
                <ModalPicker
                    handleCloseModal={() => setModalProductViseble(false)}
                    options={products}
                    selectedItem={handleChangeProduct}
                />
            </Modal>
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