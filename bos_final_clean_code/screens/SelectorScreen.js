import React, { useState } from 'react';
import { View, Text, Button, ImageBackground, Alert, Image, TextInput } from 'react-native';
import { styles } from '../styles/styles';
import * as Location from 'expo-location';
import { Picker } from '@react-native-picker/picker';
import { getDistance } from 'geolib';
import * as SMS from 'expo-sms';

export default function SelectorScreen() {
  [currentLocation, setCurrentLocation] = useState();
  [isFetching, setIsFetching] = useState();
  [inRange, setInRange] = useState(true);
  [food, setFood] = useState('italian');
  [budget, setBudget] = useState('low');
  [recommendation, setRecommendation] = useState(false);
  [phoneNumber, setPhoneNumber] = useState();
  [message, setMessage] = useState();

  const londonLocation = { latitude: 42.984268, longitude: -81.247528 }

  hasLocationPermissions = async () => {
    let { status } = await Location.getForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Location services are not enabled. We don\'t know where you are!');
      return false;
    }
    return true;
  }

  getCurrentLocation = async () => {
    setIsFetching(true);

    if(await hasLocationPermissions()) {
      let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Highest });
      setCurrentLocation(location);

      var currentPoints = { latitude: location.latitude, longitude: location.longitude };
      
      var proximity = getDistance(londonLocation, currentPoints)
      
      if (proximity > 30000) {
          setInRange(false);
          Alert.alert('Sorry! Looks like you\'re too far away!');
      }
    }

    setIsFetching(false);
  }

  showRecommendation = () => {

      if (food == 'italian' && budget == 'low') {
          setRecommendation('SpageddyEddys');
          setMessage('We\'ve got to try Spageddy Eddy\'s!')
      }
      else if (food == 'mexican' && budget == 'mid') {
          setRecommendation('LosLobos');
          setMessage('We\'ve got to try Los Lobos!')
      }
      else if (food == 'sushi' && budget == 'mid') {
          setRecommendation('Mikado');
          setMessage('We\'ve got to try Mikado Sushi!')
      }
      else {
          Alert.alert('Sorry - we have no suggestions')
          setRecommendation('');
      }
  }

  declineRecommendation = () => {
      setRecommendation('');
  }

  const foodPickerHandler = (itemValue, itemIndex) => {
      setFood(itemValue);
      console.log(food);
  }

  const budgetPickerHandler = (itemValue, itemIndex) => {
      setBudget(itemValue);
      console.log(budget);
  }

  phoneNumberHandler = (value) => {
    setPhoneNumber(value);
  }

  sendSMSHandler = async () => {
    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
      const { result } = await SMS.sendSMSAsync(
        phoneNumber,
        message
      );
      console.log(result);
    } else {
      console.log("SMS is not available on this device");
    }
  }

  return (  
    <View style={styles.selectorContainer}>
        { !recommendation && 
            <View style={styles.selectorContainer}>
                <ImageBackground source={require('../assets/image.png')} resizeMode = 'contain' imageStyle={{opacity:0.1}} style={styles.backgroundImage}>
                    <Text style={styles.secondaryTitleName}>WHAT ARE YOU IN THE MOOD FOR</Text>
                    <Text style={styles.thirdTitleName}>TODAY?</Text>           
                    <Picker 
                        selectedValue={food}
                        onValueChange={foodPickerHandler}>
                        <Picker.Item label="Italian" value="italian" />
                        <Picker.Item label="Mexican" value="mexican" />
                        <Picker.Item label="Sushi" value="sushi" />
                    </Picker>
                    <Picker 
                        selectedValue={budget}
                        onValueChange={budgetPickerHandler}>
                        <Picker.Item label="$" value="low" />
                        <Picker.Item label="$$" value="mid" />
                        <Picker.Item label="$$$" value="high" />
                    </Picker>
                    <Button 
                        title="GO"
                        color="#044238"
                        onPress={showRecommendation} 
                    />  
                </ImageBackground>  
            </View>
        }        
        { recommendation == 'SpageddyEddys' &&
            <View style={styles.selectorContainer}>                
                    <Text style={styles.secondaryTitleName}>WE RECOMMEND...</Text>
                    <Text style={styles.thirdTitleName}>SPAGEDDY EDDY'S</Text> 
                    <Image style={styles.image} source={require('../assets/spageddyeddys.png')} /> 
                    <Button 
                        title="Try again."
                        color="#0B410B"
                        onPress={declineRecommendation} 
                    /> 
                    <Text style={styles.content}>Like this suggestion? Text it to a friend!</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='Enter phone number' 
                        onChangeText={phoneNumberHandler} />
                    <Button 
                        title="Send"
                        color="#6b2a4e"
                        onPress={sendSMSHandler} 
                    />
            </View>        
        }
        { recommendation == 'LosLobos' &&
            <View style={styles.selectorContainer}>                
                <Text style={styles.secondaryTitleName}>WE RECOMMEND...</Text>
                <Text style={styles.thirdTitleName}>LOS LOBOS</Text> 
                <Image style={styles.image} source={require('../assets/loslobos.png')} />
                <Button 
                    title="Try Again"
                    color="#0B410B"
                    onPress={declineRecommendation} 
                /> 
                <Text style={styles.content}>Like this suggestion? Text it to a friend!</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder='Enter phone number' 
                    onChangeText={phoneNumberHandler} />
                <Button 
                    title="Send"
                    color="#6b2a4e"
                    onPress={sendSMSHandler} 
                />
            </View>  
        }
        { recommendation == 'Mikado' &&
            <View style={styles.selectorContainer}>                
                <Text style={styles.secondaryTitleName}>WE RECOMMEND...</Text>
                <Text style={styles.thirdTitleName}>MIKADO SUSHI</Text> 
                <Image style={styles.image} source={require('../assets/mikado.png')} />
                <Button 
                    title="Try Again"
                    color="#0B410B"
                    onPress={declineRecommendation} 
                /> 
                <Text style={styles.content}>Like this suggestion? Text it to a friend!</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder='Enter phone number' 
                    onChangeText={phoneNumberHandler} />
                <Button 
                    title="Send"
                    color="#6b2a4e"
                    onPress={sendSMSHandler} 
                />
            </View>  
        }
    </View>
    
  );
}