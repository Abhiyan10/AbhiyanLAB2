import React, { useState } from "react";
import { View, Text, TextInput,Button, StyleSheet, Switch} from "react-native";

export default function HelloWorldApp() {
  const [value, onChangeText] = 	React.useState('Enter your Name');  
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
 
  return (  
  <View style={[styles.container, isEnabled && styles.dark]}>
    <TextInput style={[styles.edit,isEnabled && styles.textWhite ]}
	    onChangeText={text => onChangeText(text)}
      clearTextOnFocus={true}
      value={value}
    />
    <Text style={[styles.smalltext,isEnabled && styles.textWhite ] }>{value}</Text>
   
    <Button style={styles.button}
       onPress={() => onChangeText('')}
 	      title="Clear" 
       />
         <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
   </View> 
  );
}
const styles = StyleSheet.create({
  container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center'
      },
  edit: {
       fontSize : 30
  },
  smalltext: {
    fontSize : 20
},
  dark:{
    backgroundColor:"#000"
  },
  textWhite:{
    color:"#fff"
  }
});