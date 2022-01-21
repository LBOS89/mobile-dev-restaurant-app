import React from 'react';
import { View, Text, Button, ImageBackground } from 'react-native';
import { styles } from '../styles/styles';

export default function ConfirmationScreen( { navigation } ) {

  return (
    <View style={styles.confirmationContainer}>
      <ImageBackground source={require('../assets/image.png')} resizeMode = 'contain' imageStyle={{opacity:0.2}} style={styles.backgroundImage}>
      <View style={styles.titleContainer}>
            <Text style={styles.confirmationTitleName}>YOU'RE IN!</Text>
      </View>  
      <View style={styles.buttonContainer}>   
          <Button 
              title='TELL ME WHERE TO EAT !'
              color='#033825'
              onPress={ () => navigation.navigate('SelectorScreen') } 
          />      
      </View>
      </ImageBackground>
    </View>
  );
}