import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import SelectCityPage from './components/SelectCityPage/SelectCityPage';
import AnnouncementsPage from './components/AnnouncementsPage/AnnouncementsPage';
import AnnouncementInfo from './components/AnnouncementInfo/AnnouncementInfo';
import LogIn from './components/LogIn/LogIn';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import NeedsPage from './components/NeedsPage/NeedsPage';
import AddNeed from './components/NeedsPage/AddNeed/AddNeed';
import MoreInfo from './components/MoreInfo/MoreInfo';

const Drawer = createDrawerNavigator();

function CustomDrawerContent({props, navigation}) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Choose your city!"
        onPress={() => navigation.navigate('Choose your city!')}
      />
      <DrawerItem
        label="Your needs!"
        onPress={() => navigation.navigate('Your needs!', {needAdded: false})}
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
      <Drawer.Navigator drawerStyle={{backgroundColor: '#c6cbef', width: 240}} drawerContent={props => <CustomDrawerContent {...props} />}>
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
    justifyContent: 'center',
  },
});
