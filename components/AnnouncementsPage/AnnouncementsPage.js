import * as React from 'react';
import axios from 'axios';
import { View, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';
import Announcement from '../Announcement/Announcement';
import DrawerIcon from '../DrawerIcon/DrawerIcon';
import { useRoute } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

class AnnouncementsPage extends React.Component {

  state = {
    announcements: null
  }

  componentDidMount() {
    axios.get('')
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
      <View>
        <DrawerIcon title={route.params.city} />
        <View style={styles.container}>
        {announcementsList}
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
});

export default function(props) {
  const route = useRoute();

  return <AnnouncementsPage {...props} route={route} />;
}
