
import { StyleSheet, Text, View, StatusBar, Platform, SafeAreaView, Image, ImageBackground, ScrollView, TextInput } from 'react-native';

export default function App() {
  return (
  
         
         <ImageBackground source={{ uri: "https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=800"}}style={styles.container} >
         <ScrollView>
                      <Text style={{fontSize: 50, color: 'white', fontWeight: 'bold', textAlign: "center" }}>Bee Travels</Text>
                      <Text style={{fontSize: 20, fontWeight: 'bold', fontStyle: 'italic', textAlign: 'center',backgroundColor: 'orange', }}>Explore the world</Text>
                      <View style={{backgroundColor: "white", height: 600, width: "100%", paddingTop: 50, alignItems: 'center', borderRadius: 20, marginTop: 20,  }}>
                      <Text style={{fontSize: 40, fontWeight: 'bold', textAlign: "center", marginBottom: 20 }}>Signup</Text>
                      <TextInput
                       placeholder='FullName'
                       style={{borderWidth: 2, padding: 10, borderRadius: 15, fontSize: 20, backgroundColor: 'orange', width: 250, marginBottom:20, alignItems: 'center'  }}
                       placeholderTextColor={"black"}/>
                      <TextInput
                       placeholder='Email address'
                       style={{borderWidth: 2, padding: 10, borderRadius: 15, fontSize: 20, backgroundColor: 'orange', width: 250, marginBottom:20, alignItems: 'center'  }}
                       placeholderTextColor={"black"}/>
                      <TextInput
                       placeholder='Phone Number'
                       style={{borderWidth: 2, padding: 10, borderRadius: 15, fontSize: 20, backgroundColor: 'orange', width: 250, marginBottom:20, alignItems: 'center' }}
                       placeholderTextColor={"black"}/>
                      <TextInput
                       placeholder='Identity card'
                       style={{borderWidth: 2, padding: 10, borderRadius: 15, fontSize: 20, backgroundColor: 'orange', width: 250, marginBottom:20, alignItems: 'center'  }}
                       placeholderTextColor={"black"}/>
                      <TextInput
                       placeholder='Password'
                       style={{borderWidth: 2, padding: 10, borderRadius: 15, fontSize: 20, backgroundColor: 'orange', width: 250, marginBottom:20, alignItems: 'center'  }}
                       placeholderTextColor={"black"}/>
                      
                      <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', textAlign: "center", marginBottom: 20, backgroundColor: 'black'}}>Submit</Text>

                      </View>
                      </ScrollView>   
          
          </ImageBackground>
                       
          
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    margin: Platform.OS == "android" ? StatusBar.currentHeight : null,
   
    
  },
});
