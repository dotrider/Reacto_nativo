import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const AddItem = ({addItem}) => {
    const [ text, setText ] = useState('')

    return (
        <View>
            <TextInput placeholder='Add Item...'
            style={styles.input} onChangeText={eValue => setText(eValue)}/>
            <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
                <Text style={styles.btnText}><Icon name='plus' size={20} /> Add Item</Text>
            </TouchableOpacity>
        </View>
    )
}
    const styles = StyleSheet.create({
        input:{
            height: 60,
            padding: 8,
            fontSize: 18
        },
        btnText: {
            color: 'green',
            fontSize: 20,
            textAlign: 'center'
        },
        btn: {
            padding: 15,
            backgroundColor: 'lightblue'
        }
      
      })

export default AddItem;