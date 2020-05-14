import  React, {useCallback} from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Dimensions, Linking, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      }
    }, [url]);
  
    return (
      <TouchableOpacity onPress={handlePress}>
        <Text style={{fontSize: 10, textAlign: 'center'}}>{children}</Text>
      </TouchableOpacity>);
  };

const {width, height} = Dimensions.get('window');

export default class CovidImage extends React.Component {
  render() {
    return (
        <View>
            <Image style={styles.image} source={require('../../assets/covid.png')} />
            <OpenURLButton url={'https://pngtree.com/so/covid-19'}>covid-19 png from pngtree.com</OpenURLButton>
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
