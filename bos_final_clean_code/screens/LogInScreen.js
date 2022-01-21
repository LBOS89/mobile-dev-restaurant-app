import React, { useState } from 'react';
import { View, Text, Button, ImageBackground, TextInput, Alert } from 'react-native';
import { styles } from '../styles/styles';
import { firestore, auth } from '../FirebaseConfig';

export default function LogInScreen( { navigation } ) {    
    [loginEmail, setLoginEmail] = useState('');
    [loginPassword, setLoginPassword] = useState('');
    [loggedIn, setLoggedIn] = useState(false);
    [databaseData, setDatabaseData] = useState('');

    loginWithFirebase = () => {
        if (loginEmail.length < 4) {
        Alert.alert('Please enter a valid email address.');
        return;
        }

        if (loginPassword.length < 4) {
        Alert.alert('Password must be at least 4 characters long.');
        return;
        }

        auth.signInWithEmailAndPassword(loginEmail, loginPassword)
        .then(function (_firebaseUser) {
            Alert.alert('Login Successful!');
            setLoggedIn(true);
        })
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            if (errorCode === 'auth/wrong-password') {
            Alert.alert('Wrong password.');
            }
            else {
            Alert.alert(errorMessage);
            }
        }
        );

        navigation.navigate('SelectorScreen');
    }

  return (
    <View style={styles.registrationContainer}>
        <ImageBackground source={require('../assets/image.png')} resizeMode = 'contain' imageStyle={{opacity:0.1}} style={styles.backgroundImage}>
            <View style={styles.titleContainer}>
                    <Text style={styles.registrationTitleName}>LOG IN</Text>
            </View>  
            <View style={styles.form}>
                    <TextInput 
                    style={styles.input} 
                    placeholder='Email' 
                    keyboardType='email-address' 
                    autoCompleteType='email' 
                    autoCorrect={false} 
                    onChangeText={ (value) => setLoginEmail(value) } />
                    <TextInput 
                    style={styles.input} 
                    placeholder='Password' 
                    keyboardType="visible-password"
                    autoCorrect={false}              
                    onChangeText={ (value) => setLoginPassword(value) }
                    autoCompleteType='password'/>
            </View>
            <View style={styles.buttonContainer}>   
                <Button 
                    title="Sign In"
                    color="#40102d"
                    onPress={loginWithFirebase} 
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
