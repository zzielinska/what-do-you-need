import  React, {useCallback} from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Dimensions, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

export default class CovidImage extends React.Component {
  render() {
    return (
        <View>
            <Image style={styles.image} source={require('../../assets/covid.png')} />
            <Text style={{fontSize: 7, textAlign: 'center'}}>covid-19 png from pngtree.com</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#bfbdbe',
    marginBottom: 100,
    height: height,
    alignItems: 'center',
  },
  image: {
    width: width < 700 ? 150 : 300,
    height: width < 700 ? 150 : 300,
  },
  btn:{
    width:"50%",
    backgroundColor:"#ac3b61",
    borderRadius:20,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom: 10,
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
