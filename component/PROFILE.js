import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';

const PROFILE = (props) => {
    return (
      <View style={styles.box}>
        <Text style={styles.boxtext}>
                < Entypo name={props.iconname} size={24} color="black"/>
                {props.status}
        </Text>
      </View>
    );
};

const styles = StyleSheet.create({
    box: {
        marginTop: 105,
        flex:1,
    width: '55%',
    alignItems: 'center',
    padding:10,
    backgroundColor: 'blue',
        borderRadius: 15,
        borderWidth: 2,
        margin:10,

  },
  boxtext: { color: 'white' },
});
export default PROFILE;