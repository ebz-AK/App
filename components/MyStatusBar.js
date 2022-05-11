import { StatusBar } from 'react-native'
import React from 'react'
import { useIsFocused } from '@react-navigation/core'

const MyStatusBar = (props) => {
    const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated={true} {...props} /> : null; //blends the top of the iphone with the background so users battery info and time are uninterupteded
}

export default MyStatusBar