import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export const Button = (props) => {
  return (
    <TouchableOpacity
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    }}
    onPress={ props.onP }
    >
        <Image source={profilePic}
            resizeMode="contain"
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 12,
              paddingHorizontal: 32,
              borderRadius: 4,
              elevation: 3,
              backgroundColor: 'black',
            }}
        />

    </TouchableOpacity>

  )
}

