import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const PROFILE = (props) => {

    return (
      <View style={[styles.box]}>
        <Text style={[styles.boxtext]}>
          {props.name} {props.status}
        </Text>
      </View>
    );
};

const styles = StyleSheet.create({
  box: {
    flex: 0.3,
    padding: 5,
    borderRadius: 20,
    marginHorizontal:14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxtext: {
    color: 'black',
  },
});
export default PROFILE;