import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import SelectCityPage from './components/SelectCityPage/SelectCityPage';
import AnnouncementsPage from './components/AnnouncementsPage/AnnouncementsPage';
import AnnouncementInfo from './components/AnnouncementInfo/AnnouncementInfo';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {Header, Left, Icon} from 'native-base'

const Drawer = createDrawerNavigator();

function CustomDrawerContent({props, navigation}) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Choose your city!"
        onPress={() => navigation.navigate('Choose your city!')}
      />
      <DrawerItem
        label="Log in!"
        onPress={() => navigation.navigate('Log in!')}
      />
    </DrawerContentScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerStyle={{backgroundColor: '#c6cbef', width: 240}} drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          style={styles.container}
          name="Choose your city!"
          component={SelectCityPage}
        />
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
