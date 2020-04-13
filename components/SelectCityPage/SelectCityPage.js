import * as React from 'react';
import axios from 'axios';
import { View, StyleSheet, ActivityIndicator, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DrawerIcon from '../DrawerIcon/DrawerIcon';


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
        <Button
            key={city}
            buttonStyle={{margin: 20}}
            title={city}
            color= '#4287f5'
            onPress={() => navigation.navigate('Announcements', {city: city})}
          />
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    color: '#144799',
    fontSize: 24,
    padding: 24,
  }
});

export default function(props) {
  const navigation = useNavigation();
  
  return <SelectCityPage {...props} navigation={navigation} />;
}
