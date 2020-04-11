import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

class Announcement extends React.Component {
  render(){
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
            <Text onPress={() => navigation.navigate('AnnouncementInfo', {...this.props})}>{this.props.title}</Text>
            <Text>{this.props.location}</Text>
            <Text>{this.props.needs}</Text>
      </View>
    );
}
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: '#76d3e3',
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
});

export default function(props) {
  const navigation = useNavigation();

  return <Announcement {...props} navigation={navigation} />;
}