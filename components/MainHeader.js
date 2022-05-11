import { View, Text, TextInput, Image, assets } from 'react-native'
import {React, useState} from 'react'
import logo from "../assets/logo.png";
import { Button } from './myButton';
import { useNavigation } from "@react-navigation/native";
import loupe from "../assets/loupe.png";
import { NavigationContainer } from '@react-navigation/native';


const MainHeader = ({onSearch}) => {
    const navigator = useNavigation();
  return (
    <View style={{
        backgroundColor: "rgb(18, 69, 89)",
        padding: 14,
    }}>
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
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
            <View
            style={{
                marginVertical: 14,
            }}
            >
                <Text 
                style={{fontSize:14, fontWeight: 'bold', color: "rgb(255, 255, 255)", justifyContent: 'center', textAlign: 'center', }} 
                >
                    Ready for the workout of your life!
                </Text>
            </View>
            <View 
                style={{
                    backgroundColor: "rgb(89, 131, 146)",
                    flexDirection:'row',
                    borderRadius: 14
                }}
            >
                <Image 
                    source={loupe}
                    resizeMode="contain"
                    style={{
                        height:30, 
                        width: 30,
                        marginLeft: 10,
                        paddingLeft: 5,
                    }}                  
                />
                <TextInput 
                    placeholder="Exercise's"
                    style={{
                        color: "rgb(255, 255, 255)",
                        flex: 1
                    }}
                    onChangeText={onSearch}
                />
            </View>
    </View>
  )
}

export default MainHeader