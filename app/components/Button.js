import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import COLORS from '../consts/colors';

const PrimaryButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnContainer}>
        <Text style={style.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const SecondaryButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={{...style.btnContainer, backgroundColor: '#000000'}}>
        <Text style={{...style.title, color: COLORS.white}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  title: {color: COLORS.white, fontWeight: 'bold', fontSize: 25},
  btnContainer: {
    backgroundColor: '#25D837',
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {PrimaryButton, SecondaryButton};