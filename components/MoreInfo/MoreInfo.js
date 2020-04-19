import React, {useCallback} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Linking, Dimensions } from 'react-native';
import DrawerIcon from '../DrawerIcon/DrawerIcon';

const {width, height} = Dimensions.get('window');

const infoLink = "https://www.gov.pl/web/koronawirus";

const fbLink = "https://www.facebook.com/zosia.zielinska.77";

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    }
  }, [url]);

  return (
    <TouchableOpacity style={styles.btn}  onPress={handlePress}>
      <Text style={styles.btnText}>{children}</Text>
    </TouchableOpacity>);
};

export default class AnnouncementInfo extends React.Component {
  render(){
    return (
      <View style={{height:'100%'}}>
          <DrawerIcon />
            <View style={styles.container}>
            <Text style={styles.title}>More Info!</Text>
            <View style={styles.box}>
            <Text style={styles.text}>If you want to know more about situation in your country in case of COVID-19 check this!</Text>
            <OpenURLButton url={infoLink}>Government oficial info</OpenURLButton>
            </View>
            <View style={styles.box}>
            <Text style={styles.text}>If you want to contact with me it will be pleasure to meet you!</Text>
            <OpenURLButton url={fbLink}>Meet me on Facebook!</OpenURLButton>
            </View>
        </View>
      </View>
    );
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#bfbdbe',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
      color: '#123c69',
      fontWeight: 'bold',
      fontSize: width < 700 ? 24 : 40,
      paddingBottom: width < 700 ? 10 : 30,
    },
    text:{
      color: '#5e5c5d',
      fontSize: width < 700 ? 14 : 24,
      padding: width < 700 ? 10 : 30,
      textAlign: "center"
    },
    btnText:{
      color: 'white',
      fontSize: width < 700 ? 14 : 24,
      padding: width < 700 ? 10 : 30,
      textAlign: "center"
    },
    box:{
      width:"90%",
      backgroundColor:"#bab2b5",
      borderColor: '#8c898b',
      borderWidth: 2,
      borderRadius:20,
      height:'30%',
      alignItems:"center",
      justifyContent:"center",
      marginTop:20,
      marginBottom:10,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.4,
      shadowRadius: 2,
    },
    btn:{
      width:"70%",
      backgroundColor:"#ac3b61",
      borderRadius:20,
      height:'30%',
      alignItems:"center",
      justifyContent:"center",
      marginBottom: width < 700 ? 10 : 30,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.4,
      shadowRadius: 2,
    },
});
