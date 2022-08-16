import { View, Text ,Switch} from 'react-native'
import React from 'react'
import { useState } from 'react'

export default function NewColor(props) {
  const [switchs, setswitch] = useState(false);
  const hex = {
    hxcolor:props.hex
  }
  return (
    <View      style={{
        flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'center',

      }}
    >
    
      <Text>
        {props.name}:{props.hexacode}{' '}:{switchs}
      </Text>
      <Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={switchs ? '#f5dd4b' : '#f4f3f4'}
          value={switchs}
          onValueChange={setswitch}
        />
      </Text>
    </View>
  );
}
