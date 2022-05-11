import { View, Text, Image, SafeAreaView, Button, TextInput, Switch, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { ExerciseTutorials} from "../constants/Exercise";
import {INTENSEWORKOUT} from "../constants/INTENSE";
import {lightWorkout} from "../constants/light";
import { useNavigation } from "@react-navigation/native";
import { MainHeader, MyStatusBar } from '../components';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import {Slider} from '@miblanchard/react-native-slider';
import logo from "../assets/logo.png";


const Workout = ({route, navigation}) => {
  const navigator = useNavigation();
  const [workout, setWorkout] = useState(ExerciseTutorials)
  const [index, setIndex] = useState(0)
  const [stop, setStop] = useState(false)
  const [height, setHeight] = useState("0")
  const [weight, setWeight] = useState("0")
  const [muscle, setMuscle] = useState(false)
  const [loseWeight, setLoseWeight] = useState(false)
  const [amount, setAmount] = useState(0)
  const [title, setTitle] = useState("unselected")

  function recommendation(){
    if(loseWeight === true && muscle === false){
      setWorkout(lightWorkout)
      setTitle("light Workout")
    } else if(loseWeight === false && muscle === true){
      setWorkout(ExerciseTutorials)
      setTitle("Standard Workout")
    } else if(loseWeight === true && muscle === true){
      setWorkout(INTENSEWORKOUT)
      setTitle("INTENSE WORKOUT")  
    }else{
      setTitle("you are using the incorrect application")
    }
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
        <Text style={styles.text} >1. Enter Height (cm)</Text>
        <TextInput style={styles.input} keyboardType={'phone-pad'} returnKeyType={'done'} onChangeText={setHeight} value={height}/>
        <Text style={styles.text} >2. Enter Weight (kg)</Text>
        <TextInput style={styles.input} keyboardType={'phone-pad'} returnKeyType={'done'} onChangeText={setWeight} value={weight}/>
        <Text style={styles.text} >3. Why do you want to exercise?</Text>
        
        <View style={{ flexDirection: 'row',alignItems: 'center', justifyContent:'center'}}>
            <Text style={styles.text} >Gain Muscle</Text>
            <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={muscle ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="white"
            onValueChange={setMuscle}
            value={muscle}
          />
        </View>
          <View style={{ flexDirection: 'row',alignItems: 'center', justifyContent:'center' }}>
        <Text style={styles.text} >Lose Weight</Text>
        <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={loseWeight ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={setLoseWeight}
        value={loseWeight}
      />
      </View>
      <Text style={styles.text} >4. Length of exercise per day</Text>
      <Slider
          value={amount}
          minimumTrackTintColor = {'red'}
          miximumTrackTintColor = {'white'}
          thumbTintColor = {'white'}
          onValueChange={value=> setAmount(value)}
          maximumValue = {20}
          minimumValue = {0}
          step = {1}
        />
                <Text style={styles.text} > {amount} Minutes a Day</Text>
                <View style={{zIndex: 0, alignItems: 'center', justifyContent:'center' }}><View style={styles.button} ><Button  onPress={()=>recommendation()} title={"My Workout Routine"} /></View></View>
              <View style={{zIndex: 0, alignItems: 'center', justifyContent:'center' }}>
                <Text style={styles.text} >Recomended workout: {title}</Text>
                { stop ? 
              <CountdownCircleTimer
              key={index}    
              isPlaying
              duration={workout[index].time}
              colors={['#004777', '#F7B801', '#A30000', '#A30000']}
              colorsTime={[7, 5, 2, 0]}
              onComplete={() => {
              if (index >= workout.length - 1){
                setIndex(0)
                setStop(!stop)
            } else {
                setIndex(index + 1)
              return { shouldRepeat: false, delay: 1.5 }
                  }
                }}
              >
                {({ remainingTime }) => <Text style={styles.text} >{remainingTime}{" Seconds"}{"\n"}{workout[index].name}</Text>}
              </CountdownCircleTimer> 
              :
             <View style={styles.button} ><Button onPress={()=> {setIndex(0) ; setStop(!stop)}} title={"Start"}/></View>}
              <View style={{ height: 300, backgroundColor: "rgb(18, 69, 89)" }}/>
              <View style={{ flex: 1, backgroundColor: "rgb(18, 69, 89)" }}/>
              </View>  
            </View>
          </SafeAreaView>
  )
}

export default Workout

const styles = StyleSheet.create({
  input: {
    color: "rgb(0,0,0)",
    backgroundColor: "rgb(174, 195, 176)",
    textAlign: 'center',
    margin: 12,
    borderWidth: 3,
    padding: 10,
  },
  text: {
    color: "rgb(255,255,255)",
    padding: 10,
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: "center",
  },
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
},
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 7,
    borderRadius: 20,
    elevation: 3,
    color: "rgb(255, 255, 255)",
    backgroundColor: "rgb(1, 22, 30)",
},
});