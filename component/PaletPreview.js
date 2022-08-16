import { View,Text,TouchableOpacity,SafeAreaView,StyleSheet,FlatList } from 'react-native'
import React from 'react'

const PaletPreview = ({ handlePress, ColorPalette }) => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.text}>{ColorPalette.paletteName}</Text>
      </View>
      <TouchableOpacity onPress={handlePress}>
        <FlatList
          style={styles.list}
          data={ColorPalette.colors.slice(0, 5)}
          keyExtractor={(item) => item.colorName}
          renderItem={({ item }) => (
            <View
              style={[
                styles.box,
                {
                  backgroundColor: item.hexCode,
                  height: 40,
                  width: 40,
                 
                },
              ]}
            ></View>
          )}
        />
      </TouchableOpacity>
    </SafeAreaView>
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
    borderRadius: 10,
    margin: 5,
  },
  list: {
    flexDirection: 'row',
    margin: 10,
    align: 'center',
    alignItems: 'center',
  },
});
export default PaletPreview;