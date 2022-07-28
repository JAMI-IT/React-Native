import react from "react";
import { View, Text,StyleSheet } from 'react-native';
 
const ColorBox = (props) => {
 
  const boxColor = {
    backgroundColor: props.hexCode,
  };
   const textcolor = {
     color:
       parseInt(props.hexCode.replace('#', ''), 16) > 0xffffff / 1.1
         ? 'black'
         : 'white',
   };
    return (
        <View style={[styles.box,boxColor]}>
            <Text style={[styles.boxtext,textcolor]}>{props.colorName}:{props.hexCode} </Text>
        </View>
    );
};



const styles = StyleSheet.create({
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'teal',
    marginBottom: 20,
    padding:20,
    borderRadius: 20,
  },
  boxtext: { color: 'white', fontWeight: 'bold' },
});
export default ColorBox;