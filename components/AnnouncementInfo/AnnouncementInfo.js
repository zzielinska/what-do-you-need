import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import DrawerIcon from '../DrawerIcon/DrawerIcon';

class AnnouncementInfo extends React.Component {
  render(){
    const { route } = this.props;
    return (
      <View>
          <DrawerIcon title={route.params.needs} />
            <View style={styles.container}>
            <Text>{route.params.title}</Text>
            <Text>{route.params.location}</Text>
            <Text>{route.params.needs}</Text>
        </View>
      </View>
    );
}
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
});

export default function(props) {
  const route = useRoute();

  return <AnnouncementInfo {...props} route={route} />;
}