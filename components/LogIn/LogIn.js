import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import DrawerIcon from '../DrawerIcon/DrawerIcon';
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

class LogIn extends React.Component {
    state={
        email:"",
        password:"",
        isEmailValid: true,
        isLogged: false,
      }

      validateEmail = email => {
        return email.includes('@');
      };

      loginHandler = () => {
        const isValid = this.validateEmail(this.state.email);
        this.setState({isEmailValid: isValid, isLogged: isValid});
        if (isValid) {
          //todo:zrobic logowanie w firebase
          this.props.navigation.navigate('Your needs!', {isLogged: true, fromLoginForm: true})
        }
      }

      signingUpHandler = () => {
        const isValid = this.validateEmail(this.state.email);
        this.setState({isEmailValid: isValid});
        if (isValid) {
          //todo:zrobic logowanie w firebase
          this.setState({isLogged: isValid});
        }
      }

  render(){
    return (
        <View style={{height:'100%'}}>
       <DrawerIcon />
       <View style={styles.container} > 
        <Text style={styles.title}>Welcome! Log in!</Text>
        <View style={styles.inputView} >
            <TextInput  
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
         </View>
         <Text style={{color: 'red', marginBottom:10, display: this.state.isEmailValid ? 'none' : 'inline'}}>Email is incorrect!</Text>
         <View style={styles.inputView} >
            <TextInput  
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
         </View>
        <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.goBack()}>
          <Text style={styles.loginText} onClick={this.signingUpHandler}>SIGNUP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={this.loginHandler}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      </View>
    );
  }
}


export default function(props) {
    const navigation = useNavigation();
  
    return <LogIn {...props} navigation={navigation} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bfbdbe',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color: '#123c69',
    fontWeight: 'bold',
    fontSize: width < 700 ? 24 : 40,
    paddingBottom: width < 700 ? 30 : 40,
  },
  inputView:{
    width:"70%",
    backgroundColor:"#bab2b5",
    borderRadius:20,
    height:50,
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
  loginText:{
    color: 'white',
    fontSize: width < 700 ? 14 : 24,
    padding: width < 700 ? 10 : 30,
    textAlign: "center"
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
  },
});