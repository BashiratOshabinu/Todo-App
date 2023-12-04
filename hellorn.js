import{useState} from 'react';
import { StyleSheet, Text, View, StatusBar, Platform, SafeAreaView, Image, ImageBackground, ScrollView, TextInput } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Hello React Native</Text>
          <Text>Todo App</Text>
          {/* <Image source={require("./assets/icon.png")} style={{ width: "100%", height: 380 }}/>*/}
          { <Image source={{ uri: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }} style={{ width: "100%", height: 350 }} /> }
          <ImageBackground source={{ uri:"https://images.pexels.com/photos/819851/pexels-photo-819851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}} style={styles.bg} borderRadius={20}>
            <Text style={{ fontSize:20, fontWeight: 'bold', textAlign: "center" }}>Welcome to the world of Mobile Development</Text>
            <TextInput
            placeholder='Enter your name'
            style={{borderWidth: 1, padding: 10, borderRadius: 10, fontSize: 16 }}
            placeholderTextColor={"black"}/>

          </ImageBackground>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: Platform.OS == "android" ? StatusBar.currentHeight : null,
    backgroundColor: "#ffffff",
  },
  header: {
    color: "green",
    fontSize: 25,
    borderWidth: 1,
    borderColor: "green",
    padding: 5,
    width: "100%",
    borderRadius: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  bg:{
    width: "100%",
    height: 580,
    marginTop: 20,
    justifyContent: "center",
  }
});
