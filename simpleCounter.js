import { StyleSheet, Text, View, To } from 'react-native'
import React,{useState, useEffect} from 'react'

const simpleCounter = () => {
    const [time, setTime] = useState(60);
    const [isRunning, setRunning] = useState();

    useEffect(() => {
        let timer;
        if (isRunning && timer > 0) {
            timer = setInterval(() =>{
                setTime(prevTime => prevTime - 1)
            }, 1000);
        } else if (time === 0 ) {
            setRunning(false);
        };
        return () => clearInterval(timer);
    },[isRunning,time]);

    const startTime = () => setRunning(true);
    const stopTime = () => setRunning(false);
    const resetTime = () => {
        setRunning(false);
        setTime(60);
    }

  return (
    <View>
      <Text>simpleCounter</Text>
      <View>
        <Text>{Counter}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => startTime}>StartTime</TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => stopTime}>StopTime</TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => resetTime}>ResetTime</TouchableOpacity>
      </View>
    </View>
  )
}

export default simpleCounter

const styles = StyleSheet.create({})