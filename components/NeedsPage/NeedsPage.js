import * as React from 'react';
import axios from 'axios';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import Announcement from '../Announcement/Announcement';
import DrawerIcon from '../DrawerIcon/DrawerIcon';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Icon } from 'native-base';

const {width, height} = Dimensions.get('window');

class NeedsPage extends React.Component {

  state = {
    announcements: null,
    deletedAnn: [],
    isLogged: null,
  }

  getAnnoncements = () => {
    axios.get('/myAnnouncements.json')
      .then(response => {
        this.setState({announcements: response.data});
    });
  }

  removeNeed = (choosenKey) => {
    axios.delete(`/myAnnouncements/${choosenKey}.json`)
    .then(() => {
      this.getAnnoncements();
    })
    .catch((err) => {
        console.log(err.message);
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.route.params.isLogged !== prevProps.route.params.isLogged && !prevProps.route.params.isLogged) {
      this.setState({isLogged: this.props.route.params.isLogged});
    }
    if (this.props.route.params.fromLoginForm  && !this.state.isLogged) {
      this.setState({isLogged: this.props.route.params.isLogged});
    }
  }

  componentDidMount() {
    this.getAnnoncements();
  }

  render() {
  const { navigation, route } = this.props;

  if (route.params.needAdded){
    this.getAnnoncements();
  }

  let announcementsList = <Text style={styles.text}>Don't see any announcements...</Text>;
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
          <Text style={styles.remove} onPress={() => this.removeNeed(key)}>Remove this need <Icon name='trash'></Icon></Text>
          </React.Fragment>
        )
      }
      })
  }
  let yourPage = (
  <View style={styles.container}>
    <Text style={styles.title}>You need to log in!</Text>
    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Log in!')}>
      <Text style={styles.text}>Log In!</Text>
    </TouchableOpacity>
  </View>)

  if(this.state.isLogged) {
    yourPage = (
    <View style={styles.container}>
      {announcementsList}
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.text} onPress={() => navigation.navigate('Add Need')}>Add need</Text>
      </TouchableOpacity>
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
  container: {
    backgroundColor: '#bfbdbe',
    height: height,
    alignItems: 'center',
  },
  title:{
    color: '#123c69',
    fontWeight: 'bold',
    fontSize: width < 700 ? 24 : 40,
    marginTop: 70,
  },
  btn:{
    width:"40%",
    backgroundColor:"#ac3b61",
    borderRadius:20,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    marginBottom:10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    color: 'white',
    fontSize:  width < 700 ? 18 : 30,
  },
  text: {
    color: 'white',
    fontSize:  width < 700 ? 18 : 30,
  },
  remove: {
    color: 'black',
    textTransform: 'uppercase',
    fontSize: 18,
  }
});

export default function(props) {
  const navigation = useNavigation();
  const route = useRoute();

  return <NeedsPage {...props} route={route} navigation={navigation} />;
}
