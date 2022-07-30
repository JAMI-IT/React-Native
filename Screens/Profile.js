import { View, Text, StyleSheet, Image, SafeAreaView, FlatList } from 'react-native'
import PROFILE from '../component/PROFILE';
import React from 'react'




export default function Profile() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Image
            style={{
              resizeMode: 'center',
              height: 200,
              width: 200,
              borderWidth: 2,
              borderColor: 'blue',
              borderRadius: 10,
            }}
            source={require('../assets/j1.png')}
          />
        </View>
      </View>
      <Text style={styles.marg}>Name</Text>
      <Text style={[styles.text,styles.marg]}>Abdul Rehman Jami</Text>
      <FlatList
        horizontal={true}
        style={{ padding: 20 }}
        data={status}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <PROFILE status={item.status} iconname={item.iconname} icontype={item.icontype} />}
      />
    </SafeAreaView>
  );
}

const status = [
  { status: 'Away', iconname: 'Away', icontype: 'Entypo' },
  { status: 'AtWork', iconname: 'Atwork', icontype: 'Entypo' },
  { status: 'Gaming', iconname: 'gaming', icontype: 'Entypo' },
  { status: 'Cricket', iconname: 'Cricket', icontype: 'Entypo' },
  { status: 'ball', iconname: 'ball', icontype: 'Entypo' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  text: {
    borderBottomWidth:1,
    borderColor: 'black',
    borderRadius: 20,
    padding: 10,
    width: '43%',
  },
  marg: {
    marginLeft: 200,
  },
});