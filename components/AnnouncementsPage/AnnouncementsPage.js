import * as React from 'react';
import axios from 'axios';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import Announcement from '../Announcement/Announcement';
import DrawerIcon from '../DrawerIcon/DrawerIcon';
import { useRoute } from '@react-navigation/native';

class AnnouncementsPage extends React.Component {

  state = {
    announcements: null
  }

  componentDidMount() {
    axios.get('https://what-do-you-need-f9f98.firebaseio.com/announcements.json')
      .then(response => {
        this.setState({announcements: response.data});
      });
  }

  render() {
  const { route } = this.props;

  let announcementsList = <ActivityIndicator size="large" color="#0000ff" />
  if (this.state.announcements) {
    announcementsList = Object.values(this.state.announcements).map(announcement => {
      if (announcement.city === route.params.city) {
        return (
          <Announcement
            id={announcement.id}
            title={announcement.title}
            location={announcement.location}
            needs={announcement.needs}
          />
        )
      }
    })
  }

    return (
      <View style={styles.container}>
        <DrawerIcon title={route.params.city} />
        {announcementsList}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});

export default function(props) {
  const route = useRoute();

  return <AnnouncementsPage {...props} route={route} />;
}