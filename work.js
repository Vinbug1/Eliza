import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState, useEffect} from 'react'

const work = () => {
    const [count, setCount ] = useState(0);

  return (
    <View>
      <View>
        <TouchableOpacity onPress={() => setCount(count + 1) }>Increment</TouchableOpacity>
      </View>
      <View>
        <Text>{count}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => setCount(count  - 1) }>Decrement</TouchableOpacity>
      </View>
    </View>
  )
}

export default work

const styles = StyleSheet.create({})