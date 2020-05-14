import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import SelectCityPage from './components/SelectCityPage/SelectCityPage';
import AnnouncementsPage from './components/AnnouncementsPage/AnnouncementsPage';
import AnnouncementInfo from './components/AnnouncementInfo/AnnouncementInfo';
import LogIn from './components/LogIn/LogIn';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import NeedsPage from './components/NeedsPage/NeedsPage';
import AddNeed from './components/NeedsPage/AddNeed/AddNeed';
import MoreInfo from './components/MoreInfo/MoreInfo';
import StartPage from './components/StartPage/StartPage';

const Drawer = createDrawerNavigator();

const {width, height} = Dimensions.get('window');

function CustomDrawerContent({props, navigation}) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Choose your city!"
        onPress={() => navigation.navigate('Choose your city!')}
      />
      <DrawerItem
        label="Your needs!"
        onPress={() => navigation.navigate('Your needs!', {needAdded: false, isLogged: false})}
      />
      <DrawerItem
        label="Log in!"
        onPress={() => navigation.navigate('Log in!')}
      />
      <DrawerItem
        label="More Info!"
        onPress={() => navigation.navigate('More Info')}
      />
    </DrawerContentScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerStyle={styles.drawerStyle} drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Start"  component={StartPage} />
        <Drawer.Screen name="Choose your city!"  component={SelectCityPage} />
        <Drawer.Screen name="Log in!"  component={LogIn} />
        <Drawer.Screen name="Your needs!"  component={NeedsPage} />
        <Drawer.Screen name="Add Need"  component={AddNeed} />
        <Drawer.Screen name="More Info"  component={MoreInfo} />
        <Drawer.Screen name="Announcements" component={AnnouncementsPage} />
        <Drawer.Screen name="AnnouncementInfo" component={AnnouncementInfo} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerStyle: {
    backgroundColor: '#bab2b5',
    width: width < 700 ? '70%' : '30%'
  },
});
