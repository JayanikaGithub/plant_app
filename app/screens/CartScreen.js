import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../../app/consts/colors';
import pets from '../../app/consts/plants';
import foods from '../consts/cartinfo';
import {PrimaryButton} from '../../app/components/Button';


const CartScreen = ({navigation}) => {
    const CartCard = ({item}) => {
      return (
        <View style={style.cartCard}>
          <Image source={item.image} style={{height: 80, width: 80}} />
          <View
            style={{
              height: 100,
              marginLeft: 10,
              paddingVertical: 20,
              flex: 1,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16, color: COLORS.dark}}>{item.name}</Text>
            <Text style={{fontSize: 13, color: COLORS.grey}}>
              {item.ingredients}
            </Text>
            <Text style={{fontSize: 17, fontWeight: 'bold', color: COLORS.dark}}>Rs.{item.price}</Text>
          </View>
          <View style={{marginRight: 20, alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: COLORS.dark}}>1</Text>
            <View style={style.actionBtn}>
              <Icon name=   ""  size={25} color={COLORS.dark} />
              <Icon name="arrows-h" size={30} color={COLORS.dark} />
            </View>
          </View>
        </View>
      );
    };
    return (
      <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
        <View style={style.header}>
          <Icon name="long-arrow-left" size={28} color={COLORS.dark} onPress={navigation.goBack} />
          <Text style={{fontSize: 24, fontWeight: 'bold',color: COLORS.dark}}>                      My Cart</Text>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 80}}
          data={foods}
          renderItem={({item}) => <CartCard item={item} />}
          ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
          ListFooterComponent={() => (
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 15,
                }}>
                <Text style={{fontSize: 18, fontWeight: 'bold',color: COLORS.dark}}>
                  Total Price
                </Text>
                <Text style={{fontSize: 18, fontWeight: 'bold',color: COLORS.dark}}>Rs.5200.00</Text>
              </View>
              <View style={{marginHorizontal: 30}}>
                <PrimaryButton title="CHECKOUT" />
              </View>
            </View>
          )}
        />
      </SafeAreaView>
    );
  };
  const style = StyleSheet.create({
    header: {
      paddingVertical: 20,
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 20,
    },
    cartCard: {
      height: 100,
      elevation: 15,
      borderRadius: 10,
      backgroundColor: "#58D164",
      marginVertical: 10,
      marginHorizontal: 20,
      paddingHorizontal: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    actionBtn: {
      width: 90,
      height: 40,
      backgroundColor: "#B3FBBA",
      borderRadius: 30,
      paddingHorizontal: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center',
    },
  });
  
  export default CartScreen;