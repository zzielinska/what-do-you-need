import React, { Component } from 'react';
import {Header, Icon, Button, Right, Body, Left, Title} from 'native-base'
import { useNavigation } from '@react-navigation/native';

class DrawerIcon extends Component{
  render() {
    const { navigation } = this.props;
    let title;
    if (this.props.title) {
      title=<Title>{this.props.title}</Title>
    }
    return(
      <Header>
      <Left>
        <Button transparent>
          <Icon name='menu' onPress={() => navigation.openDrawer()} />
        </Button>
      </Left>
      <Body>
        {title}
      </Body>
      <Right />
    </Header>
    )
  }
}
export default function(props) {
  const navigation = useNavigation();

  return <DrawerIcon {...props} navigation={navigation} />;
}