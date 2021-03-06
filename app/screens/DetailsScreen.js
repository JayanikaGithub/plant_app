import React from 'react';
import {View, SafeAreaView, Image, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../consts/colors';
import {PrimaryButton} from '../components/Button';

const DetailsScreen = ({navigation, route}) => {
  const pet = route.params;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#FBE781',
      }}>
      <View style={style.header}>
        <Icon name="long-arrow-left" size={28} color="#000000" onPress={() => navigation.goBack()} />
        <Icon name="shopping-cart" size={28} color="#000000" />
      </View>
      <View style={style.imageContainer}>
        <Image source={pet?.image} style={{resizeMode: 'contain', flex: 1}} />
      </View>
      <View style={style.detailsContainer}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <Icon name="star-half-full" size={28} color="#000000" />
          <Text style={{fontSize: 18, fontWeight: 'bold', color:"#000000"}}>     Your best choice</Text>
        </View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 22, fontWeight: 'bold', color:"#000000"}}>{pet?.name}</Text>
          <View style={style.priceTag}>
            <Text
              style={{
                marginLeft: 5,
                color: COLORS.white,
                fontWeight: 'bold',
                fontSize: 15,
              }}>
              Rs{pet.price}
            </Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color:"#000000"}}>About</Text>
          <Text
            style={{
              color: '#000000',
              fontSize: 16,
              lineHeight: 22,
              marginTop: 10,
            }}>
            {pet.about}
          </Text>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={style.borderBtn}>
                <Text style={style.borderBtnText}>-</Text>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: 10,
                  fontWeight: 'bold',
                  color: '#000000',
                }}>
                1
              </Text>
              <View style={style.borderBtn}>
                <Text style={style.borderBtnText}>+</Text>
              </View>
            </View>

            
            <PrimaryButton
              onPress={() => navigation.navigate('CartScreen')}
              title= "       Place order       "
              color="#000000"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 0.50,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: COLORS.light,
    marginHorizontal: 4,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: COLORS.dark,
    marginBottom: 5,
    marginRight: 3,
  },
  borderBtn: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
  },
  borderBtnText: {fontWeight: 'bold', fontSize: 28},
  buyBtn: {
    width: 130,
    height: 50,
    backgroundColor: '#05703D',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  priceTag: {
    backgroundColor: '#D90000',
    width: 80,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
});

export default DetailsScreen;