import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, } from 'react-native';

export function Position() {
  return(
    <SafeAreaView styles={styles.container}>
      <View style={styles.parent}>
       <View style={styles.child}></View>
       <View style={styles.child}></View>
       <View style={styles.child}></View>
       <View style={styles.child}></View>
    </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "blue",
    marginTop: Platform.OS == "android" ? StatusBar.currentHeight: null,
  },
  parent: {
    backgroundColor: "#65656584",
    width: "100%",
    height: 400,
    padding: 10,
    flexWrap: "wrap"
  },
  child: {
    backgroundColor: "red",
    width: 100,
    height: 100,
    margin: 3,
    //position: "absolute",
    //bottom: 0,
    //right: 0
  }
})