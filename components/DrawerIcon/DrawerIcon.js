import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import {Header, Icon, Button, Right, Body, Left, Title} from 'native-base'
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

class DrawerIcon extends Component{
  render() {
    const { navigation } = this.props;
    let title;
    if (this.props.title) {
      title=<Title>{this.props.title}</Title>
    }
    return(
      <Header style={styles.header}>
      <Left>
        <Button transparent>
          <Icon name='menu' onPress={() => navigation.openDrawer()} style={styles.icon} />
        </Button>
      </Left>
      <Body style={styles.title}>
        {title}
      </Body>
      <Right />
    </Header>
    )
  }
}


const styles = StyleSheet.create({
  header: {
    backgroundColor: '#123c69'
  },
  icon: {
    color: 'white'
  },
  title: {
    alignItems: 'center',
    textTransform: 'uppercase',
    marginLeft: width < 500 ? 0 : width*0.2,
  }
})

export default function(props) {
  const navigation = useNavigation();

  return <DrawerIcon {...props} navigation={navigation} />;
}