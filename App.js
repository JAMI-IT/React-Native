import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import ColorBox from './component/ColorBox';
const app = () => {
  return (
    <SafeAreaView>
      <View style={styles.contaner}>
        <Text style={styles.text}>Here are some boxes Of deffrent Colors</Text>
        <ColorBox colorName="Cyan" hexCode="#2aa198" />
        <ColorBox colorName="Blue" hexCode="#268bd2" />
        <ColorBox colorName="Magenta" hexCode="#d33682" />
        <ColorBox colorName="Orange" hexCode="#cb4b16" />
        <ColorBox colorName="Cyan" hexCode="#2aa198" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contaner: {
    marginVertical:20,
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
 
});

export default app;
