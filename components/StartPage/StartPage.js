import  React, {useCallback} from 'react';
import {Svg, Text, Defs, LinearGradient, Stop, Mask, Rect, Use} from 'react-native-svg';
import { View, StyleSheet, Image, TouchableOpacity, Dimensions, Linking, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CovidImage from './Image'
// import { Button } from 'native-base';

// const OpenURLButton = ({ url, children }) => {
//   const handlePress = useCallback(async () => {
//     const supported = await Linking.canOpenURL(url);
//     if (supported) {
//       await Linking.openURL(url);
//     }
//   }, [url]);

//   return (
//     <TouchableOpacity  onPress={handlePress}>
//       <Text>{children}</Text>
//     </TouchableOpacity>);
// };

const {width, height} = Dimensions.get('window');

class StartPage extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Svg width="100%" height="30%">
          <Text
            fontSize= {width < 700 ? '24' : '40'}
            fontWeight="bold"
            fontFamily="Verdana"
            x={width/2}
            y={width < 700 ? 150 : 200}
            textAnchor="middle"
            fill="#4c749e"
            stroke="#123c69"
          >
              WHAT DO YOU NEED?
          </Text>
        </Svg>
        <CovidImage/>
        <View style={{marginTop: 60}}>
          <Button onPress={() => this.props.navigation.navigate('Choose your city!')} title="Lets' start!" color="#ac3b61"/>
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

export default function(props) {
  const navigation = useNavigation();
  
  return <StartPage {...props} navigation={navigation} />;
}
