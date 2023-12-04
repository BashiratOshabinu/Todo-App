import { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Platform, SafeAreaView, Image, ImageBackground, ScrollView, TextInput, Button, TouchableOpacity, FlatList, ToastAndroid } from 'react-native';

export  function TodoList() {
  const [text, setText] = useState("this is a useState")
  const [list, setList] = useState([])
  // console.log(list);
  //setText("thiss")

  function AddItem() {
    setList((pre) => [...pre, { text: text, date: new Date().getTime() }])
    //ToastAndroid.show("Item has been added successfuly", ToastAndroid.SHORT)
    Alert.alert(
      "Add Item",
      "Item has been added succrssfully",
      [{ text: "Done", onPress: () => console.log("Btn tapped")}]
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={{ fontSize: 40, fontWeight: 'bold' }}>Todo List Display</Text>
        <TextInput
          placeholder='Enter your name'
          style={styles.input}
          placeholderTextColor={"black"}
          onChangeText={(inp) => { setText(inp) }
          }
        />
        <Text>{text}</Text>
        {/*<Button title='Add To List' />*/}
        <TouchableOpacity onPress={AddItem} style={{
          backgroundColor: "green",
          borderRadius: 40,
          padding: 10,
          alignItems: "center",
          marginTop: 10,
        }}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Add To List</Text>

        </TouchableOpacity>

        {/*{
            list.map(item=>{
              return <Text key={item.date}>{item.text}
              </Text>
            })
          }*/}
        <FlatList
          style={{ flex: 1, marginTop: 20 }}
          data={list}
          renderItem={({ item }) => {
            return(
            <View style={styles.renderView}>
            <Text>{item.text}</Text>
            <View style={styles.row}>
              <Text>28/11/23</Text>
            <TouchableOpacity style={styles.btn}>
              <Text style={{color:"white"}}>Delete</Text>
            </TouchableOpacity>
            </View>
            </View>)

          }}
          key={(item) => item.date}

        />

      </View>

    </SafeAreaView>
  )
} const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 33,
    margin: Platform.OS == "andriod" ? statusbar.currentHeight : null,
    backgroundColor: 'lightyellow',
  },
  header: {
    fontSize: 25,
    color: "green",
    textAlign: "center"
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
    marginTop: 20

  },
  renderView: {
    borderColor: "green",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 5

  },
  btn:{
    backgroundColor:"ed2929",
    padding: 4,
    borderRadius: 50,
    paddingHorizontal: 13

  },
  row:{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
  }
});
