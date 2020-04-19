import * as React from 'react';
import axios from 'axios';
import { View, StyleSheet, ActivityIndicator, Text, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DrawerIcon from '../DrawerIcon/DrawerIcon';

const {width, height} = Dimensions.get('window');

class SelectCityPage extends React.Component {
  state = {
    cities: null
  }
  render() {
    const { navigation } = this.props;
    axios.get('https://what-do-you-need-f9f98.firebaseio.com/cities.json')
      .then(response => {
        this.setState({cities: response.data});
      });

    let citiesButtons = <ActivityIndicator size="large" color="#0000ff" />
    if(this.state.cities)
    citiesButtons = Object.values(this.state.cities).map(city => {
      return (
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Announcements', {city: city})}>
          <Text style={styles.text}>{city}</Text>
        </TouchableOpacity>
      )
    })

    return (
        <View>
          <DrawerIcon />
          <View style={styles.container}>
            <Text style={styles.title}>{"Choose your city !"}</Text>
            {citiesButtons}
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#bfbdbe',
    height: height,
    alignItems: 'center',
  },
  title: {
    color: '#123c69',
    fontWeight: 'bold',
    fontSize: width < 700 ? 24 : 40,
    paddingTop: width < 700 ? 30 : 50,
    paddingBottom: width < 700 ? 10 : 30,
  },
  btn:{
    width:"50%",
    backgroundColor:"#ac3b61",
    borderRadius:20,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    marginBottom:10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  text: {
    color: 'white',
    fontSize:  width < 700 ? 18 : 30,
  }
});

export default function(props) {
  const navigation = useNavigation();
  
  return <SelectCityPage {...props} navigation={navigation} />;
}
