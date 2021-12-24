import React from 'react';
import {Text, StyleSheet, TextInput, View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../consts/colors';
import {PrimaryButton, SecondaryButton} from '../components/Button';

const registration = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={{height: 450, width: 425}}>
        <Image
          style={{
            width: '100%',
            resizeMode: 'cover',
            top: 15,
            alignItems: 'center',
          }}
          source={require('../assets/images/regn.png')}
        />
      </View>
      <View style={style.textContainer}>
        <View>
          <Text style={{fontSize: 35, fontWeight: 'bold', textAlign: 'center', color:'#000000',marginTop: 40}}>
            
          </Text>
          <Text
            style={{
              marginTop: 5,
              fontSize: 18,
              textAlign: 'center',
              color: COLORS.grey,
            }}>
           
          </Text>
        </View>
        <View style={style.registration}>
                <TextInput style={style.TextInput} placeholder="Your name"
                underlineColorAndroid={'transparent'}/>

                <TextInput style={style.TextInput} placeholder="Email"
                underlineColorAndroid={'transparent'}/>

                <TextInput style={style.TextInput} placeholder="Home Address"
                secureTextEntry={true}underlineColorAndroid={'transparent'}/>

                <TextInput style={style.TextInput} placeholder="Telephone Number"
                secureTextEntry={true}underlineColorAndroid={'transparent'}/>

                <TextInput style={style.TextInput} placeholder="Postal ID"
                secureTextEntry={true}underlineColorAndroid={'transparent'}/>
                
        </View>
        <PrimaryButton
          onPress={() => navigation.navigate('Home')}
          title="Submit"
          color="#000000"
        />
      </View>
      
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  textContainer: {
    flex: 1,
    paddingHorizontal: 70,
    justifyContent: 'space-between',
    paddingBottom: 60,
    top: -165,
  },
  registration: {
      alignSelf: 'stretch'
  },
  
  TextInput: {
    top: -45,  
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 15,
    color: '#000000',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    fontSize: 18,
},
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 60,
    paddingRight: 60,
  },
  
});

export default registration;