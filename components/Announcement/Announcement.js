import * as React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

class Announcement extends React.Component {
  render(){
    const { navigation } = this.props;
    return (
      <View style={styles.btn}>
            <Text style={styles.text}>{this.props.title}</Text>
            <Text style={styles.text}>{this.props.location}</Text>
            <Text style={styles.text}>{this.props.needs}</Text>
            <Text style={styles.more} onPress={() => navigation.navigate('AnnouncementInfo', {...this.props})}>more info</Text>
      </View>
    );
}
}

const styles = StyleSheet.create({
  btn:{
    width:"80%",
    backgroundColor:"#bab2b5",
    borderColor: '#8c898b',
    borderWidth: 2,
    borderRadius:20,
    height:'20%',
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
    textTransform: 'uppercase',
    fontSize:  width < 700 ? 18 : 20,
  },
  more: {
    color: '#ac3b61',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize:  width < 700 ? 18 : 20,
  },
});

export default function(props) {
  const navigation = useNavigation();

  return <Announcement {...props} navigation={navigation} />;
}