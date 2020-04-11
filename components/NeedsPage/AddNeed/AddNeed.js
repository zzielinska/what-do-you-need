import * as React from 'react';
import axios from 'axios';
import { View, StyleSheet, TouchableOpacity, Picker, TextInput, Text } from 'react-native';
import DrawerIcon from '../../DrawerIcon/DrawerIcon';
import { useNavigation } from '@react-navigation/native';
// import { useRoute } from '@react-navigation/native';

class AddNeed extends React.Component {

  state = {
    title: null,
    location: null,
    needs: "Groceries",
    city: null,
    phoneNumber: null,
    needAdded: false
  }

  addHandler = () => {
    axios.post('https://what-do-you-need-f9f98.firebaseio.com/myAnnouncements.json', {...this.state})
      .then(() => {
        this.setState({needAdded:true})
      });
  }

  render() {
  const { navigation } = this.props;

  if(this.state.needAdded) {
    navigation.navigate('Your needs!', {needAdded: true})
  }

    return (
        <View style={{height:'100%'}}>
        <DrawerIcon />
      <View style={styles.container}>
        <Text style={styles.title}>What you need!</Text>
         <View style={styles.inputView} >
            <TextInput  
            style={styles.inputText}
            placeholder="City..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({city:text})}/>
         </View>
        <View style={styles.inputView} >
            <TextInput  
            style={styles.inputText}
            placeholder="Location..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({location:text})}/>
         </View>
         <View style={styles.inputView} >
            <TextInput  
            style={styles.inputText}
            placeholder="Phone Number..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({phoneNumber:text})}/>
         </View>
         <View style={styles.inputView} >
            <TextInput  
            style={styles.inputText}
            placeholder="What do you need?" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({title:text})}/>
         </View>
         <View style={{marginBottom:100}} >
            <Picker
                selectedValue={this.state.needs}
                style={styles.twoPickers} itemStyle={styles.twoPickerItems}
                onValueChange={itemValue => this.setState({needs:itemValue})}
            >
                <Picker.Item label="Groceries" value="Groceries" />
                <Picker.Item label="Medicines" value="Medicines" />
                <Picker.Item label="Support" value="Support" />
            </Picker>
         </View>
        <TouchableOpacity style={styles.btn} onPress={this.addHandler}>
         <Text>ADD</Text>
         </TouchableOpacity>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#003f5c',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
      fontWeight:"bold",
      fontSize:40,
      color:"#fb5b5a",
      marginBottom:40
    },
    inputView:{
      width:"70%",
      backgroundColor:"#465881",
      borderRadius:20,
      height:40,
      marginBottom:10,
      justifyContent:"center",
      padding:20
    },
    inputText:{
      height:50,
      color:"white"
    },
    btn:{
      width:"50%",
      backgroundColor:"#fb5b5a",
      borderRadius:20,
      height:40,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
    },
    twoPickers: {
      width: 220,
      height: 60,
      borderRadius:20,
      backgroundColor: '#465881',
      marginBottom:-200
    },
    twoPickerItems: {
      height: 58,
      color: 'black'
    },
});

export default function(props) {
  const navigation = useNavigation();

  return <AddNeed {...props} navigation={navigation} />;
}