import { StyleSheet, FlatList, RefreshControl,Text,View,TouchableOpacity } from 'react-native';
import PaletPreview from '../component/PaletPreview';
import React, { useState, useCallback, useEffect } from 'react';


// const SOLARIZED = [
//   { colorName: 'Base03', hexCode: '#002b36' },
//   { colorName: 'Base02', hexCode: '#073642' },
//   { colorName: 'Base01', hexCode: '#586e75' },
//   { colorName: 'Base00', hexCode: '#657b83' },
//   { colorName: 'Base0', hexCode: '#839496' },
//   { colorName: 'Base1', hexCode: '#93a1a1' },
//   { colorName: 'Base2', hexCode: '#eee8d5' },
//   { colorName: 'Base3', hexCode: '#fdf6e3' },
//   { colorName: 'Yellow', hexCode: '#b58900' },
//   { colorName: 'Orange', hexCode: '#cb4b16' },
//   { colorName: 'Red', hexCode: '#dc322f' },
//   { colorName: 'Magenta', hexCode: '#d33682' },
//   { colorName: 'Violet', hexCode: '#6c71c4' },
//   { colorName: 'Blue', hexCode: '#268bd2' },
//   { colorName: 'Cyan', hexCode: '#2aa198' },
//   { colorName: 'Green', hexCode: '#859900' },
// ];

const URL = 'https://color-palette-api.kadikraman.now.sh/palettes';

// const RAINBOW = [
//   { colorName: 'Red', hexCode: '#FF0000' },
//   { colorName: 'Orange', hexCode: '#FF7F00' },
//   { colorName: 'Yellow', hexCode: '#FFFF00' },
//   { colorName: 'Green', hexCode: '#00FF00' },
//   { colorName: 'Violet', hexCode: '#8B00FF' },
// ];



// const FRONTEND_MASTERS = [
//   { colorName: 'Red', hexCode: '#c02d28' },
//   { colorName: 'Black', hexCode: '#3e3e3e' },
//   { colorName: 'Grey', hexCode: '#8a8a8a' },
//   { colorName: 'White', hexCode: '#ffffff' },
//   { colorName: 'Orange', hexCode: '#e66225' },
// ];

// const COLOR_PALETTES = [
//   { paletteName: 'Solarized', colors: SOLARIZED },
//   { paletteName: 'Frontend Masters', colors: FRONTEND_MASTERS },
//   { paletteName: 'Rainbow', colors: RAINBOW },
// ];



export default function Home({ navigation }) {
  const [palatte, setpallete] = useState([]);
  const handlefetchpalate = useCallback
    (async () => {
      const result = await fetch(URL);
      const palatte = await result.json();

      if (result.ok) {
        setpallete(palatte);
      }
    },
      []);

  useEffect(() => {
    handlefetchpalate();
  }, []);


//SEcond Ues setate for the refreshong
  const [isRefreshing, setRefreshing] = useState(false);

  const handlerefresh = useCallback(async () => {
    setRefreshing(true);
    await handlefetchpalate();
    setRefreshing(false)

  }, []);


  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.9 }}>
        <FlatList
          style={styles.list}
          // data={COLOR_PALETTES}
          data={palatte}
          keyExtractor={(item) => item.paletteName}
          renderItem={({ item }) => (
            <PaletPreview
              handlePress={() => {
                navigation.navigate('Colorpalatte', item);
              }}
              ColorPalette={item}
            />
          )}
          refreshing={isRefreshing}
          onRefresh={handlerefresh}
        />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('ColorPalatteModel')}>
        <Text>Launch Model </Text>
      </TouchableOpacity>

      {/* <TouchableOpacity onPress={() => navigation.navigate('Form')}>
        <Text>Form </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text>Profile</Text>
      </TouchableOpacity> */}
    </View>
  );
}


const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor:'white'
     
  }
})

