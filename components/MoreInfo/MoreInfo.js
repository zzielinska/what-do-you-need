import React, {useCallback} from 'react';
import { View, StyleSheet, Text, Button, Linking } from 'react-native';
import DrawerIcon from '../DrawerIcon/DrawerIcon';

const infoLink = "https://www.gov.pl/web/koronawirus";

const fbLink = "https://www.facebook.com/zosia.zielinska.77";

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    }
  }, [url]);

  return <Button color='#607282' title={children} onPress={handlePress} />;
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
      backgroundColor: '#003f5c',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
      fontWeight:"bold",
      textAlign: "center",
      fontSize:30,
      color:"#fb5b5a",
      marginBottom:40
    },
    text:{
      fontWeight:"bold",
      textAlign: "center",
      fontSize:14,
      color:"black",
      marginBottom:10
    },
    box:{
        width: '90%',
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: '#607282',
        borderRadius: 23,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        height:150,
        margin: 10
    },
});
