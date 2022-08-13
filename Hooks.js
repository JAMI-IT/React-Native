import { View, Text ,StyleSheet,SafeAreaView,TouchableOpacity} from 'react-native'
import react,{ usestate} from 'react'
import React from 'react'

export default function Hooks() {
        const [value, setvalue] = usestate();
    
    return (
        <SafeAreaView>
            <View style={styles.button}>
                <TouchableOpacity onPress={() => setvalue(curent => curent + 1)}>
                    <Text>increment</Text>
                </TouchableOpacity>
            </View>

       </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        
    }
})