import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

export default function App() {

const [value, setInputValue] = useState('');
const [res, setInputRes] = useState('');

const pressBtnEvent = () =>{
      function f(n){
       if(n<2) return 1;
      return f(n-1)+f(n-2);

    };
  setInputRes(f(30));
}

return (
   <View>
     <View style={styles.block}>
        <TextInput keyboardType = 'numeric' style = {styles.input} placeholder= "31 число фибоначчи" value = {value} onChangeText={setInputRes}></TextInput>
        <Button title ="Вывисти" onPress={pressBtnEvent}/>
        <StatusBar style="auto" />
     </View>
      {res!=""&&
  <View style={styles.container}>
   <Text>Результат: {res}</Text>
  </View>
   }
    </View>
  );
}

const styles = StyleSheet.create({

 input: {
 width: '100%',
 textAlign:'center',
 padding: 15,
 borderStyle: 'solid',
 borderBottomColor: '#2196f3',
},
 block: {
 flexDirection: 'column',
 justifyContent: 'center',
 alignItems: 'center',
 marginBottom: 50,
 marginTop: 100
},

 container: {
 flex: 1,
 backgroundColor: '#fff',
 alignItems: 'center',
 justifyContent: 'center',
 },
});