import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, TextInput, Image, assets, TouchableOpacity } from 'react-native'
import { NavigationContainer, DefaultTheme, useNavigation } from "@react-navigation/native";
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';


const Nav = () => {
  const navigator = useNavigation();
  return (
          <View style={{flexDirection: 'row', backgroundColor: "rgb(89, 131, 146)", justifyContent:'space-evenly', height:80}}>
                <TouchableOpacity onPress={() => navigator.navigate('Workout')}><MaterialCommunityIcons style={{paddingTop:5}} name="arm-flex" size={40} color="white" /></TouchableOpacity>
                <TouchableOpacity onPress={() => navigator.navigate('Home')}><AntDesign  style={{paddingTop:5}} name="home" size={40} color="white" /></TouchableOpacity>
                <TouchableOpacity onPress={() => navigator.navigate('Profile')}><MaterialCommunityIcons style={{paddingTop:5}} name="face-recognition" size={40} color="white" /></TouchableOpacity>
            </View>
  );
}

export default Nav;