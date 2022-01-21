import React from 'react';
import { View, Text, Button, ImageBackground } from 'react-native';
import { styles } from '../styles/styles';

export default function HomeScreen( { navigation } ) {

  return (
    <View style={styles.homeContainer}>
      <ImageBackground source={require('../assets/image.png')} resizeMode = 'contain' imageStyle={{opacity:0.2}} style={styles.backgroundImage}>
        <View style={styles.titleContainer}>
              <Text style={styles.titleName}>DINNER</Text>
              <Text style={styles.titleName}>TIME</Text> 
        </View>  
        <View style={styles.buttonContainer}>   
            <Button 
                style = {styles.button}
                title="Sign Up"
                color="#092B46"
                onPress={ () => navigation.navigate('RegistrationScreen') } 
            />      
            <Button 
                style = {styles.button}
                title="Log In"
                color="#092B46"
                onPress={ () => navigation.navigate('LogInScreen') } 
            />   
        </View>
      </ImageBackground>
    </View>
  );
}
