import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../consts/colors';
import {PrimaryButton, SecondaryButton} from '../components/Button';

const ThankyouScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={{height: 450, width: 425}}>
        <Image
          style={{
            width: '100%',
            resizeMode: 'cover',
            top: -30,
            alignItems: 'center',
          }}
          source={require('../assets/images/thankscr.png')}
        />
      </View>
      <View style={style.textContainer}>
        <View>
          <Text style={{fontSize: 35, fontWeight: 'bold', textAlign: 'center', color:'#000000',marginTop: 60}}>
            
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
        <View style={style.indicatorContainer}>
          <View style={style.currentIndicator} />
          <View style={style.indicator} />
          <View style={style.indicator} />
        </View>
        <PrimaryButton
          onPress={() => navigation.navigate('BoardScreen')}
          title="Back to start"
          color="green"
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
  },
  
});

export default ThankyouScreen;