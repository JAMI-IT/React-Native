import { View,Text,TouchableOpacity,StyleSheet,FlatList } from 'react-native'
import React from 'react'

const PaletPreview = ({ handlePress, ColorPalette }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text}>{ColorPalette.paletteName}</Text>
          <FlatList
              style={styles.list}
        data={ColorPalette.colors.slice(0, 5)}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <View style={[styles.box, { backgroundColor: item.hexCode, height: 40, width: 40, marginRight: 5, marginTop: 10 }]}></View>
        )}
      />
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    box: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
        elevation: 10,  
    margin:10,
    borderRadius:10,
    },
    list: {
        marginBottom: 20,
        flexDirection:'row'
    }
})
export default PaletPreview;