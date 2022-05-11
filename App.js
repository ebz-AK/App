import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, TextInput, Image, assets, TouchableOpacity } from 'react-native'
import { NavigationContainer, DefaultTheme, useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Workout from './screens/Workouts'
import Nav from "./screens/navBar";


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}
      initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Workout" component={Workout} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
      <Nav  />
    </NavigationContainer>
  );
}

export default App;