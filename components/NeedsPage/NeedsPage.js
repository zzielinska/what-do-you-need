import * as React from 'react';
import axios from 'axios';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import Announcement from '../Announcement/Announcement';
import DrawerIcon from '../DrawerIcon/DrawerIcon';
import { useNavigation, useRoute } from '@react-navigation/native';

class NeedsPage extends React.Component {

  state = {
    announcements: null,
    deletedAnn: [],
  }

  getAnnoncements = () => {
    axios.get('https://what-do-you-need-f9f98.firebaseio.com/myAnnouncements.json')
      .then(response => {
        this.setState({announcements: response.data});
      });
  }

  removeNeed = (choosenKey) => {
    const newDeletedKeys = this.state.deletedAnn.concat(choosenKey);
    this.setState({deletedAnn: newDeletedKeys});
  }

  componentDidMount() {
    this.getAnnoncements();
  }

  render() {
  const { navigation, route } = this.props;

  if (route.params.needAdded){
    this.getAnnoncements();
  }

  let announcementsList =  <ActivityIndicator size="large" color="#0000ff" />
  if (this.state.announcements) {
    announcementsList = Object.entries(this.state.announcements).map(([key, value]) => {
      if (!this.state.deletedAnn.includes(key)) {
        return (
          <React.Fragment>
          <Announcement
            key={key}
            title={value.title}
            location={value.location}
            needs={value.needs}
          />
          <Text onPress={() => this.removeNeed(key)}>Remove your need</Text>
          </React.Fragment>
        )
      }
      })
  }
  let yourPage = <Text style={styles.btn} onPress={() => navigation.navigate('Log in!')}>Log In!</Text>

  if(this.state.isLogged) {
    yourPage = (
    <View>
      {announcementsList}
      <Text style={styles.btn} onPress={() => navigation.navigate('Add Need')}>Add need</Text>
    </View>)
  }

    return (
      <View>
        <DrawerIcon />
        {yourPage}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btn:{
    width:"70%",
    textAlign: "center",
    fontSize:20,
    margin: "auto",
    backgroundColor:"#fb5b5a",
    borderRadius:20,
    height:30,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
});

export default function(props) {
  const navigation = useNavigation();
  const route = useRoute();

  return <NeedsPage {...props} route={route} navigation={navigation} />;
}