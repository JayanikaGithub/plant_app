import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  StyleSheet,
} from 'react-native';
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import pets from '../consts/plants';
const {height} = Dimensions.get('window');
const petCategories = [
  {name: 'FLOWERS', icon: 'tree'},
  {name: 'PLANTS', icon: 'star'},
  {name: 'SEEDS', icon: 'cogs'},
  {name: 'POTS', icon: 'bitbucket'},
  {name: 'SPRAYERS', icon: 'fire-extinguisher'},
];

const Card = ({pet, navigation}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigation.navigate('Details', pet)}>
      <View style={style.cardContainer}>
        {/* Render the card image */}
        <View style={style.cardImageContainer}>
          <Image
            source={pet.image}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
          />
        </View>

        {/* Render all the card details here */}
        <View style={style.cardDetailsContainer}>
          {/* Name and gender icon */}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{fontWeight: 'bold', color: COLORS.dark, fontSize: 20}}>
              {pet?.name}
            </Text>
            <Icon name="heart" size={22} color={'#fa415e'} />
          </View>

          {/* Render the age and type */}
          <Text style={{fontSize: 15, marginTop: 10, color: COLORS.dark}}>
            {pet?.scientific_name}
          </Text>
          <Text style={{fontSize: 14, marginTop: 10, color: COLORS.dark}}>
            {pet?.type}
          </Text>

          {/* Render distance and the icon */}
          <View style={{marginTop: 10, flexDirection: 'row'}}>
            
            <Text style={{fontSize: 12, color: COLORS.dark, marginLeft: 5}}>
              
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const HomeScreen = ({navigation}) => {
  const [selectedCategoryIndex, setSeletedCategoryIndex] = React.useState(0);
  const [filteredPets, setFilteredPets] = React.useState([]);

  const fliterPet = index => {
    const currentPets = pets.filter(
      item => item?.pet?.toUpperCase() == petCategories[index].name,
    )[0]?.pets;
    setFilteredPets(currentPets);
    
  };

  React.useEffect(() => {
    fliterPet(0);
  }, []);

  return (
    <SafeAreaView style={{flex: 1, color: COLORS.white}}>
      <View style={style.header}>
        
        <View>
          <Text style={{fontSize: 30, fontWeight: 'bold',color:"#000000"}}>Welcome to</Text>
          <Text style={{fontSize: 45, color: "#33BB77", fontWeight: 'bold'}}>
            Blooming Plant Nursery
          </Text>
        </View>
        <Icon name="shopping-cart" size={20} color="#000000"/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.mainContainer}>
          {/* Render the search inputs and icons */}
          <View style={style.searchInputContainer}>
            <Icon name="search" size={24} color={COLORS.dark} />
            <TextInput
              placeholderTextColor={'#a7a7a7'}
              placeholder="Search your favourite plant"
              style={{flex: 1}}
            />
            <Icon name="sort" size={24} color={COLORS.dark} />
          </View>

          {/* Render all the categories */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 15,
            }}>
            {petCategories.map((item, index) => (
              <View key={'pet' + index} style={{alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => {
                    setSeletedCategoryIndex(index);
                    fliterPet(index);
                  }}
                  style={[
                    style.categoryBtn,
                    {
                      backgroundColor:
                        selectedCategoryIndex == index
                          ? COLORS.lightgreen
                          : '#FCD400',
                    },
                  ]}>
                  <Icon
                    name={item.icon}
                    size={20}
                    color={
                      selectedCategoryIndex == index
                        ? COLORS.dark
                        : COLORS.dark
                    }
                  />
                </TouchableOpacity>
                <Text style={style.categoryBtnName}>{item.name}</Text>
              </View>
            ))}
          </View>

          {/* Render the cards with flatlist */}
          <View style={{marginTop: 20}}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={filteredPets}
              renderItem={({item}) => (
                <Card pet={item} navigation={navigation} />
              )}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    padding: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#B3FBBA',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 1,
    paddingHorizontal: 14,
    paddingVertical: 40,
    minHeight: height,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categoryBtn: {
    height: 35,
    width: 65,
    marginTop: 13,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  categoryBtnName: {
    color: COLORS.dark,
    fontSize: 12,
    marginTop: 10,
    fontWeight: 'bold',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22,
  },
  cardDetailsContainer: {
    height: 120,
    backgroundColor: '#33BB77',
    flex: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    padding: 20,
    justifyContent: 'center',
  },
  cardImageContainer: {
    height: 180,
    width: 160,
    marginTop: 15,
    backgroundColor: '#F5FF80',
    borderRadius: 20,
  },
});
export default HomeScreen;
