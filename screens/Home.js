import { react, useState } from 'react';
import { View, SafeAreaView, FlatList, Text} from 'react-native'
import { ExerciseTutorials} from "../constants/Exercise";
import { MainHeader, MyStatusBar, ExerciseCards } from '../components';

const Home = () => {
  const [exerciseTitle, setexerciseTitle] = useState(ExerciseTutorials)
  const searchBar = (value) => {
    if(value.length === 0){ setexerciseTitle(ExerciseTutorials)};

    const newData = ExerciseTutorials.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));

    if(newData.length === 0){
      setexerciseTitle(ExerciseTutorials);
    } else{
      setexerciseTitle(newData)
    }
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "rgb(18, 69, 89)" }}>
      <MyStatusBar background={"rgb(18, 69, 89)"}></MyStatusBar>
      <View style={{flex: 1 }}>
        <View style={{zIndex: 0 }}>
          <FlatList 
            data={exerciseTitle}
            renderItem={({ item }) => <ExerciseCards data={item}/> }
            keyExtractor={(item) => item.id}
            showsVerticalScrollindicator={true}
            ListHeaderComponent={< MainHeader onSearch={searchBar} />} 
          />
      </View>
      </View>
    </SafeAreaView>
  )
}

export default Home