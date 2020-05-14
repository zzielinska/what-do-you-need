import * as React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import DrawerIcon from '../DrawerIcon/DrawerIcon';

const {width, height} = Dimensions.get('window');

class AnnouncementInfo extends React.Component {
  render(){
    const { route } = this.props;

    return (
      <View>
        <DrawerIcon title={route.params.needs} />
        <View style={styles.container}>
          <Text style={styles.title}>There's some more infos!</Text>
          <View style={styles.btn}>
            <Text style={styles.text}>Announcement Info: {route.params.title || 'Unknown'}</Text>
            <Text style={styles.text}>User Location: {route.params.location || 'Unknown'}</Text>
            <Text style={styles.text}>User Phone Number: {route.params.phoneNumber || 'Unknown'}</Text>
            <Text style={styles.text}>Category: {route.params.needs}</Text>
          </View>
          <Text style={styles.more}>Contact if you can help!</Text>
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
  text:{
    color: '#5e5c5d',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    paddingTop: width < 700 ? 15 : 25,
    fontSize: width < 700 ? 14 : 20,
  },
  title:{
    color: '#123c69',
    fontWeight: 'bold',
    fontSize: width < 700 ? 24 : 40,
    paddingTop: width < 700 ? 30 : 50,
    paddingBottom: width < 700 ? 10 : 30,
  },  
  more:{
    color: '#ac3b61',
    fontWeight: 'bold',
    fontSize: width < 700 ? 20 : 30,
    paddingTop: width < 700 ? 20 : 30,
  },
  btn:{
    width:"90%",
    backgroundColor:"#bab2b5",
    borderColor: '#8c898b',
    borderWidth: 2,
    borderRadius:20,
    height:'50%',
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    marginBottom:10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
});

export default function(props) {
  const route = useRoute();
  const navigation = useNavigation();

  return <AnnouncementInfo {...props} route={route} navigation={navigation} />;
}