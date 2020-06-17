import React, { useState } from 'react';
//React Native Components
import { View, StyleSheet, Text, FlatList } from 'react-native'
import Header from './Components/Header';
import ListItem from './Components/ListItem'
import AddItem from './Components/AddItem'
import { v4 as uuidv4 } from 'uuid'

//Different keywords/events used in React-Native
//onClick => onPress
//onChange => onChangeText


const App = () => {

    const [items, setItems] = useState([
      {id: uuidv4(), text: 'milk'},
      {id: uuidv4(), text: 'oranges'},
      {id: uuidv4(), text: 'bread'}
    ])

    const deleteItem = (id) => {
      setItems(prevItems => {
        return prevItems.filter(item => item.id !== id)
      })
    }

    const addItem = (text) => {
      setItems(prevItems => {
        return [...prevItems, {id: uuidv4, text}]
      })
    }


  return(
    <View style={styles.container}>
      <Header title='Shopping List' />
      <AddItem addItem={addItem}/>
      <FlatList data={items} renderItem={({item}) => <ListItem deleteItem={deleteItem} item={item} />}/>
    </View>
  )
}


//Styles
const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop: 60
  }

})
export default App;