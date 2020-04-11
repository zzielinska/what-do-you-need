import * as React from 'react';
import axios from 'axios';
import { View, StyleSheet, ActivityIndicator, Text, FlatList } from 'react-native';
import Announcement from '../Announcement/Announcement';
import DrawerIcon from '../DrawerIcon/DrawerIcon';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

class NeedsPage extends React.Component {

  state = {
    announcements: null
  }

  componentDidMount() {
    axios.get('https://what-do-you-need-f9f98.firebaseio.com/myAnnouncements.json')
      .then(response => {
        this.setState({announcements: response.data});
      });
  }

  render() {
  const { navigation } = this.props;

  let announcementsList =  <ActivityIndicator size="large" color="#0000ff" />
  if (this.state.announcements) {
    announcementsList = Object.values(this.state.announcements).map(announcement => {
        return (
          <Announcement
            key={announcement.title}
            id={announcement.id}
            title={announcement.title}
            location={announcement.location}
            needs={announcement.needs}
          />
        )
      })
  }

    return (
      <View>
        <DrawerIcon />
        <ScrollView>
        {announcementsList}
        <Text style={styles.btn} onPress={() => navigation.navigate('Add Need')}>Add need</Text>
        </ScrollView>
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

  return <NeedsPage {...props} navigation={navigation} />;
}