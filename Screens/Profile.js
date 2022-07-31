import { View, Text, StyleSheet, Image, SafeAreaView, FlatList,TouchableHighlight,Card  } from 'react-native'
import PROFILE from '../component/PROFILE';
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
const status = [
  {
    name: 'caretright',
    icon: <AntDesign name="caretright" size={24} color="white" />,
    color: 'orange',
  },
  {
    name: 'Game',
    icon: <Entypo name="game-controller" size={24} color="blue" />,
    color: 'blue',
  },
  {
    name: 'cricket',
    icon: <MaterialIcons name="sports-cricket" size={24} color="green" />,
    color:"green"
  },
  {
    name: 'award',
    icon: <FontAwesome5 name="award" size={24} color="black" />,
    color:"black"
  },
];


export default function Profile() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{
              resizeMode: 'center',
              height: 100,
              width: 100,
              margin: 10,
              borderRadius: 50,
            }}
            source={require('../assets/j1.png')}
          />
          <View
            style={{
              flexDirection: 'row',
              width: '80%',
              alignItems: 'center',
              // paddingRight: 50,
            }}
          >
            <View style={{ width: '70%' }}>
              <Text style={[styles.text]}>Edward Larry</Text>
              <Text style={{ color: 95, fontWeight: 'bold' }}>
                Senoir Designer
              </Text>
            </View>
            <AntDesign name="edit" size={20} color="gray" />
          </View>
        </View>
      </View>

      <View>
        <Text style={styles.stat}>My status</Text>
      </View>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{
            paddingTop:20,
          }}
          data={status}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <PROFILE name={item.name} status={item.icon} color={item.color} />
            )}
        />
      </View>
      <View style={styles.Dashboard}>
        <Text style={{ color: 95, fontWeight: 'bold' }}>Dashboradr</Text>
        <View style={styles.DView}>
          <View
            style={{
              backgroundColor: '#59bd7d',
              borderRadius: 40,
              marginTop: 5,
            }}
          >
            <View style={styles.icon}>
              <MaterialIcons name="payment" size={24} color="white" />
            </View>
          </View>
          <Text style={styles.DText}>Payment</Text>
        </View>
        <View style={styles.DView}>
          <View
            style={{
              backgroundColor: '#ffd237',
              borderRadius: 40,
              marginTop: 5,
            }}
          >
            <View style={styles.icon}>
              <Entypo name="beamed-note" size={24} color="white" />
            </View>
          </View>
          <Text style={styles.DText}>Music</Text>
        </View>
        <View style={styles.DView}>
          <View
            style={{
              backgroundColor: '#d8d9de',
              borderRadius: 40,
              marginTop: 5,
            }}
          >
            <View style={styles.icon}>
              <MaterialIcons name="privacy-tip" size={24} color="white" />
            </View>
          </View>
          <Text style={styles.DText}>Music</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    height: 100,
  },
  Dashboard: {
    flex: 0.3,
    padding: 6,
    marginHorizontal:10,
  },

  DView: {
    flexDirection: 'row',
    
  },
  DText: {
    fontSize: 18,
    padding: 12,
    alignItems: 'center',
    justifyContent:'center',
  },
  icon: {
    height: 42,
    width: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },

  stat: {
    color: 95,
    marginLeft: 20,
    marginBottom:-15,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  marg: {
    marginLeft: 130,
  },
});