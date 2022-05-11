import { View, Text, image } from 'react-native'
import React from 'react'
import { CurrentRenderContext, useNavigation } from '@react-navigation/native'
import { Audio, Video } from 'expo-av';


const ExerciseCards = ({data}) => {
    const navigation = useNavigation();
    const arr = {
       0:"../assets/pushup.mp4",
        1:"../assets/biceps.mp4"
    };
  return (
    <View style={{
        backgroundColor: "rgb(89, 131, 146)",
        borderRadius: 14,
        marginBottom: 34,
        margin: 15,
        padding: 5,  
        
    }}>
        <Text style={{
            color: "rgb(255,255,255)",
            fontWeight: 'bold',
            fontSize: 17,
            textAlign: "center",
        }}
        
        >{data.name}</Text>
        <View style={{ 
          width: "100%", 
          height: 250,
          marginBottom: 20, 
          }}>
        <Video
          source={data.Video}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode="cover"
          useNativeControls
          repeat
          style={{ 
              width: "100%", 
              height: 250, 
              borderTopLeftRadius: 14, 
              borderTopRightRadius: 14, 
            }}
        />
            <Text style={{
            backgroundColor: "rgb(89, 131, 146)",
            padding: 4,
            marginBottom: 20,
            fontWeight: 'bold',
            fontSize: 15,
            textAlign: "center",
            color: "rgb(255,255,255)",
            }}>{data.description}</Text>
        </View>
    </View>
  )
}

export default ExerciseCards