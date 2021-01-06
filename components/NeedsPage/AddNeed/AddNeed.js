import * as React from 'react';
import axios from 'axios';
import { View, StyleSheet, TouchableOpacity, Picker, TextInput, Text, Dimensions } from 'react-native';
import DrawerIcon from '../../DrawerIcon/DrawerIcon';
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

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
    axios.post('/myAnnouncements.json', {...this.state})
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
      backgroundColor: '#bfbdbe',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
      fontWeight:"bold",
      fontSize: width < 700 ? 24 : 40,
      color:"#123c69",
      marginBottom:40
    },
    inputView:{
      width:"70%",
      backgroundColor:"#bab2b5",
      borderRadius:20,
      height:40,
      marginBottom:10,
      justifyContent:"center",
      padding:20,
      borderColor: '#8c898b',
      borderWidth: 1,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.4,
      shadowRadius: 2,
    },
    inputText:{
      height:50,
      color:"#5e5c5d"
    },
    btn:{
      width:"40%",
      backgroundColor:"#ac3b61",
      borderRadius:20,
      height:40,
      alignItems:"center",
      justifyContent:"center",
      marginBottom:10,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.4,
      shadowRadius: 2,
    },
    twoPickers: {
      width: width < 700 ? 220 : 500,
      height: 60,
      borderRadius:20,
      backgroundColor: '#bab2b5',
      marginBottom:-200,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.4,
      shadowRadius: 2,
    },
    twoPickerItems: {
      height: 58,
      color: '#5e5c5d'
    },
});

export default function(props) {
  const navigation = useNavigation();

  return <AddNeed {...props} navigation={navigation} />;
}
