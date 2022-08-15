import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,Switch
} from 'react-native';
import { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import React from 'react';

export default function Form() {
    const [value1, setvalue1] = useState('');
    const [value2, setvalue2] = useState('');
    const [value3, setvalue3] = useState('');
  const [value4, setvalue4] = useState('');
  
  const FOODS = [
    'apples',
    'doughnits',
    'Yorkshire pie',
    'pizza',
    'jellied eels',
  ];
  const [fod, setfod] = useState('pizza');
  const [switchs,setswitch] =useState(false)
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            backgroundColor: '#6c71c4',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 5,
          }}
        >
          <View
            style={{
              height: 101,
              width: 101,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.5,
              shadowRadius: 1,
              elevation: 10,
              borderRadius: 10,
              borderRadius: 50,
            }}
          >
            <Image
              style={{
                height: 100,
                width: 100,
                borderRadius: 50,
              }}
              source={require('../assets/j1.png')}
            />
          </View>
        </View>

        <ScrollView>
          <Text style={{marginBottom:10}}>Enter the name</Text>
          <TextInput
            style={styles.input}
            value={value1}
            onChange={setvalue1}
            placeholder="Enter Name"
          />

          <Text>Enter Phone #</Text>
          <TextInput
            style={styles.input}
            value={value2}
            onChange={setvalue2}
            keyboardType="numeric"
            placeholder="Ph.no"
          />

          <Text>Passwor input</Text>
          <TextInput
            style={styles.input}
            value={value3}
            onChange={setvalue3}
            secureTextEntry={true}
            placeholder="******"
          />

          <Text>Descrition</Text>
          <TextInput
            style={styles.input}
            value={value4}
            onChange={setvalue4}
            multiline={true}
            numberOfLines={4}
            placeholder="Enter your heat Fellings"
          />
          <Text>Select Food</Text>

          <View style={styles.input}>
            <Picker
              selectedValue={fod}
              onValueChange={(itemValue) => setfod(itemValue)}
            >
              {FOODS.map((food) => (
                <Picker.Item label={food} value={food} />
              ))}
            </Picker>
          </View>
          <View style={{ flexDirection:'row'}}>
            <Text style={{height: 50 ,padding:15}}>your Gender Female</Text>

          <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={switchs ? '#f5dd4b' : '#f4f3f4'}
              value={switchs}
              onValueChange={setswitch}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 5,
    marginBottom: 10,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    padding: 20,
  },
});