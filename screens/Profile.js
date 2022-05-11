import { View, Text, Image, SafeAreaView, Button, TextInput, Switch, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import { ExerciseTutorials} from "../constants/Exercise";
import {INTENSEWORKOUT} from "../constants/INTENSE";
import {lightWorkout} from "../constants/light";
import { useNavigation } from "@react-navigation/native";
import { MainHeader, MyStatusBar } from '../components';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import {Slider} from '@miblanchard/react-native-slider';
import { Entypo } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logo from "../assets/logo.png";
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const Profile = () => {
  const [name, setName] = useState(null)
  const [weight, setWeight] = useState(null)
  const [height, setHeight] = useState(null)
  const [weight1, setWeight1] = useState(null)
  const [weight2, setWeight2] = useState(null)
  const [weight3, setWeight3] = useState(null)
  const [weight4, setWeight4] = useState(null)
  const [load, setLoad] = useState(false)

  useEffect(() => {
    if(name === null){
      getData('name')
      getWeight('weight')
      getHeight('height')
      getWeight1('weight1')
      getWeight2('weight2')
      getWeight3('weight3')
      getWeight4('weight4')
    }else {
      setLoad(true)
    }
  });
  function save(){
    storeData('name', name)
    storeData('weight', weight)
    storeData('height', height)
    storeData('weight1', weight1)
    storeData('weight2', weight2)
    storeData('weight3', weight3)
    storeData('weight4', weight4)


  }

  const storeData = async (key,value) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      // saving error
    }
  }

const getData = async (key) => {
  try {const value = await AsyncStorage.getItem(key); if(value !== null) {setName(value)}} catch(e) {}
}
const getWeight = async (key) => {
  try {const value = await AsyncStorage.getItem(key); if(value !== null) {setWeight(value)}} catch(e) {}
}
const getHeight = async (key) => {
  try {const value = await AsyncStorage.getItem(key); if(value !== null) {setHeight(value)}} catch(e) {}
}
const getWeight1 = async (key) => {
  try {const value = await AsyncStorage.getItem(key); if(value !== null) {setWeight1(value)}} catch(e) {}
}
const getWeight2 = async (key) => {
  try {const value = await AsyncStorage.getItem(key); if(value !== null) {setWeight2(value)}} catch(e) {}
}
const getWeight3 = async (key) => {
  try {const value = await AsyncStorage.getItem(key); if(value !== null) {setWeight3(value)}} catch(e) {}
}
const getWeight4 = async (key) => {
  try {const value = await AsyncStorage.getItem(key); if(value !== null) {setWeight4(value)}} catch(e) {}
}
  return (
<SafeAreaView style={{ flex: 1, backgroundColor: "rgb(18, 69, 89)" }}>
      <MyStatusBar background={"rgb(18, 69, 89)"}></MyStatusBar>
      <View style={{flex: 1 }}>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <Image 
            source={logo}
            resizeMode="contain"
            style={{
                height:50,
                width:70
            }}
             />
            <Text  style={{fontSize:30, fontWeight: 'bold', color: "black", textAlign: 'left'}}>PowerPull</Text>
        </View>
          <Text  style={{fontSize:30, fontWeight: 'bold', color: "white", textAlign: 'left', marginLeft: 20 }}>Profile</Text>
          <View style={styles.row} ><Text style={styles.text} >Your name:</Text>{load !== false ? <TextInput style={styles.input} onChangeText={setName} value={name} /> :<Text>Loading</Text> }</View>
          <View style={styles.row} ><Text style={styles.text} >Current Weight:</Text>{load !== false ? <TextInput style={styles.input} onChangeText={setWeight} value={weight} /> :<Text>Loading</Text> }</View>
          <View style={styles.row} ><Text style={styles.text} >Desired Weight:</Text>{load !== false ? <TextInput style={styles.input} onChangeText={setHeight} value={height} /> : <Text>Loading</Text> }</View> 
          
        
        <View style={styles.met}>
        <Text style={styles.text} >Week 1 Weight:</Text>{load !== false ? <TextInput style={styles.input} onChangeText={setWeight1} value={weight1} /> : null }
        <Text style={styles.text} >Week 2 Weight:</Text>{load !== false ? <TextInput style={styles.input} onChangeText={setWeight2} value={weight2} /> : null } 
        <Text style={styles.text} >Week 3 Weight:</Text>{load !== false ? <TextInput style={styles.input} onChangeText={setWeight3} value={weight3} /> : null } 
        <Text style={styles.text} >Week 4 Weight:</Text>{load !== false ? <TextInput style={styles.input} onChangeText={setWeight4} value={weight4} /> : null } 
        <View style={styles.Button} ><Button  onPress={()=> save()} title={"Save"}/></View>
         </View>
         </View>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 100,
    color: "rgb(255,255,255)",
    backgroundColor: "rgb(89, 131, 146)",
    borderRadius: 10,
    fontSize: 20
  },
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
},
text: {
  color: "rgb(255,255,255)",
  padding: 10,
  fontWeight: 'bold',
  fontSize: 17,
  textAlign: "center",
},
row:{
  flexDirection: 'row',
  alignItems: 'center', 
  justifyContent:'center'
},
met:{
  alignItems: 'center', 
  justifyContent:'center'
},
Button: {
  elevation: 8,
  backgroundColor: "rgb(255,255,255)",
  borderRadius: 10,
  paddingVertical: 15,
  paddingHorizontal: 12,
  marginTop: 10
},
});