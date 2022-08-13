import {
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  SafeAreaView
} from 'react-native';
import { useState } from 'react'
import React from 'react'

export default function Form() {
    const [value1, setvalue1] = useState('');
    const [value2, setvalue2] = useState('');
    const [value3, setvalue3] = useState('');
    const [value4, setvalue4] = useState('');

    return (
    
        <SafeAreaView style={styles.SafeArea}>
            <ScrollView style={styles.container}>
                <Text>Enter the name</Text>
                <TextInput
                    style={styles.input}
                    value={value1}
                    onChange={setvalue1}
                    placeholder="Enter Name"
                />
            </ScrollView>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 5,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    padding: 5,
  },
});
