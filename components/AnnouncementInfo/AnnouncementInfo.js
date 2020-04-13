import * as React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import DrawerIcon from '../DrawerIcon/DrawerIcon';

class AnnouncementInfo extends React.Component {
  render(){
    const { route } = this.props;

    return (
      <View>
        <DrawerIcon title={route.params.needs} />
        <View style={styles.container}>
          <Text>{route.params.title}</Text>
          <Text>{route.params.location}</Text>
          <Text>{route.params.phoneNumber}</Text>
          <Text>{route.params.needs}</Text>
        </View>
      </View>
    );
}
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  btn:{
    width:"50%",
    backgroundColor:"#fb5b5a",
    borderRadius:20,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize:20,
    marginBottom:10
  },
});

export default function(props) {
  const route = useRoute();
  const navigation = useNavigation();

  return <AnnouncementInfo {...props} route={route} navigation={navigation} />;
}