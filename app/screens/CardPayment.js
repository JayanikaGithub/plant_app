import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import CustomInput from '../../app/components/CustomInput';
import CustomButton from '../../app/components/CustomButton';
import SocialSignInButtons from '../../app/components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {PrimaryButton, SecondaryButton} from '../components/Button';

const CardPayment = () => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const navigation = useNavigation();

  const onSubmitPressed = () => {
    navigation.navigate('LocationScreen');
  };

  const onSignInPress = () => {
    navigation.navigate('Signinscreen');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Enter Your Card Details</Text>
        <Image
          style={{
            width: '100%',
            resizeMode: 'cover',
            top: 15,
            alignItems: 'center',
          }}
          source={require('../assets/images/credit.png')}
        />

        <CustomInput placeholder="Card holder name" value={code} setValue={setCode} />

        <CustomInput placeholder="Card Number" value={code} setValue={setCode} />

        <CustomInput placeholder="Expire Date" value={code} setValue={setCode} />

        <CustomInput placeholder="CVV/CVC" value={code} setValue={setCode} />

        <CustomInput
          placeholder="Enter your new password"
          value={newPassword}
          setValue={setNewPassword}
        />

        <CustomButton text="Submit" onPress={onSubmitPressed} />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default CardPayment;
