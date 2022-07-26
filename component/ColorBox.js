import react from "react";
import { View, Text,StyleSheet } from 'react-native';
 
const ColorBox = (props) => {
    const boxColor= {
        backgroundColor: props.hexCode,   
    }
    return (
        <View style={[styles.box,boxColor]}>
            <Text style={styles.boxtext}>{props.colorName}:{props.hexCode} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
    borderRadius: 20,
  },
  boxtext: { color: 'white', fontWeight: 'bold' },
});

export default ColorBox;