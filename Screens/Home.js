import { View, Text, Touchable, TouchableOpacity ,StyleSheet} from 'react-native';
import React from 'react';

export default function Home({ navigation }) {
  return (
    <View style={styles.contaner}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Colorpalatte');
        }}
      >
        <Text style={styles.text}>Solarized</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Profile');
        }}
      >
        <Text style={styles.text}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  contaner: {
    marginHorizontal: 20,
    width:'80%',
    alignItems: 'center',
    alignSelf:'center',
    backgroundColor: 'teal',
    borderRadius: 14,
    padding:20
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'orange',
  },
});