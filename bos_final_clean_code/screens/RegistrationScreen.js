import React, { useState } from 'react';
import { View, Text, Button, ImageBackground, TextInput, Alert } from 'react-native';
import { styles } from '../styles/styles';
import { firestore, auth } from '../FirebaseConfig';

export default function RegistrationScreen( { navigation } ) {
  [registrationEmail, setRegistrationEmail] = useState('');
  [registrationPassword, setRegistrationPassword] = useState('');
  [databaseData, setDatabaseData] = useState('');

  registerWithFirebase = () => {
    if (registrationEmail.length < 4) {
      Alert.alert('Please enter a valid email address.');
      return;
    }

    if (registrationPassword.length < 4) {
      Alert.alert('Password must be at least 4 characters long.');
      return;
    }

    auth.createUserWithEmailAndPassword(registrationEmail, registrationPassword)
      .then(function (_firebaseUser) {
        setRegistrationEmail('');
        setRegistrationPassword('');
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode == 'auth/weak-password') {
          Alert.alert('Password is too weak.');
        }
        else {
          Alert.alert(errorMessage);
        }
        console.log(error);
      }
      );
  
    navigation.navigate('ConfirmationScreen')
  }

  return (
    <View style={styles.registrationContainer}>
      <ImageBackground source={require('../assets/image.png')} resizeMode = 'contain' imageStyle={{opacity:0.1}} style={styles.backgroundImage}>
        <View style={styles.titleContainer}>
              <Text style={styles.registrationTitleName}>SIGN UP</Text>
        </View>  
        <View style={styles.form}>
              <TextInput 
                style={styles.input} 
                placeholder='Email' 
                keyboardType='email-address' 
                autoCompleteType='email' 
                autoCorrect={false} 
                onChangeText={ (value) => setRegistrationEmail(value) } />
              <TextInput 
                style={styles.input} 
                placeholder='Password' 
                autoCorrect={false}              
                onChangeText={ (value) => setRegistrationPassword(value) }
                autoCompleteType='password'/>
        </View>
        <View style={styles.buttonContainer}>   
            <Button 
                title="Register"
                color="#40102d"
                onPress={registerWithFirebase} 
            /> 
            <Button 
                title="Cancel"
                color="#40102d"
                onPress={ () => navigation.navigate('HomeScreen') } 
            />   
        </View>
      </ImageBackground>
    </View>
  );
}
