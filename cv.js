// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar, Platform, SafeAreaView, ScrollView } from 'react-native';

export default function App() {
  console.log(Platform.OS);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView>
          <Text style={{ fontSize: 40, fontWeight: 'bold' }}>Oshabinu Bashirat Abiola</Text>
          <Text style={{ fontSize: 20, color: "green", fontWeight: 'bold' }}>Career Objective</Text>
          <Text>
            Hardworking, highly motivated professional eager to lend combined knowledge. Operates well in both individual and team capacities, leveraging seasoned workethic to quickly adapt to different processes and drive company objectives. Resourceful and results-driven with a passion for growth and efficiency to meet company needs and increase service value.
          </Text>
          <Text style={{ fontSize: 20, color: "green", fontWeight: 'bold' }}>Achievements</Text>
          <Text>1. Implementing major system with zero downtime and zero cost.</Text>
          <Text>2. Employee of the month for two consecutive months.</Text>
          <Text>3. Student of EarlyCode.</Text>
          <Text style={{ fontSize: 20, color: "green", fontWeight: 'bold' }}>Education</Text>
          <Text style={{ fontSize: 14, fontWeight: 'bold' }}>2019-2023 Bsc Computer Science   Al-Hikmah  University</Text>
          <Text>1. 1st Class Degree with Professional Placement</Text>
          <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Relevant Modules:</Text>
          <Text>1. Professional and Social Aspect of Computing(73%)</Text>
          <Text>2. Data Modeling and Database Systems(59%)</Text>
          <Text>Understanding Information Systems(93%)</Text>
          <Text>Information Security(67%)</Text>
          <Text style={{ fontSize: 14, fontWeight: 'bold' }}>2017-2019   BTEC National Diploma in IT  JABU</Text>
          <Text>1. Grade Achieved Triple Distinction</Text>
          <Text style={{ fontSize: 14, fontWeight: 'bold' }}>2007-2017  Golden Gate College</Text>
          <Text>8 GCSE at grades A -C.</Text>
          <Text style={{ fontSize: 20, color: 'green', fontWeight: 'bold' }}>Employment</Text>
          <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Jun 2018-present   IT Manager   Maplins</Text>
          <Text>1. Mentoring and Training new IT staffs.</Text>
          <Text>Researching, installing and configuring new computer systems.</Text>
          <Text>Ensuring that all relevant licensing laws are adhered to.</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'green' }}>Qualifications</Text>
          <Text>Excellent knowledge of variety of programming languages including
            java, C, Javascript and SQL.
            <Text>2. Strong trouble-shooting skills with software, hardware & network products.</Text>
            <Text>3. Expert in networking and switching configuration and technologies. </Text>
          </Text>
          <StatusBar style="auto" />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 33,
    margin: Platform.OS == "andriod" ? statusbar.currentHeight : null,
    backgroundColor: 'lightyellow',
    // alignItems: 'center',
    //justifyContent: 'center',
  },
  // boldText: {
  // fontWeight: 'bold'
  // }
});